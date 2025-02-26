
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Age_codeScalarFieldEnum = {
  age_code: 'age_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Conflict_history_codeScalarFieldEnum = {
  conflict_history_code: 'conflict_history_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Drug_codeScalarFieldEnum = {
  drug_code: 'drug_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Drug_method_codeScalarFieldEnum = {
  drug_method_code: 'drug_method_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Drug_remaining_outcome_codeScalarFieldEnum = {
  drug_remaining_outcome_code: 'drug_remaining_outcome_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Ear_codeScalarFieldEnum = {
  ear_code: 'ear_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Flyway_schema_historyScalarFieldEnum = {
  installed_rank: 'installed_rank',
  version: 'version',
  description: 'description',
  type: 'type',
  script: 'script',
  checksum: 'checksum',
  installed_by: 'installed_by',
  installed_on: 'installed_on',
  execution_time: 'execution_time',
  success: 'success'
};

exports.Prisma.Hwcr_outcome_codeScalarFieldEnum = {
  hwcr_outcome_code: 'hwcr_outcome_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Sex_codeScalarFieldEnum = {
  sex_code: 'sex_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Equipment_codeScalarFieldEnum = {
  equipment_code: 'equipment_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  is_trap_ind: 'is_trap_ind',
  has_quantity_ind: 'has_quantity_ind'
};

