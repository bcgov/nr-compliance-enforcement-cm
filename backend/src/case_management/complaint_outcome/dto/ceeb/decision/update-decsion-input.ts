import { DecisionInput } from "./decision-input";

export class UpdateDecisionInput {
  complaintOutcomeGuid: string;
  outcomeAgencyCode: string;
  caseCode: string;
  updateUserId: string;
  decision: DecisionInput;
}
