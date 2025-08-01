import { PermitSiteInput } from "./permit-site-input";

export interface UpdateAuthorizationOutcomeInput {
  complaintOutcomeGuid: string;
  outcomeAgencyCode: string;
  caseCode: string;
  updateUserId: string;
  input: PermitSiteInput;
}
