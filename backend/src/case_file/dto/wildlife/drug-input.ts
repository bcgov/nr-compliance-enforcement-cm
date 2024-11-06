export interface DrugInput {
  id?: string;

  vial: string;
  drug: string;
  amountUsed: string;
  injectionMethod: string;

  remainingUse: string;
  amountDiscarded: string;
  discardMethod: string;
}

export interface DrugInputV2 {
  id?: string;

  vial: string;
  drug: string;
  amountUsed: string;
  injectionMethod: string;

  remainingUse: string;
  additionalComments: string;
}
