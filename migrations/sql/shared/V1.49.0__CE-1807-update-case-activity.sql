-- Update the case_activity table to accommodate for UUIDs in the reference ID col.
alter table shared.case_activity alter column case_activity_identifier_ref type varchar(50);
