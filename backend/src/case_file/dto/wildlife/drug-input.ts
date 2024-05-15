export interface DrugInput {
  id?: string;

  vial: string;
  drug: string;
  amountUsed: string;
  injectionMethod: string;
  reactions: string;

  remainingUse: string;
  amountDiscarded: string;
  discardMethod: string;
}
