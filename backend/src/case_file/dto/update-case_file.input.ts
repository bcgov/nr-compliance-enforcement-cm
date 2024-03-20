import { AssessmentDetailsInput } from "./assessment-details.input";
import { PreventionMeasureDetailsInput } from "./prevention-measure-details.input";

export class UpdateCaseFileInput {
  caseIdentifier: string;
  leadIdentifier: string;
  assessmentDetails: AssessmentDetailsInput;
  preventionDetails: PreventionMeasureDetailsInput;
  agencyCode: string;
  caseCode: string;
  updateUserId: string;
}