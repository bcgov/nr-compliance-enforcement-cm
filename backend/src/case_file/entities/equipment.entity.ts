import { CaseFileActionItem } from "../dto/case-file-action-item";

export class Equipment {
  id: string;
  typeCode: string;
  typeShortDescription?: string;
  typeLongDescription?: string;
  activeIndicator: boolean;
  address?: string;
  xCoordinate?: string;
  yCoordinate?: string;
  createDate: Date;
  actions: CaseFileActionItem[];
}
