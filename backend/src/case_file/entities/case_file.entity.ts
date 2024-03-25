import { Assessment } from "./assessment.entity";
import { Prevention } from "./prevention.entity";

export class CaseFile {
    caseIdentifier: string;
    leadIdentifier: string;
    assessmentDetails: Assessment;
    preventionDetails: Prevention;
}
