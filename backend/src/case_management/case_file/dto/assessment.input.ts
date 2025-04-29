import { AssessmentActionInput } from "./assessment-action.input";
import { KeyValuePairInput } from "./key-value-pair.input";
export class AssessmentInput {
  actionNotRequired: boolean;
  actionJustificationCode: string;
  actions: [AssessmentActionInput];
  actionLinkedComplaintIdentifier: string;
  actionCloseComplaint: boolean;
  contactedComplainant?: boolean;
  attended?: boolean;
  locationType?: KeyValuePairInput;
  conflictHistory?: KeyValuePairInput;
  categoryLevel?: KeyValuePairInput;
  cat1Actions?: [AssessmentActionInput];
}
