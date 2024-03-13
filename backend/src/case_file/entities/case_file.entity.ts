import { Assessment } from "./assessment.entity";

export class CaseFile {
    caseIdentifier: string;
    leadIdentifier: string;
    assessmentDetails: Assessment;
}
