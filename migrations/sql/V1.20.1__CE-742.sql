--
-- INSERT INTO hwcr_outcome_code
--
insert into
  case_management.hwcr_outcome_code (
    hwcr_outcome_code,
    short_description,
    long_description,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp,
    update_user_id,
    update_utc_timestamp
  )
values
  (
    'LESSLETHAL',
    'Less lethal',
    'Less lethal',
    9,
    true,
    'FLYWAY',
    now (),
    'FLYWAY',
    now ()
  );

UPDATE case_management.configuration
SET
  configuration_value = cast(configuration_value as INTEGER) + 1
WHERE
  configuration_code = 'CDTABLEVER';