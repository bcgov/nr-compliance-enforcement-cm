--
-- Drop PoC Table
--

DROP TABLE
  case_management.users;

--
-- CREATE TABLE sex_code
--
CREATE TABLE
  case_management.sex_code (
    sex_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_sexcode" PRIMARY KEY (sex_code)
  );

--
-- CREATE TABLE age_code
--
CREATE TABLE
  case_management.age_code (
    age_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_agecode" PRIMARY KEY (age_code)
  );

--
-- CREATE TABLE threat_level_code
--
CREATE TABLE
  case_management.threat_level_code (
    threat_level_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_thrtlvlcd" PRIMARY KEY (threat_level_code)
  );

--
-- CREATE TABLE conflict_history_code
--
CREATE TABLE
  case_management.conflict_history_code (
    conflict_history_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_cnfthistcd" PRIMARY KEY (conflict_history_code)
  );

--
-- CREATE TABLE ear_code
--
CREATE TABLE
  case_management.ear_code (
    ear_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_earcode" PRIMARY KEY (ear_code)
  );

--
-- CREATE TABLE drug_code
--
CREATE TABLE
  case_management.drug_code (
    drug_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_drugcode" PRIMARY KEY (drug_code)
  );

--
-- CREATE TABLE drug_method_code
--
CREATE TABLE
  case_management.drug_method_code (
    drug_method_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_drgmethdcd" PRIMARY KEY (drug_method_code)
  );

--
-- CREATE TABLE drug_remaining_outcome_code
--
CREATE TABLE
  case_management.drug_remaining_outcome_code (
    drug_remaining_outcome_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_drgrmotccd" PRIMARY KEY (drug_remaining_outcome_code)
  );

--
-- CREATE TABLE hwcr_outcome_code
--
CREATE TABLE
  case_management.hwcr_outcome_code (
    hwcr_outcome_code varchar(10) NOT NULL,
    short_description varchar(50) NOT NULL,
    long_description varchar(250) NULL,
    display_order int4 NOT NULL,
    active_ind bool NOT NULL,
    create_user_id varchar(32) NOT NULL,
    create_user_guid uuid NULL,
    create_utc_timestamp timestamp NOT NULL,
    update_user_id varchar(32) NOT NULL,
    update_user_guid uuid NULL,
    update_utc_timestamp timestamp NOT NULL,
    CONSTRAINT "PK_hwcrotcmcd" PRIMARY KEY (hwcr_outcome_code)
  );

--
-- INSERT INTO sex_code
--
insert into sex_code (sex_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('M', 'Male', 'Male', 1, true, user, null, now(), user, null, now()),
      ('F', 'Female', 'Female', 2, true, user, null, now(), user, null, now()),
      ('U', 'Unknown', 'Unknown', 3, true, user, null, now(), user, null, now());
   

--
-- INSERT INTO age_code
--
insert into age_code (age_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('ADLT', 'Adult', 'Adult', 1, true, user, null, now(), user, null, now()),
      ('YRLN', 'Yearling', 'Yearling', 2, true, user, null, now(), user, null, now()),
      ('YOFY', 'Young of the year', 'Young of the year', 3, true, user, null, now(), user, null, now()),
      ('UNKN', 'Unknown', 'Unknown', 4, true, user, null, now(), user, null, now()); 

--
-- INSERT INTO threat_level_code
--
insert into threat_level_code (threat_level_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('1', 'Category 1', 'Category 1', 1, true, user, null, now(), user, null, now()),
      ('2', 'Category 2', 'Category 2', 2, true, user, null, now(), user, null, now()),
      ('3', 'Category 3', 'Category 3', 3, true, user, null, now(), user, null, now()),
      ('U', 'Unknown', 'Unknown', 4, true, user, null, now(), user, null, now());

--
-- INSERT INTO conflict_history_code
--
insert into conflict_history_code (conflict_history_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('L', 'Low', 'Low', 1, true, user, null, now(), user, null, now()),
      ('M', 'Medium', 'Medium', 2, true, user, null, now(), user, null, now()),
      ('H', 'High', 'High', 3, true, user, null, now(), user, null, now()),
      ('U', 'Unknown', 'Unknown', 4, true, user, null, now(), user, null, now());

--
-- INSERT INTO ear_code
--
insert into ear_code (ear_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('L', 'Left', 'Left', 1, true, user, null, now(), user, null, now()),
      ('R', 'Right', 'Right', 2, true, user, null, now(), user, null, now());

--
-- INSERT INTO drug_code
--
insert into drug_code (drug_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('ATPMZ', 'Atipamezole', 'Atipamezole', 1, true, user, null, now(), user, null, now()),
      ('BAMII', 'BAM II', 'Butorphanol Azaperone Medetomidine', 2, true, user, null, now(), user, null, now()),
      ('MDTMD', 'Medetomidine', 'Medetomidine', 3, true, user, null, now(), user, null, now()),
      ('NLTRX', 'Naltrexone', 'Naltrexone', 4, true, user, null, now(), user, null, now()),
      ('ZLTIL', 'Zoletil', 'Zoletil', 5, true, user, null, now(), user, null, now());

--
-- INSERT INTO drug_method_code
--
insert into drug_method_code (drug_method_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('DART', 'Dart', 'Dart', 1, true, user, null, now(), user, null, now()),
      ('HINJ', 'Hand injection', 'Hand injection', 2, true, user, null, now(), user, null, now()),
      ('PSRG', 'Pole syringe', 'Pole syringe', 3, true, user, null, now(), user, null, now());

--
-- INSERT INTO drug_remaining_outcome_code
--
insert into drug_remaining_outcome_code (drug_remaining_outcome_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('DISC', 'Male', 'Male', 1, true, user, null, now(), user, null, now()),
      ('STOR', 'Female', 'Female', 2, true, user, null, now(), user, null, now()),
      ('RDIS', 'Unknown', 'Unknown', 3, true, user, null, now(), user, null, now());


--
-- INSERT INTO hwcr_outcome_code
--
insert into hwcr_outcome_code (hwcr_outcome_code, short_description, long_description, display_order, active_ind, create_user_id, create_user_guid, create_utc_timestamp, update_user_id, update_user_guid, update_utc_timestamp)
values('DEADONARR', 'Dead on arrival', '', 1, true, user, null, now(), user, null, now()),
      ('DESTRYCOS', 'Destroyed by COS', '', 2, true, user, null, now(), user, null, now()),
      ('DESTRYOTH', 'Destroyed by other', '', 3, true, user, null, now(), user, null, now()),
      ('GONEONARR', 'Gone on arrival', '', 4, true, user, null, now(), user, null, now()),
      ('REFRTOBIO', 'Referred to biologist', '', 5, true, user, null, now(), user, null, now()),      
      ('SHRTRELOC', 'Short-distance relocation', '', 6, true, user, null, now(), user, null, now()),
      ('TRANSLCTD', 'Translocated', '', 7, true, user, null, now(), user, null, now()),
      ('TRANSREHB', 'Transfer to rehab', '', 8, true, user, null, now(), user, null, now());