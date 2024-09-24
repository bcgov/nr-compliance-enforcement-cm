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

--
-- INSERT data AGENCY_CODE
--
insert into
  case_management.agency_code (
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
    'ALC',
    'Agricultural Land Commission',
    'Agricultural Land Commission',
    10,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'ENERGY',
    'BC Energy Regulator ',
    'BC Energy Regulator',
    20,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'PARKS',
    'BC Parks',
    'BC Parks',
    30,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'CEB',
    'Compliance and Enforcement Branch',
    'Compliance and Enforcement Branch',
    40,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'ECCC',
    'Environment and Climate Change Canada',
    'Environment and Climate Change Canada',
    70,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'EAO',
    'Environmental Assessment Office',
    'Environmental Assessment Office',
    80,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'FSIB',
    'Food Safety Inspection Branch',
    'Food Safety Inspection Branch',
    90,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'HEALTH',
    'Health Authority',
    'Health Authority',
    100,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'MHSED',
    'Mines Health, Safety and Enforcement Division',
    'Mines Health, Safety and Enforcement Division',
    110,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'MUNI',
    'Municipality / Regional District',
    'Municipality / Regional District',
    120,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'MOTI',
    'Transport Canada / MOTI',
    'Transport Canada / MOTI',
    130,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

insert into
  case_management.agency_code (
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
    'OTHER',
    'Other',
    'Other',
    140,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) on conflict do nothing;

-- Fix display order
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

update case_management.agency_code
set
  display_order = 60
where
  agency_code = 'COS';

update case_management.agency_code
set
  display_order = 50
where
  agency_code = 'EPO';

UPDATE case_management.configuration
SET
  configuration_value = cast(configuration_value as INTEGER) + 1
WHERE
  configuration_code = 'CDTABLEVER';