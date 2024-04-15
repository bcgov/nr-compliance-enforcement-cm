import { AssessmentDetailsInput } from "./assessment-details.input";
import { UpdateEquipmentDetailsInput } from "./equipment/update-equipment-details.input";
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

export class UpdateEquipmentInput {
  caseIdentifier: string;
  leadIdentifier: string;
  equipment: [UpdateEquipmentDetailsInput];
  updateUserId: string;
}