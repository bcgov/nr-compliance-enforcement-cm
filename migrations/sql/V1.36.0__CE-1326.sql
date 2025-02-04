ALTER TABLE case_management.equipment
  ADD COLUMN IF NOT EXISTS quantity smallint NOT NULL DEFAULT 1;

ALTER TABLE case_management.equipment_code
  ADD COLUMN IF NOT EXISTS has_quantity_ind boolean NOT NULL DEFAULT false;

UPDATE case_management.configuration
SET configuration_value = cast(configuration_value as INTEGER)+1 WHERE configuration_code = 'CDTABLEVER';

comment on column case_management.equipment.quantity is 'Indicates the number of EQUIPMENT used. Values should be a positive integer. The default is 1';
comment on column case_management.equipment_code.has_quantity_ind is 'Indicates if the type of equipment allows a quantity to be speciofied.   Default to ''false''. ';
