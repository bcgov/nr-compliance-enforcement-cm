--
-- CREATE TABLE 
--
create table
  case_management.case_location_code (
    case_location_code varchar(10) NOT NULL,
    short_description varchar(50) NULL,
    long_description varchar(250) NULL,
    display_order int4 NULL,
    active_ind bool NULL,
    create_user_id varchar(32) NOT NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NULL,
    update_utc_timestamp timestamp NULL,
    constraint "PK_case_location_code" PRIMARY KEY (case_location_code)
  );

comment on table case_management.case_location_code is 'Contains the list of location types a user can select to indicate that where they take an action on a case. Values are Organization specific.';

comment on column case_management.case_location_code.short_description is 'The short description of the location type where the case was taken.';

comment on column case_management.case_location_code.long_description is 'The long description of the location type where the case was taken.';

comment on column case_management.case_location_code.display_order is 'The order in which the values of the location type should be displayed when presented to a user in a list.';

comment on column case_management.case_location_code.active_ind is 'A boolean indicator to determine if the location type is active.';

comment on column case_management.case_location_code.create_user_id is 'The id of the user that created the location type.';

comment on column case_management.case_location_code.create_utc_timestamp is 'The timestamp when the location type was created. The timestamp is stored in UTC with no Offset.';

comment on column case_management.case_location_code.update_user_id is 'The id of the user that updated the location type.';

comment on column case_management.case_location_code.update_utc_timestamp is 'The timestamp when the location type was updated. The timestamp is stored in UTC with no Offset.';

--
-- ALTER TABLE 
--
ALTER TABLE case_management.case_file ADD complainant_contacted_ind boolean DEFAULT 'N',
ADD attended_ind boolean DEFAULT 'N',
ADD case_location_code varchar(10),
ADD case_conflict_history_code varchar(10),
ADD case_threat_level_code varchar(10);

ALTER TABLE case_management.case_file ADD CONSTRAINT FK_case_file__case_conflict_history_code FOREIGN KEY (case_conflict_history_code) REFERENCES case_management.conflict_history_code (conflict_history_code),
ADD CONSTRAINT FK_case_file__case_threat_level_code FOREIGN KEY (case_threat_level_code) REFERENCES case_management.threat_level_code (threat_level_code),
ADD CONSTRAINT FK_case_file__case_location_code FOREIGN KEY (case_location_code) REFERENCES case_management.case_location_code (case_location_code);

ALTER TABLE case_management.wildlife
DROP CONSTRAINT FK_wildlife__conflict_history_code;

ALTER TABLE case_management.wildlife ADD identifying_features varchar(4000);