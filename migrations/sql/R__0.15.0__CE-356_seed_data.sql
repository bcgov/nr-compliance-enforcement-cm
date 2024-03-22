insert into	case_management.action_type_code 
    (action_type_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('COMPASSESS', 'Complaint Assessment', 'Complaint Assessment', 'Y', CURRENT_USER, CURRENT_TIMESTAMP) 
on conflict do nothing;

insert into	case_management.action_code 
    (action_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('ASSESSRISK', 'Assessed public safety risk', 'Assessed public safety risk', 'Y', CURRENT_USER, CURRENT_TIMESTAMP),
    ('ASSESSHLTH', 'Assessed health as per animal welfare guidelines', 'Assessed health as per animal welfare guidelines', 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('ASSESSHIST', 'Assessed known conflict history', 'Assessed known conflict history', 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('CNFRMIDENT', 'Confirmed identification of offending animal(s)', 'Confirmed identification of offending animal(s)', 'Y', CURRENT_USER, CURRENT_TIMESTAMP) 
on conflict do nothing;

insert into	case_management.action_type_action_xref 
    (action_type_code, action_code, display_order, active_ind, create_user_id, create_utc_timestamp)
values 
    ('COMPASSESS', 'ASSESSRISK', 1, 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('COMPASSESS', 'ASSESSHLTH', 2, 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('COMPASSESS', 'ASSESSHIST', 3, 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('COMPASSESS', 'CNFRMIDENT', 4, 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;
 
insert into	case_management.case_code 
    (case_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('HWCR', 'Human Wildlife Conflict Report', 'Human Wildlife Conflict Report', 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;

insert into	case_management.agency_code 
    (agency_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('COS', 'Conservation Officer Service', 'Conservation Officer Service', 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;

insert into	case_management.inaction_reason_code 
    (inaction_reason_code, agency_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('NOPUBSFTYC', 'COS', 'No public safety concern', 'No public safety concern', 'Y', CURRENT_USER, CURRENT_TIMESTAMP),
    ('OTHOPRPRTY', 'COS', 'Other operational priorities', 'Other operational priorities', 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;

insert into	case_management.action_type_code 
    (action_type_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('EQUIPMENT', 'Equipment', 'Equipment', 'Y', CURRENT_USER, CURRENT_TIMESTAMP) 
on conflict do nothing;

insert into	case_management.action_code 
    (action_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('SETEQUIPMT', 'Equipment set by an officer', 'Equipment set by an officer', 'Y', CURRENT_USER, CURRENT_TIMESTAMP),
    ('REMEQUIPMT', 'Equipment removed by an officer', 'Equipment removed by an officer', 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;

insert into	case_management.action_type_action_xref 
    (action_type_code, action_code, display_order, active_ind, create_user_id, create_utc_timestamp)
values 
    ('EQUIPMENT', 'SETEQUIPMT', 1, 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('EQUIPMENT', 'REMEQUIPMT', 2, 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;