import { AssessmentDetailsInput } from "./assessment-details.input";
import { CreateEquipmentDetailsInput } from "./equipment/create-equipment-details.input";
import { PreventionDetailsInput } from "./prevention-details.input";

export class CreateCaseInput {
  leadIdentifier: string;
  equipment?: [CreateEquipmentDetailsInput];
  agencyCode: string;
  caseCode: string;
  createUserId: string;
}
export class CreateAssessmentInput {
  leadIdentifier: string;
  assessmentDetails: AssessmentDetailsInput;
  agencyCode: string;
  caseCode: string;
  createUserId: string;
}

export class CreatePreventionInput {
  leadIdentifier: string;
  preventionDetails: PreventionDetailsInput;
  agencyCode: string;
  caseCode: string;
  createUserId: string;
}

export class CreateEquipmentInput {
  leadIdentifier: string;
  equipment: [CreateEquipmentDetailsInput];
  agencyCode: string;
  caseCode: string;
  createUserId: string;
}
