import { AssessmentDetailsInput } from "./assessment-details.input";
import { PreventionMeasureDetailsInput } from "./prevention-measure-details.input";
export class CreateCaseFileInput {
    leadIdentifier: string;
    assessmentDetails: AssessmentDetailsInput;
    preventionDetails: PreventionMeasureDetailsInput;
    agencyCode: string;
    caseCode: string;
    createUserId: string;
}
