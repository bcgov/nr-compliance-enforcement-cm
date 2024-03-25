insert into	case_management.action_code 
    (action_code, short_description, long_description, active_ind, create_user_id, create_utc_timestamp)
values 
    ('CNTCTBIOVT', 'Contacted FLNRORD Biologist/Veterinarian', 'Contacted FLNRORD Biologist/Veterinarian', 'Y', CURRENT_USER, CURRENT_TIMESTAMP),
    ('DIRLOWLACT', 'Direct livestock owner to / explain section 2, 26(2) and 75 of the Wildlife Act', 'Direct livestock owner to / explain section 2, 26(2) and 75 of the Wildlife Act', 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('CONTACTLPP', 'Contacted the Livestock Protection Program ("LPP") (cattle and sheep only)', 'Contacted the Livestock Protection Program ("LPP") (cattle and sheep only)', 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;

UPDATE case_management.action_type_action_xref
SET display_order = 6 WHERE action_code = 'CNTCTBYLAW';
UPDATE case_management.action_type_action_xref
SET display_order = 5 WHERE action_code = 'CNTCTGROUP';

insert into	case_management.action_type_action_xref 
    (action_type_code, action_code, display_order, active_ind, create_user_id, create_utc_timestamp)
values
    ('COSPRV&EDU', 'CNTCTBIOVT', 4, 'Y', CURRENT_USER, CURRENT_TIMESTAMP), 
    ('COSPRV&EDU', 'DIRLOWLACT', 7, 'Y', CURRENT_USER, CURRENT_TIMESTAMP),
    ('COSPRV&EDU', 'CONTACTLPP', 8, 'Y', CURRENT_USER, CURRENT_TIMESTAMP)
on conflict do nothing;