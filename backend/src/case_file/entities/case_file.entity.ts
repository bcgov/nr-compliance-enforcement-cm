import { Assessment } from "./assessment.entity";
import { Equipment } from "./equipment.entity";
import { Prevention } from "./prevention.entity";
import { Note } from "./supplemental-note.entity";

export class CaseFile {
    caseIdentifier: string;
    leadIdentifier: string;
    assessmentDetails: Assessment;
    equipmentDetails?: Equipment[];
    preventionDetails: Prevention;
    note: Note
}
