import { AssessmentDetailsInput } from "./assessment-details.input";

export class UpdateAssessmentInput {
  case_file_guid: string;
  lead_identifier: string;
  assessment_details: AssessmentDetailsInput;
  action_type_code: string;
  agency_code: string;
  case_code: string;
  update_user_id: string;
}