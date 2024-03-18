CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--
-- CREATE TABLE configuration
--

CREATE TABLE case_management.configuration (
	configuration_code varchar(10) NOT NULL, -- A human readable code used to identify an configuration entry.
	configuration_value varchar(250) NOT NULL, -- The value of the configuration entry.
	long_description varchar(250) NOT NULL, -- The long description of the configuration entry.
	active_ind bool NOT NULL, -- A boolean indicator to determine if the configuration_entry is active.
	create_user_id varchar(32) NOT NULL, -- The id of the user that created the configuration entry.
	create_utc_timestamp timestamp NOT NULL, -- The timestamp when the configuration entry was created.  The timestamp is stored in UTC with no Offset.
	update_user_id varchar(32) NOT NULL, -- The id of the user that updated the configuration entry.
	update_utc_timestamp timestamp NULL, -- The timestamp when the configuration entry was updated.  The timestamp is stored in UTC with no Offset.
	CONSTRAINT configuration_pk PRIMARY KEY (configuration_code)
);
COMMENT ON TABLE case_management.configuration IS 'The configuration table is used to store constants which are expected to change over the lifecycle of the application, or have different values in different environments.   By making changes to in the database the behaviour of the application can be altered without requiring a full deployment.';

-- Column comments

COMMENT ON COLUMN case_management.configuration.configuration_code IS 'A human readable code used to identify an configuration entry.';
COMMENT ON COLUMN case_management.configuration.configuration_value IS 'The value of the configuration entry.';
COMMENT ON COLUMN case_management.configuration.long_description IS 'The long description of the configuration entry.';
COMMENT ON COLUMN case_management.configuration.active_ind IS 'A boolean indicator to determine if the configuration_entry is active.';
COMMENT ON COLUMN case_management.configuration.create_user_id IS 'The id of the user that created the configuration entry.';
COMMENT ON COLUMN case_management.configuration.create_utc_timestamp IS 'The timestamp when the configuration entry was created.  The timestamp is stored in UTC with no Offset.';
COMMENT ON COLUMN case_management.configuration.update_user_id IS 'The id of the user that updated the configuration entry.';
COMMENT ON COLUMN case_management.configuration.update_utc_timestamp IS 'The timestamp when the configuration entry was updated.  The timestamp is stored in UTC with no Offset.';

--
-- INSERT INTO configuration
--

INSERT
	INTO
	case_management.configuration (configuration_code,
	configuration_value,
	long_description,
	active_ind,
	create_user_id,
	create_utc_timestamp,
	update_user_id,
	update_utc_timestamp)
VALUES ('CDTABLEVER',
  '1',
  'The current version of the application stored in the database.   Will be incremented by 1 with each  change to signal to the application cache that the values of the code tables should be refreshed.',
  true,
  'FLYWAY',
  now(),
  'FLYWAY',
  now()) 
ON CONFLICT DO NOTHING;

--
-- CREATE FUNCTION audit_history
--

CREATE OR REPLACE FUNCTION audit_history() RETURNS trigger AS $BODY$
  DECLARE

	target_history_table TEXT;
	target_pk TEXT;

  BEGIN
    target_history_table := TG_ARGV[0];
    target_pk := TG_ARGV[1];

    IF TG_OP ='INSERT' THEN 
        
      -- Don't trust the caller not to manipulate any of these fields
      NEW.create_utc_timestamp := current_timestamp; -- create timestamp must be the current time
      NEW.update_utc_timestamp := current_timestamp; -- update timestamp must be the current time
      NEW.update_user_id := NEW.create_user_id;  -- the update user must be the same as the create user

      EXECUTE
        format( 
            'INSERT INTO %I (target_row_id, operation_type, operation_user_id, data_after_executed_operation) VALUES ($1.%I,  ''I'', $1.create_user_id, to_jsonb($1))',  target_history_table, target_pk
        )
        USING NEW;
      RETURN NEW;

    ELSIF TG_OP = 'UPDATE' THEN 

      -- Don't trust the caller not to manipulate any of these fields
      NEW.update_utc_timestamp := current_timestamp;  -- update timestamp must be the current time
      NEW.create_user_id := OLD.create_user_id; -- create userId can't be altered
      NEW.create_utc_timestamp := OLD.create_utc_timestamp; -- update timestamp can't be altered

      EXECUTE
        format(
            'INSERT INTO %I (target_row_id, operation_type, operation_user_id, data_after_executed_operation) VALUES ($1.%I, ''U'', $1.update_user_id, to_jsonb($1))', target_history_table, target_pk
          )
        USING NEW;
      RETURN NEW;

    ELSIF TG_OP = 'DELETE' THEN

      EXECUTE
        format(
                'INSERT INTO %I (target_row_id, operation_type) VALUES ($1.%I, ''D'')', target_history_table, target_pk
        )
        USING OLD;
      RETURN OLD;

    END IF;
  END;
$BODY$
LANGUAGE plpgsql;

-- CREATE TABLE TRIGGER

create trigger configuration_history_trigger before
insert
    or
delete
    or
update
    on
    case_management.configuration for each row execute function audit_history('configuration_h',
    'configuration_code');

--
-- CREATE TABLE configuration_h
--

CREATE TABLE case_management.configuration_h
(
  h_configuration_guid uuid NOT NULL  DEFAULT uuid_generate_v4(),
  target_row_id varchar(10) NOT NULL,
  operation_type char(1) NOT NULL,
  operation_user_id varchar(32) NOT NULL DEFAULT current_user,
  operation_executed_at timestamp NOT NULL DEFAULT now(),
  data_after_executed_operation jsonb,
CONSTRAINT "PK_h_configuration" PRIMARY KEY (h_configuration_guid)
);


COMMENT on table case_management.configuration_h is 'History table for configuration table';
COMMENT on column case_management.configuration_h.h_configuration_guid is 'System generated unique key for configuration history. This key should never be exposed to users via any system utilizing the tables.';
COMMENT on column case_management.configuration_h.target_row_id is 'The unique key for the configuration that has been created or modified.';
COMMENT on column case_management.configuration_h.operation_type is 'The operation performed: I = Insert, U = Update, D = Delete';
COMMENT on column case_management.configuration_h.operation_user_id is 'The id of the user that created or modified the data in the configuration table.  Defaults to the logged in user if not passed in by the application.';
COMMENT on column case_management.configuration_h.operation_executed_at is 'The timestamp when the data in the configuration table was created or modified.  The timestamp is stored in UTC with no Offset.';
COMMENT on column case_management.configuration_h.data_after_executed_operation is 'A JSON representation of the row in the table after the operation was completed successfully.   This implies that the latest row in the audit table will always match with the current row in the live table.';

CREATE or REPLACE TRIGGER configuration_history_trigger
  BEFORE INSERT OR DELETE OR UPDATE ON configuration
  FOR EACH ROW EXECUTE PROCEDURE audit_history('configuration_h', 'configuration_code');
