export interface Action {
  action_guid: string;
  case_guid: string;
  action_type_action_xref_guid: string;
  actor_guid: string;
  action_date: Date;
  active_ind: boolean;
  create_user_id: string;
  create_utc_timestamp: Date;
  update_user_id: string;
  update_utc_timestamp: Date;
  equipment_guid: string;
  wildlife_guid: string;
}
