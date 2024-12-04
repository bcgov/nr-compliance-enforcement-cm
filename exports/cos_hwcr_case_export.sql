-----------------------------------------------------
-- Monthly HWCR Case Export query to be run for COS statistics
-- see https://github.com/bcgov/nr-compliance-enforcement-cm/wiki/Data-Exports for more information
-----------------------------------------------------
select 
	le.lead_identifier as "Complaint Identifer",
	case 
        	when cf.action_not_required_ind  is true then 'No'
        	when cf.action_not_required_ind  is false then 'Yes'
       		else 'Unknown' 
	end as "Action Required",
	wl.species_code as "Species",
    case
        when wlh.data_after_executed_operation ->> 'species_code' != wl.species_code THEN 'YES!'
        else ''
    END AS "Was species changed?",
	ac.short_description as "Age",
	hoc.short_description as "Outcome",
	oat.action_date as "Outcome Date",
	case
     when wlh.data_after_executed_operation ->> 'hwcr_outcome_code' != wl.hwcr_outcome_code THEN 'YES!'
    else ''
    END AS "Was outcome changed?",
	case 
        	when eat.was_animal_captured = 'N' then 'Yes'
	        else 'No'
	end as "Trap Set No Capture",
	case 
		when pat.prev_count >= 1 then 'Yes'
		else 'No' 
	end as "Advice Provided",
	cf.note_text 
from
	case_management.lead le
left join case_management.case_file cf on
	cf.case_file_guid = le.case_identifier 
left join case_management.wildlife wl on
	wl.case_file_guid = cf.case_file_guid and wl.active_ind = true
left join 
    case_management.wildlife_h wlh ON wlh.target_row_id = wl.wildlife_guid 
    AND wlh.operation_type = 'I'
left join case_management.age_code ac on 
	ac.age_code = wl.age_code
left join case_management.hwcr_outcome_code hoc on
	hoc.hwcr_outcome_code = wl.hwcr_outcome_code
left join ( -- wildlife actions
	select 
		action_date, 
		wildlife_guid
    	from 
		case_management.action axn
    	join 
		case_management.action_type_action_xref atax on atax.action_type_action_xref_guid = axn.action_type_action_xref_guid 
    	join 
		case_management.action_code ac2 on ac2.action_code = atax.action_code 
    	where 
		ac2.action_code = 'RECOUTCOME'  -- has to be the outcome date
) oat on
	oat.wildlife_guid = wl.wildlife_guid  
left join ( -- trap set no capture
	select 
		distinct case_guid, 
		eax.active_ind, 
		e.was_animal_captured  -- distinct should not be required here, this is a bug in the code
	from 
		case_management.action eax
	join case_management.action_type_action_xref atax on
		atax.action_type_action_xref_guid = eax.action_type_action_xref_guid 
	join case_management.action_code ac2 on
		ac2.action_code = atax.action_code 
	join case_management.equipment e on
		e.equipment_guid = eax.equipment_guid 
	where 
		ac2.action_code = 'SETEQUIPMT' and
		e.was_animal_captured in ('N') and  -- only want to report on this outcome.
		e.equipment_code not in ('SIGNG', 'TRCAM') and -- don't care about these
		e.active_ind is true
) eat on 
	eat.case_guid = cf.case_file_guid
left join ( -- Advide Provided
	select 
		count (axn.case_guid) as prev_count, case_guid 
	from 
		case_management.action axn
	join case_management.action_type_action_xref atax on
		atax.action_type_action_xref_guid = axn.action_type_action_xref_guid 
	join case_management.action_type_code atc on
		atax.action_type_code = atc.action_type_code 
	where 
		atc.action_type_code = 'COSPRV&EDU' and axn.active_ind = true
	group by
		case_guid
) pat on 
	pat.case_guid = cf.case_file_guid 
  where cf.owned_by_agency_code  = 'COS'
	order by 
	le.lead_identifier asc