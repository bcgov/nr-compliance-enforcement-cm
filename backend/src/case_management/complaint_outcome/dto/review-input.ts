export class ReviewInput {
  complaintId: string;
  agencyCode: string;
  caseCode: string;
  userId: string;
  isReviewRequired: boolean;
  complaintOutcomeGuid?: string;
  reviewComplete?: {
    actor: string;
    date: Date;
    actionCode: string;
    actionId?: string;
    activeIndicator?: boolean;
  };
}
