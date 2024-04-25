import { WildlifeInput } from "./wildlife-input";

export class CreateWildlifeInput {
  leadIdentifier: string;
  agencyCode: string;
  caseCode: string;
  createUserId: string;
  actor: string;
  wildlife: Array<WildlifeInput>;
}
