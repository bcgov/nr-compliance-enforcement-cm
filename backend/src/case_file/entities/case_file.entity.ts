import { Assessment } from "./assessment.entity";
import { Prevention } from "./prevention.entity";
import { ReviewComplete } from "./review_complete";
import { Note } from "./supplemental-note.entity";

export class CaseFile {
    caseIdentifier?: string;
    leadIdentifier: string;
    assessmentDetails?: Assessment;
    preventionDetails?: Prevention;
    note?: Note
    isReviewRequired?: boolean;
    reviewComplete?: ReviewComplete
}
