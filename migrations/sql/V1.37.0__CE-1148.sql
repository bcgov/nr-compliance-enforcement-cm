-- Step 1: Create the case_notes table 
CREATE TABLE IF NOT EXISTS case_management.case_notes (
  case_note_guid uuid not NULL DEFAULT uuid_generate_v4 (),
  case_file_guid uuid NOT NULL,
  case_note text NOT NULL,
  active_ind bool NULL,
  create_user_id varchar(32) NOT NULL,
  create_utc_timestamp timestamp NOT NULL,
  update_user_id varchar(32) NULL,
  update_utc_timestamp timestamp NULL,
  CONSTRAINT "PK_case_note_guid" PRIMARY KEY (case_note_guid),
  CONSTRAINT "FK_case_note__case_file_guid" FOREIGN KEY (case_file_guid) REFERENCES case_management.case_file (case_file_guid)
);

COMMENT ON COLUMN case_notes.case_note_guid IS 'System generated unique key for a case note.';
COMMENT ON COLUMN case_notes.case_file_guid IS 'System generated unique key for a case.  This key should never be exposed to users via any system utilizing the tables.';
COMMENT ON COLUMN case_notes.case_note IS 'The textual content or description of the note.';
COMMENT ON COLUMN case_notes.active_ind IS 'Indicates whether the note is active (true) or inactive (false).';
COMMENT ON COLUMN case_notes.create_user_id IS 'The identifier (e.g., username) of the user who created the entry.';
COMMENT ON COLUMN case_notes.create_utc_timestamp IS 'The date and time (UTC) when the entry was created.';
COMMENT ON COLUMN case_notes.update_user_id IS 'The identifier (e.g., username) of the user who last updated the entry.';
COMMENT ON COLUMN case_notes.update_utc_timestamp IS 'The date and time (UTC) when the entry was last updated.';

-- Step 2: Migrate data from case_file table to case_notes table
INSERT INTO case_management.case_notes (case_file_guid, case_note, active_ind, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT case_file_guid, note_text, TRUE, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp
FROM case_management.case_file
WHERE note_text IS NOT NULL;

-- Step 3: Drop the case_note column from the case_file table
ALTER TABLE case_management.case_file
DROP COLUMN note_text;

