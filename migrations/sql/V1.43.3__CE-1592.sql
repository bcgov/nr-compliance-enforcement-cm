CREATE TABLE case_management.prevention_education (
	prevention_education_guid uuid DEFAULT case_management.uuid_generate_v4() NOT NULL,
	case_file_guid uuid NOT NULL,
	agency_code varchar(10) NOT NULL,
	active_ind bool DEFAULT true NOT NULL,
	create_user_id varchar(32) NOT NULL,
	create_utc_timestamp timestamp NOT NULL,
	update_user_id varchar(32) NULL,
	update_utc_timestamp timestamp NULL,
	CONSTRAINT "PK_prevention_education_guid" PRIMARY KEY (prevention_education_guid)
);

ALTER TABLE case_management.prevention_education ADD CONSTRAINT "FK_prevention_education__case_file_guid" FOREIGN KEY (case_file_guid) REFERENCES case_management.case_file(case_file_guid);

-- Create a single prevention_education record for each case file that has COSPRV&EDU or PRKPRV&EDU action types.
INSERT INTO case_management.prevention_education
(
	case_file_guid,
  agency_code,
  create_user_id,
  create_utc_timestamp,
  update_user_id,
  update_utc_timestamp
)
SELECT case_guid, 'COS' AS agency_code, create_user_id, create_utc_timestamp, update_user_id , update_utc_timestamp 
FROM case_management."action" a 
WHERE a.action_type_action_xref_guid IN (
  SELECT action_type_action_xref_guid FROM case_management.action_type_action_xref WHERE action_type_code IN ('COSPRV&EDU')
)
GROUP BY a.case_guid, a.create_user_id, a.create_utc_timestamp, a.update_user_id, a.update_utc_timestamp;

INSERT INTO case_management.prevention_education
(
	case_file_guid,
  agency_code,
  create_user_id,
  create_utc_timestamp,
  update_user_id,
  update_utc_timestamp
)
SELECT case_guid, 'PARKS' AS agency_code, create_user_id, create_utc_timestamp, update_user_id , update_utc_timestamp 
FROM case_management."action" a 
WHERE a.action_type_action_xref_guid IN (
  SELECT action_type_action_xref_guid FROM case_management.action_type_action_xref WHERE action_type_code IN ('PRKPRV&EDU')
)
GROUP BY a.case_guid, a.create_user_id, a.create_utc_timestamp, a.update_user_id, a.update_utc_timestamp;

ALTER TABLE case_management.action ADD COLUMN prevention_education_guid uuid REFERENCES case_management.prevention_education(prevention_education_guid);

-- Update the action table to set the prevention_education_guid for actions that have a corresponding prevention_education record.
UPDATE case_management."action" a1 SET prevention_education_guid = pe.prevention_education_guid
FROM case_management."action" a2 
JOIN case_management.case_file cf ON a2.case_guid = cf.case_file_guid 
JOIN case_management.prevention_education pe ON cf.case_file_guid = pe.case_file_guid 
WHERE a1.action_guid = a2.action_guid AND a1.case_guid = cf.case_file_guid AND a1.case_guid = pe.case_file_guid
AND a1.action_type_action_xref_guid IN (
  SELECT action_type_action_xref_guid FROM case_management.action_type_action_xref WHERE action_type_code IN ('COSPRV&EDU','PRKPRV&EDU')
);