import { UpdateAssessmentDetailsInput } from "./update-assessment-details.input";

export class UpdateCaseFileInput {
  case_file_guid: string;
  lead_identifier: string;
  assessment_details: UpdateAssessmentDetailsInput;
  action_type_code: string;
  agency_code: string;
  case_code: string;
  note_text: string;
  review_required_ind: boolean;
  update_user_id: string;
}

