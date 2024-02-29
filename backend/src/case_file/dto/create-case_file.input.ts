import { CreateAssessmentDetailsInput } from "./create-assessment-details.input";
export class CreateCaseFileInput {
    lead_identifier: string;
    assessment_details: CreateAssessmentDetailsInput;
    action_type_code: string;
    agency_code: string;
    case_code: string;
    create_user_id: string;
    note_text: string;
    review_required_ind: boolean;
}
