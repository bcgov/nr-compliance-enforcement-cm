import { AssessmentDetails } from "./assessment-details.entity";

export class CaseFile {
    case_file_guid: string;
    lead_identifier: string;
    assessment_details: AssessmentDetails;
}
