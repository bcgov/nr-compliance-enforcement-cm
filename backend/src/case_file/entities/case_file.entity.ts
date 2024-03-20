import { Assessment } from "./assessment.entity";
import { PreventionMeasure } from "./prevention-measure.entity";

export class CaseFile {
    caseIdentifier: string;
    leadIdentifier: string;
    assessmentDetails: Assessment;
    preventionDetails: PreventionMeasure;
}
