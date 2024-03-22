import { AssessmentDetailsInput } from "./assessment-details.input";
import { PreventionDetailsInput } from "./prevention-details.input";

export class UpdateAssessmentInput {
  caseIdentifier: string;
  leadIdentifier: string;
  assessmentDetails: AssessmentDetailsInput;
  agencyCode: string;
  caseCode: string;
  updateUserId: string;
}

export class UpdatePreventionInput {
  caseIdentifier: string;
  leadIdentifier: string;
  preventionDetails: PreventionDetailsInput;
  agencyCode: string;
  caseCode: string;
  updateUserId: string;
}