import { EquipmentAction } from "./equipment-action.entity";

export class Equipment {
    actionEquipmentTypeCode: string;
    actionEquipmentTypeShortDescription?: string;
    actionEquipmentTypeLongDescription?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    address?: string;
    xCoordinate: string;
    yCoordinate: string;
    actions: EquipmentAction[]
}