exports.Prisma.Threat_level_codeScalarFieldEnum = {
  threat_level_code: 'threat_level_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.ConfigurationScalarFieldEnum = {
  configuration_code: 'configuration_code',
  configuration_value: 'configuration_value',
  long_description: 'long_description',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.ActionScalarFieldEnum = {
  action_guid: 'action_guid',
  case_guid: 'case_guid',
  action_type_action_xref_guid: 'action_type_action_xref_guid',
  actor_guid: 'actor_guid',
  action_date: 'action_date',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  equipment_guid: 'equipment_guid',
  wildlife_guid: 'wildlife_guid',
  decision_guid: 'decision_guid',
  case_note_guid: 'case_note_guid'
};

exports.Prisma.Action_codeScalarFieldEnum = {
  action_code: 'action_code',
  short_description: 'short_description',
  long_description: 'long_description',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Action_hScalarFieldEnum = {
  h_action_guid: 'h_action_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.Action_type_action_xrefScalarFieldEnum = {
  action_type_action_xref_guid: 'action_type_action_xref_guid',
  action_type_code: 'action_type_code',
  action_code: 'action_code',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Action_type_codeScalarFieldEnum = {
  action_type_code: 'action_type_code',
  short_description: 'short_description',
  long_description: 'long_description',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Agency_codeScalarFieldEnum = {
  agency_code: 'agency_code',
  short_description: 'short_description',
  long_description: 'long_description',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  display_order: 'display_order'
};

exports.Prisma.Case_codeScalarFieldEnum = {
  case_code: 'case_code',
  short_description: 'short_description',
  long_description: 'long_description',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Case_fileScalarFieldEnum = {
  case_file_guid: 'case_file_guid',
  case_code: 'case_code',
  owned_by_agency_code: 'owned_by_agency_code',
  inaction_reason_code: 'inaction_reason_code',
  action_not_required_ind: 'action_not_required_ind',
  review_required_ind: 'review_required_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  complainant_contacted_ind: 'complainant_contacted_ind',
  attended_ind: 'attended_ind',
  case_location_code: 'case_location_code',
  case_conflict_history_code: 'case_conflict_history_code',
  case_threat_level_code: 'case_threat_level_code'
};

exports.Prisma.Case_file_hScalarFieldEnum = {
  h_case_file_guid: 'h_case_file_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.Inaction_reason_codeScalarFieldEnum = {
  inaction_reason_code: 'inaction_reason_code',
  agency_code: 'agency_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.LeadScalarFieldEnum = {
  lead_identifier: 'lead_identifier',
  case_identifier: 'case_identifier',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Lead_hScalarFieldEnum = {
  h_lead_guid: 'h_lead_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.Configuration_hScalarFieldEnum = {
  h_configuration_guid: 'h_configuration_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.EquipmentScalarFieldEnum = {
  equipment_guid: 'equipment_guid',
  equipment_code: 'equipment_code',
  equipment_location_desc: 'equipment_location_desc',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  was_animal_captured: 'was_animal_captured',
  quantity: 'quantity'
};

exports.Prisma.Drug_administeredScalarFieldEnum = {
  drug_administered_guid: 'drug_administered_guid',
  wildlife_guid: 'wildlife_guid',
  drug_code: 'drug_code',
  drug_method_code: 'drug_method_code',
  drug_remaining_outcome_code: 'drug_remaining_outcome_code',
  vial_number: 'vial_number',
  drug_used_amount: 'drug_used_amount',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  active_ind: 'active_ind',
  additional_comments_text: 'additional_comments_text'
};

exports.Prisma.Drug_administered_hScalarFieldEnum = {
  h_drug_administered_guid: 'h_drug_administered_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.Ear_tagScalarFieldEnum = {
  ear_tag_guid: 'ear_tag_guid',
  wildlife_guid: 'wildlife_guid',
  ear_code: 'ear_code',
  ear_tag_identifier: 'ear_tag_identifier',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  active_ind: 'active_ind'
};

exports.Prisma.Ear_tag_hScalarFieldEnum = {
  h_ear_tag_guid: 'h_ear_tag_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.WildlifeScalarFieldEnum = {
  wildlife_guid: 'wildlife_guid',
  case_file_guid: 'case_file_guid',
  threat_level_code: 'threat_level_code',
  sex_code: 'sex_code',
  age_code: 'age_code',
  hwcr_outcome_code: 'hwcr_outcome_code',
  species_code: 'species_code',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  active_ind: 'active_ind',
  identifying_features: 'identifying_features'
};

exports.Prisma.Wildlife_hScalarFieldEnum = {
  h_wildlife_guid: 'h_wildlife_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.DecisionScalarFieldEnum = {
  decision_guid: 'decision_guid',
  case_file_guid: 'case_file_guid',
  schedule_sector_xref_guid: 'schedule_sector_xref_guid',
  discharge_code: 'discharge_code',
  rationale_text: 'rationale_text',
  inspection_number: 'inspection_number',
  lead_agency_code: 'lead_agency_code',
  non_compliance_decision_matrix_code: 'non_compliance_decision_matrix_code',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp',
  ipm_auth_category_code: 'ipm_auth_category_code'
};

exports.Prisma.Decision_hScalarFieldEnum = {
  h_decision_guid: 'h_decision_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.Discharge_codeScalarFieldEnum = {
  discharge_code: 'discharge_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Non_compliance_decision_matrix_codeScalarFieldEnum = {
  non_compliance_decision_matrix_code: 'non_compliance_decision_matrix_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Schedule_codeScalarFieldEnum = {
  schedule_code: 'schedule_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Schedule_sector_xrefScalarFieldEnum = {
  schedule_sector_xref_guid: 'schedule_sector_xref_guid',
  schedule_code: 'schedule_code',
  sector_code: 'sector_code',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Sector_codeScalarFieldEnum = {
  sector_code: 'sector_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Authorization_permitScalarFieldEnum = {
  authorization_permit_guid: 'authorization_permit_guid',
  case_file_guid: 'case_file_guid',
  authorization_permit_id: 'authorization_permit_id',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Authorization_permit_hScalarFieldEnum = {
  h_authorization_permit_guid: 'h_authorization_permit_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.SiteScalarFieldEnum = {
  site_guid: 'site_guid',
  case_file_guid: 'case_file_guid',
  site_id: 'site_id',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Site_hScalarFieldEnum = {
  h_site_guid: 'h_site_guid',
  target_row_id: 'target_row_id',
  operation_type: 'operation_type',
  operation_user_id: 'operation_user_id',
  operation_executed_at: 'operation_executed_at',
  data_after_executed_operation: 'data_after_executed_operation'
};

exports.Prisma.Case_location_codeScalarFieldEnum = {
  case_location_code: 'case_location_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Case_noteScalarFieldEnum = {
  case_note_guid: 'case_note_guid',
  case_file_guid: 'case_file_guid',
  case_note: 'case_note',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.Ipm_auth_category_codeScalarFieldEnum = {
  ipm_auth_category_code: 'ipm_auth_category_code',
  short_description: 'short_description',
  long_description: 'long_description',
  display_order: 'display_order',
  active_ind: 'active_ind',
  create_user_id: 'create_user_id',
  create_utc_timestamp: 'create_utc_timestamp',
  update_user_id: 'update_user_id',
  update_utc_timestamp: 'update_utc_timestamp'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  age_code: 'age_code',
  conflict_history_code: 'conflict_history_code',
  drug_code: 'drug_code',
  drug_method_code: 'drug_method_code',
  drug_remaining_outcome_code: 'drug_remaining_outcome_code',
  ear_code: 'ear_code',
  flyway_schema_history: 'flyway_schema_history',
  hwcr_outcome_code: 'hwcr_outcome_code',
  sex_code: 'sex_code',
  equipment_code: 'equipment_code',
  threat_level_code: 'threat_level_code',
  configuration: 'configuration',
  action: 'action',
  action_code: 'action_code',
  action_h: 'action_h',
  action_type_action_xref: 'action_type_action_xref',
  action_type_code: 'action_type_code',
  agency_code: 'agency_code',
  case_code: 'case_code',
  case_file: 'case_file',
  case_file_h: 'case_file_h',
  inaction_reason_code: 'inaction_reason_code',
  lead: 'lead',
  lead_h: 'lead_h',
  configuration_h: 'configuration_h',
  equipment: 'equipment',
  drug_administered: 'drug_administered',
  drug_administered_h: 'drug_administered_h',
  ear_tag: 'ear_tag',
  ear_tag_h: 'ear_tag_h',
  wildlife: 'wildlife',
  wildlife_h: 'wildlife_h',
  decision: 'decision',
  decision_h: 'decision_h',
  discharge_code: 'discharge_code',
  non_compliance_decision_matrix_code: 'non_compliance_decision_matrix_code',
  schedule_code: 'schedule_code',
  schedule_sector_xref: 'schedule_sector_xref',
  sector_code: 'sector_code',
  authorization_permit: 'authorization_permit',
  authorization_permit_h: 'authorization_permit_h',
  site: 'site',
  site_h: 'site_h',
  case_location_code: 'case_location_code',
  case_note: 'case_note',
  ipm_auth_category_code: 'ipm_auth_category_code'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
