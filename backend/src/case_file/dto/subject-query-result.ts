export interface SubjectQueryResult {
  wildlife: {
    action: {
      action_type_action_xref: {
        action_code_action_type_action_xref_action_codeToaction_code: {
          action_code: string;
          short_description: string;
          long_description: string;
          active_ind: boolean;
        };
      };
      active_ind: boolean;
      action_guid: string;
      actor_guid: string;
      action_date: Date;
    }[];
    wildlife_guid: string;
    threat_level_code: string;
    conflict_history_code: string;
    sex_code: string;
    age_code: string;
    hwcr_outcome_code: string;
    species_code: string;
    create_utc_timestamp: Date;
    drug_administered: {
      drug_administered_guid: string;
      wildlife_guid: string;
      drug_code: string;
      drug_method_code: string;
      drug_remaining_outcome_code: string;
      vial_number: string;
      drug_used_amount: string;
      additional_comments_text: string;
      create_user_id: string;
      create_utc_timestamp: Date;
      update_user_id: string;
      update_utc_timestamp: Date;
    }[];
    ear_tag: {
      ear_tag_guid: string;
      wildlife_guid: string;
      ear_code: string;
      ear_tag_identifier: string;
      create_user_id: string;
      create_utc_timestamp: Date;
      update_user_id: string;
      update_utc_timestamp: Date;
    }[];
  }[];
}
