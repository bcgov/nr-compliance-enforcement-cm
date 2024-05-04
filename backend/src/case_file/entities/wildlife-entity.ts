export interface Wildlife {
  id: string;
  species: string;
  sex?: string;
  age?: string;
  categoryLevel?: string;
  conflictHistory?: string;
  outcome?: string;
  tags: [];
  drugs: [];
  actions: [];
}

export interface EarTag {
  id: string;
  ear: string;
  identifier: string;
}

export interface DrugUsed {
  id: string;

  vial: string;
  drug: string;
  amountUsed: string;
  injectionMethod: string;
  reactions?: string;

  remainingUse?: string;
  amountDiscarded?: string;
  discardMethod?: string;
}
