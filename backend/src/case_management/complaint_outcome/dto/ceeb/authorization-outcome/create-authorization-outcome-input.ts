import { PermitSiteInput } from "./permit-site-input";

export interface CreateAuthorizationOutcomeInput {
  complaintId: string;
  outcomeAgencyCode: string;
  caseCode: string;
  createUserId: string;
  input: PermitSiteInput;
}
