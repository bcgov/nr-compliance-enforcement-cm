import { EquipmentActionItem } from "../equipment-action";

export interface CreateEquipmentDetailsInput {
    equipmentTypeCode?: string;
    address?: string;
    xCoordinate: string;
    yCoordinate: string;
    equipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionItem[];
  }