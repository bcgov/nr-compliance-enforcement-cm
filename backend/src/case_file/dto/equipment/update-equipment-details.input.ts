import { EquipmentActionItem } from "../equipment-action";

export interface UpdateEquipmentDetailsInput {
    equipmentGuid?: string;
    equipmentTypeCode?: string;
    address?: string;
    xCoordinate: string;
    yCoordinate: string;
    actionEquipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionItem[];
  }