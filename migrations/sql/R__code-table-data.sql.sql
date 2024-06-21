insert into
  case_management.inaction_reason_code (
    inaction_reason_code,
    agency_code,
    short_description,
    long_description,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp
  )
values
  (
    'DUPLICATE',
    'COS',
    'Duplicate',
    'Duplicate',
    3,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

update case_management.inaction_reason_code
set
  display_order = 1
where
  inaction_reason_code = 'DUPLICATE';

update case_management.inaction_reason_code
set
  display_order = 2
where
  inaction_reason_code = 'NOPUBSFTYC';

update case_management.inaction_reason_code
set
  display_order = 3
where
  inaction_reason_code = 'OTHOPRPRTY';

UPDATE case_management.configuration
SET
  configuration_value = cast(configuration_value as INTEGER) + 1
WHERE
  configuration_code = 'CDTABLEVER';