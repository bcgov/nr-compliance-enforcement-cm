CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--
-- creates new tables to support authroization outcomes
--
--
-- create authorization_permit table
--
create table
  case_management.authorization_permit (
    authorization_permit_guid uuid NULL DEFAULT uuid_generate_v4 (),
    case_file_guid uuid NOT NULL,
    authorization_permit_id varchar(50) NOT NULL,
    active_ind boolean default TRUE,
    create_user_id varchar(32) NOT NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NULL,
    update_utc_timestamp timestamp NULL,
    constraint "PK_authorization_permit_guid" PRIMARY KEY (authorization_permit_guid)
  );

--
-- create authorized_permit_h history table
--
CREATE TABLE
  case_management.authorization_permit_h (
    h_authorization_permit_guid uuid NOT NULL DEFAULT uuid_generate_v4 (),
    target_row_id uuid NOT NULL,
    operation_type char(1) NOT NULL,
    operation_user_id varchar(32) NOT NULL DEFAULT current_user,
    operation_executed_at timestamp NOT NULL DEFAULT now(),
    data_after_executed_operation jsonb,
    CONSTRAINT "PK_h_authorization_permit" PRIMARY KEY (h_authorization_permit_guid)
  );

--
-- create site table
--
create table
  case_management.site (
    site_guid uuid NULL DEFAULT uuid_generate_v4 (),
    case_file_guid uuid NOT NULL,
    site_id varchar(50) NOT NULL,
    active_ind boolean default TRUE,
    create_user_id varchar(32) NOT NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NULL,
    update_utc_timestamp timestamp NULL,
    constraint "PK_site_guid" PRIMARY KEY (site_guid)
  );

--
-- create site_h history table
--
CREATE TABLE
  case_management.site_h (
    h_site_guid uuid NOT NULL DEFAULT uuid_generate_v4 (),
    target_row_id uuid NOT NULL,
    operation_type char(1) NOT NULL,
    operation_user_id varchar(32) NOT NULL DEFAULT current_user,
    operation_executed_at timestamp NOT NULL DEFAULT now(),
    data_after_executed_operation jsonb,
    CONSTRAINT "PK_h_site" PRIMARY KEY (h_site_guid)
  );

--
-- add history triggers to authorization_permit and site tables
--
CREATE
OR REPLACE TRIGGER auth_permit_history_trigger BEFORE INSERT
OR DELETE
OR
UPDATE ON case_management.authorization_permit FOR EACH ROW
EXECUTE PROCEDURE audit_history (
  'authorization_permit_h',
  'authorization_permit_guid'
);

CREATE
OR REPLACE TRIGGER site_history_trigger BEFORE INSERT
OR DELETE
OR
UPDATE ON case_management.site FOR EACH ROW
EXECUTE PROCEDURE audit_history ('site_h', 'site_guid');

--
-- add foreign keys to case_file table
--
ALTER TABLE case_management.authorization_permit
ADD CONSTRAINT FK_authorization_permit__case_file_guid FOREIGN KEY (case_file_guid) REFERENCES case_management.case_file (case_file_guid);

ALTER TABLE case_management.site
ADD CONSTRAINT FK_site__case_file_guid FOREIGN KEY (case_file_guid) REFERENCES case_management.case_file (case_file_guid);