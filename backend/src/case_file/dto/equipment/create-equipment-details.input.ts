import { EquipmentActionItem } from "../equipment-action";

export interface CreateEquipmentDetailsInput {
    equipmentTypeCode?: string;
    address?: string;
    equipmentGeometryPoint?: string;
    equipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionItem[];
  }