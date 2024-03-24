import { Assessment } from "./assessment.entity";
import { Equipment } from "./equipment.entity";

export class CaseFile {
    caseIdentifier: string;
    leadIdentifier: string;
    assessmentDetails: Assessment;
    equipmentDetails?: Equipment[];
}
