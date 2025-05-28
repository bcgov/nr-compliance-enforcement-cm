-----------------------------------------------------
-- Monthly HWCR Case Export query to be run for COS statistics
-- see https://github.com/bcgov/nr-compliance-enforcement-cm/wiki/Data-Exports for more information
-----------------------------------------------------
select le.lead_identifier as "Complaint Identifer",
	case 
        	when asm.attended_ind is true then 'Yes'
        	when asm.attended_ind  is false then 'No'
       		else 'Unknown' 
	end as "Attended",
	case 
        	when asm.action_not_required_ind  is true then 'No'
        	when asm.action_not_required_ind  is false then 'Yes'
       		else 'Unknown' 
	end as "Action Required",
	to_char(asd.action_date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Vancouver', 'YYYY-MM-DD HH24:MI') as "Assessment Date",
	wl.species_code as "Outcome Species",
	case
        when wlh.data_after_executed_operation ->> 'species_code' != wl.species_code THEN 
        	wlh.data_after_executed_operation ->> 'species_code'
        else ''
    END AS "Original Outcome Species",
	ac.short_description as "Age",
	hoc.short_description as "Outcome",
	to_char(oat.action_date AT TIME ZONE 'UTC' AT TIME ZONE 'America/Vancouver', 'YYYY-MM-DD') as "Outcome Date",
	case
    when wlh.data_after_executed_operation ->> 'hwcr_outcome_code' != wl.hwcr_outcome_code THEN 
		prv_hoc.short_description
    else ''
    END AS "Original Outcome",
	abc.short_description as "Outcome actioned by",
	case 
        	when eat.was_animal_captured = 'N' then 'Yes'
	        else 'No'
	end as "Trap Set No Capture",
	case 
		when pat.prev_count >= 1 then 'Yes'
		else 'No' 
	end as "Advice Provided"
from
	case_management.lead le
left join case_management.case_file cf on
	cf.case_file_guid = le.case_identifier
left join case_management.assessment asm on
    asm.case_file_guid = cf.case_file_guid 
left join ( -- assessment actions
	select 
		action_date, 
		assessment_guid
    	from 
		case_management.action axn
    	join 
		case_management.action_type_action_xref atax on atax.action_type_action_xref_guid = axn.action_type_action_xref_guid 
    	join 
		case_management.action_code ac2 on ac2.action_code = atax.action_code 
    	where 
		ac2.action_code = 'SGHTNGS'  -- Can be anything here since we are just using it as a hook in to get the assessment date
) asd on
	asd.assessment_guid = asm.assessment_guid 
left join case_management.wildlife wl on
	wl.case_file_guid = cf.case_file_guid and wl.active_ind = true
left join 
    case_management.wildlife_h wlh ON wlh.target_row_id = wl.wildlife_guid 
    AND wlh.operation_type = 'I'
left join case_management.age_code ac on 
	ac.age_code = wl.age_code
left join case_management.hwcr_outcome_code hoc on
	hoc.hwcr_outcome_code = wl.hwcr_outcome_code
left join case_management.hwcr_outcome_code prv_hoc on
	prv_hoc.hwcr_outcome_code = wlh.data_after_executed_operation ->> 'hwcr_outcome_code' 
left join case_management.hwcr_outcome_actioned_by_code abc on
	abc.hwcr_outcome_actioned_by_code = wl.hwcr_outcome_actioned_by_code
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
  where cf.owned_by_agency_code  = 'COS' and cf.case_code in ('HWCR', 'ERS')
	order by 
	le.lead_identifier asc
