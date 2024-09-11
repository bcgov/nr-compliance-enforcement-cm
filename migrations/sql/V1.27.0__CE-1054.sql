-- Add uniqueness constraint to avoid repeatable seed data script from filling the DB with copies
ALTER TABLE case_management.schedule_sector_xref ADD CONSTRAINT UK_schedule_sector_xref__schedule_sector UNIQUE (schedule_code, sector_code);

UPDATE case_management.configuration
SET
  configuration_value = cast(configuration_value as INTEGER) + 1
WHERE
  configuration_code = 'CDTABLEVER';