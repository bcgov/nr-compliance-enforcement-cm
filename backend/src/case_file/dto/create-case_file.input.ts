import { AssessmentDetailsInput } from "./assessment-details.input";
export class CreateAssessmentInput {
    leadIdentifier: string;
    assessmentDetails: AssessmentDetailsInput;
    agencyCode: string;
    caseCode: string;
    createUserId: string;
}
