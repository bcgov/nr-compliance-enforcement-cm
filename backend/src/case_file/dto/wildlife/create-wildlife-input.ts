import { DrugInput } from "./drug-input";
import { EarTagInput } from "./ear-tag-input";
import { WildlifeAction } from "./wildlife-action";

export interface CreateWildlifeInput {
  categoryLevel?: string;
  conflictHistory?: string;
  sex?: string;
  age?: string;
  outcome?: string;
  species: string;
  earTags?: Array<EarTagInput>;
  drugs?: Array<DrugInput>;
  actions?: Array<WildlifeAction>; //-- this should be refactored
}
