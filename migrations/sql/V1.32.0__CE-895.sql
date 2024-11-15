--
-- INSERT INTO hwcr_outcome_code
--
insert into
  hwcr_outcome_code (
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
    'EUTHCOS',
    'Euthanized by COS',
    'Euthanized by COS',
    15,
    true,
    'FLYWAY',
    now (),
    'FLYWAY',
    now ()
  ),
  (
    'EUTHOTH',
    'Euthanized by Other',
    'Euthanized by Other',
    25,
    true,
    'FLYWAY',
    now (),
    'FLYWAY',
    now ()
  );

update case_management.hwcr_outcome_code
set
  short_description = 'Dispatched by COS',
  long_description = 'Dispatched by COS'
where
  hwcr_outcome_code = 'DESTRYCOS';

update case_management.hwcr_outcome_code
set
  short_description = 'Dispatched by Other',
  long_description = 'Dispatched by Other'
where
  hwcr_outcome_code = 'DESTRYOTH';