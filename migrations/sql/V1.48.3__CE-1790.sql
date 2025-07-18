DROP TABLE IF EXISTS case_management.case_code CASCADE;

ALTER TABLE case_management.case_file
DROP COLUMN IF EXISTS case_code;