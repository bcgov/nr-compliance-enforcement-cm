import { CaseFileActionItem } from "../dto/case-file-action-item";

export class Equipment {
    equipmentGuid: string;
    equipmentTypeCode: string;
    equipmentTypeShortDescription?: string;
    equipmentTypeLongDescription?: string;
    equipmentTypeActiveIndicator: boolean;
    address?: string;
    xCoordinate: string;
    yCoordinate: string;
    actions: CaseFileActionItem[];
}