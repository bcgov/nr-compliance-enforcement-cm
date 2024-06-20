insert into
  case_management.action_code (
    action_code,
    short_description,
    long_description,
    active_ind,
    create_user_id,
    create_utc_timestamp
  )
values
  (
    'DUPLICATE',
    'Duplicate',
    'Duplicate',
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.action_type_action_xref (
    action_type_code,
    action_code,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp
  )
values
  (
    'COMPASSESS',
    'DUPLICATE',
    5,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

UPDATE case_management.configuration
SET
  configuration_value = cast(configuration_value as INTEGER) + 1
WHERE
  configuration_code = 'CDTABLEVER';