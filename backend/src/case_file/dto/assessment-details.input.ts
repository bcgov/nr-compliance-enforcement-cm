import { AssessmentActionInput } from "./assessment-action.input";
export class AssessmentDetailsInput {
  actionNotRequired: boolean;
  actionJustificationCode: string;
  actions: [AssessmentActionInput];
  actionLinkedComplaintIdentifier: string;
  actionCloseComplaint: boolean;
}
