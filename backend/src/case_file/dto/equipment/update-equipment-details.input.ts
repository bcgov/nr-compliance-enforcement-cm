import { EquipmentActionItem } from "../equipment-action";

export interface UpdateEquipmentDetailsInput {
    equipmentGuid?: string;
    equipmentTypeCode?: string;
    address?: string;
    equipmentGeometryPoint?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionItem[];
  }