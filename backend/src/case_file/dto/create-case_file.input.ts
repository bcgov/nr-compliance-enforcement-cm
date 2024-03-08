import { AssessmentDetailsInput } from "./assessment-details.input";
export class CreateAssessmentInput {
    lead_identifier: string;
    assessment_details: AssessmentDetailsInput;
    action_type_code: string;
    agency_code: string;
    case_code: string;
    create_user_id: string;
}
