UPDATE case_management."action" a1 SET assessment_guid = ca.assessment_guid
FROM case_management."action" a2 
JOIN case_management.case_file cf ON a2.case_guid = cf.case_file_guid 
JOIN case_management.assessment ca ON cf.case_file_guid = ca.case_file_guid 
WHERE a1.action_guid = a2.action_guid AND a1.case_guid = cf.case_file_guid AND a1.case_guid = ca.case_file_guid
AND a1.action_type_action_xref_guid IN (
  SELECT action_type_action_xref_guid FROM case_management.action_type_action_xref WHERE action_type_code IN ('COMPASSESS','CAT1ASSESS')
)
AND a1.assessment_guid NOT IN (
'77ea93bc-ba1e-4459-ba07-ead025c30353',
'a5cbaf1f-e6af-4278-9dcd-7d4b77ba00fd',
'136fd552-238f-4c13-850f-589254ca2101',
'd0371509-4586-401f-a443-565354954983',
'b9013c7b-235f-491b-9955-61f1a8fc4a41',
'6ff3687d-d4e1-4a41-b037-b3ead6b41b22',
'45da051a-5a77-4dc6-9101-adb37234dc1b',
'6c6dbc1f-f686-4c36-9594-e724b3120545',
'e195872f-c07f-4c32-bd02-93ece69f61dd');

DELETE FROM case_management.assessment a1
WHERE a1.case_threat_level_code IS NULL 
AND a1.case_conflict_history_code IS NULL 
AND a1.case_location_code IS NULL AND attended_ind IS NULL 
AND a1.complainant_contacted_ind IS NULL 
AND a1.action_not_required_ind  IS NULL
AND a1.inaction_reason_code IS NULL;