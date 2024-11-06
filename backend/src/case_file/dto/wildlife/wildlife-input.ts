import { DrugInputV2 } from "./drug-input";
import { EarTagInput } from "./ear-tag-input";
import { WildlifeAction } from "./wildlife-action";

export interface WildlifeInput {
  id?: string;
  species: string;
  sex?: string;
  age?: string;
  categoryLevel?: string;
  conflictHistory?: string;
  outcome?: string;
  tags?: Array<EarTagInput>;
  drugs?: Array<DrugInputV2>;
  actions?: Array<WildlifeAction>;
}
