--
-- CREATE TABLE wildlife
--
CREATE TABLE
  case_management.wildlife (
    wildlife_guid uuid NOT NULL,
    case_file_guid uuid NOT NULL,
    threat_level_code varchar(10),
    conflict_history_code varchar(10),
    sex_code varchar(10),
    age_code varchar(10),
    hwcr_outcome_code varchar(10),
    species_code varchar(10) NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_wildlife_guid" PRIMARY KEY (wildlife_guid)
  )
  -- set default PK value
ALTER TABLE case_management.wildlife
ALTER COLUMN wildlife
SET DEFAULT uuid_generate_v4 ();

-- foreign keys
ALTER TABLE case_management.wildlife ADD CONSTRAINT FK_wildlife__case_file_guid FOREIGN KEY (case_file_guid) REFERENCES case_management.case_file (case_file_guid);

ALTER TABLE case_management.wildlife ADD CONSTRAINT FK_wildlife__threat_level_code FOREIGN KEY (threat_level_code) REFERENCES case_management.threat_level_code (threat_level_code);

ALTER TABLE case_management.wildlife ADD CONSTRAINT FK_wildlife__conflict_history_code FOREIGN KEY (conflict_history_code) REFERENCES case_management.conflict_history_code (conflict_history_code);

ALTER TABLE case_management.wildlife ADD CONSTRAINT FK_wildlife__sex_code FOREIGN KEY (sex_code) REFERENCES case_management.sex_code (sex_code);

ALTER TABLE case_management.wildlife ADD CONSTRAINT FK_wildlife__age_code FOREIGN KEY (age_code) REFERENCES case_management.age_code (age_code);

ALTER TABLE case_management.wildlife ADD CONSTRAINT FK_wildlife__hwcr_outcome_code FOREIGN KEY (hwcr_outcome_code) REFERENCES case_management.hwcr_outcome_code (hwcr_outcome_code);

ALTER TABLE case_management.wildlife ADD CONSTRAINT FK_wildlife__species_code FOREIGN KEY (species_code) REFERENCES case_management.species_code (species_code);

-- create new action reference
ALTER TABLE action
ADD COLUMN wildlife_guid uuid;

ALTER TABLE case_management.action ADD CONSTRAINT FK_action__wildlife_guid FOREIGN KEY (wildlife_guid) REFERENCES case_management.wildlife (wildlife_guid);

-- table comments
comment on table case_management.wildlife is 'WILDLIFE can be a participant on a CASE_FILE, specifically for CASE_FILE with a CASE_CODE of ' HWCR ' (Human / Wildlife Conflict)';

comment on column case_management.wildlife.wildlife_guid is 'System generated unique key for an animal.  This key should never be exposed to users via any system utilizing the tables.';

comment on column case_management.wildlife.case_file_guid is 'System generated unique key for a case.  This key should never be exposed to users via any system utilizing the tables.';

comment on column case_management.wildlife.threat_level_code is 'A human readable code used to identify a threat level type.';

comment on column case_management.wildlife.conflict_history_code is 'A human readable code used to identify a conflict history type.';

comment on column case_management.wildlife.sex_code is 'A human readable code used to identify a sex type.';

comment on column case_management.wildlife.age_code is 'A human readable code used to identify an age type.';

comment on column case_management.wildlife.hwcr_outcome_code is 'A human readable code used to identify an HWCR outcome type.';

comment on column case_management.wildlife.species_code is 'A human readable code used to identify a species.   The COS Complaint Management is the authorative source for the screen labels and descriptions of the codes.';

comment on column case_management.wildlife.create_user_id is 'The id of the user that created the wildlife record.';

comment on column case_management.wildlife.create_utc_timestamp is 'The timestamp when the wildlife record was created.  The timestamp is stored in UTC with no Offset.';

comment on column case_management.wildlife.update_user_id is 'The id of the user that updated the wildlife record.';

comment on column case_management.wildlife.update_utc_timestamp is 'The timestamp when the wildlife record was updated.  The timestamp is stored in UTC with no Offset.';