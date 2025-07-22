-- Drop case_code table
DROP TABLE IF EXISTS case_management.case_code CASCADE;

ALTER TABLE case_management.case_file
DROP COLUMN IF EXISTS case_code;

-- Add complaint_identifier column to case_file
ALTER TABLE case_management.case_file
ADD COLUMN complaint_identifier VARCHAR(20);

-- Migrate lead_identifier data from lead to case_file.complaint_identifier
UPDATE case_management.case_file
SET
  complaint_identifier = (
    SELECT
      lead_identifier
    FROM
      case_management.lead
    WHERE
      lead.case_identifier = case_file.case_file_guid
    LIMIT
      1
  );

ALTER TABLE case_management.lead
DROP CONSTRAINT IF EXISTS FK_lead__case_identifier;

DROP TRIGGER IF EXISTS lead_history_trigger ON case_management.lead;

DROP TABLE IF EXISTS case_management.lead CASCADE;

DROP TABLE IF EXISTS case_management.lead_h CASCADE;