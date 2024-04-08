import { CaseFileActionItem } from "../dto/case-file-action-item";

export class Equipment {
    equipmentGuid: string;
    actionEquipmentTypeCode: string;
    actionEquipmentTypeShortDescription?: string;
    actionEquipmentTypeLongDescription?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    address?: string;
    xCoordinate: string;
    yCoordinate: string;
    actions: CaseFileActionItem[]
}