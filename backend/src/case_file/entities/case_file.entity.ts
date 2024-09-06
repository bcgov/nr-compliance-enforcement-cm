import { Assessment } from "./assessment.entity";
import { Decision } from "./decision-entity";
import { Equipment } from "./equipment.entity";
import { Prevention } from "./prevention.entity";
import { ReviewComplete } from "./review_complete";
import { Note } from "./supplemental-note.entity";
import { Wildlife } from "./wildlife-entity";

export class CaseFile {
  caseIdentifier?: string;
  leadIdentifier: string;
  assessmentDetails?: Assessment;
  preventionDetails?: Prevention;
  equipment?: Equipment[];
  note?: Note;
  isReviewRequired?: boolean;
  reviewComplete?: ReviewComplete;
  subject?: Array<Wildlife>;
  decision?: Decision;
}
