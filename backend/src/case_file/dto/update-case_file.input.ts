import { AssessmentDetailsInput } from "./assessment-details.input";

export class UpdateAssessmentInput {
  caseIdentifier: string;
  leadIdentifier: string;
  assessmentDetails: AssessmentDetailsInput;
  agencyCode: string;
  caseCode: string;
  updateUserId: string;
}