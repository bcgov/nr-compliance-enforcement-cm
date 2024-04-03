import { Assessment } from "./assessment.entity";
import { Prevention } from "./prevention.entity";
import { ReviewComplete } from "./review_complete";

export class CaseFile {
    caseIdentifier?: string;
    leadIdentifier: string;
    assessmentDetails?: Assessment;
    preventionDetails?: Prevention;
    isReviewRequired?: boolean;
    reviewComplete?: ReviewComplete
}
