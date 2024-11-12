import { CaseFileAction } from "../../case_file_action/entities/case_file_action.entity";

export interface Wildlife {
  order: number;
  id: string;
  species: string;
  sex?: string;
  age?: string;
  categoryLevel?: string;
  identifyingFeatures?: string;
  outcome?: string;
  tags?: Array<EarTag>;
  drugs?: Array<DrugUsed>;
  actions?: Array<CaseFileAction>;
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
