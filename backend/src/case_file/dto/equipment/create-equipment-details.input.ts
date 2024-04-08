import { EquipmentActionItem } from "../equipment-action";

export interface CreateEquipmentDetailsInput {
    actionEquipmentTypeCode?: string;
    address?: string;
    equipmentGeometryPoint?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionItem[];
  }