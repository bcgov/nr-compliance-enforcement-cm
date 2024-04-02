export interface CaseFileActionItem {
  actor_guid: string;
  action_date: Date;
  action_type_action_xref: {
    action_code_action_type_action_xref_action_codeToaction_code: ActionActionCode;
    action_type_code_action_type_action_xref_action_type_codeToaction_type_code: ActionActionTypeCode;
  };
}

export interface BaseAction {
  short_description: string;
  long_description: string;
  active_ind: boolean;
}

export interface ActionActionCode extends BaseAction {
  action_code: string;
};

export interface ActionActionTypeCode extends BaseAction {
  action_type_code: string;
};
