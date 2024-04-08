import { EquipmentActionItem } from "../equipment-action";

export interface UpdateEquipmentDetailsInput {
    equipmentGuid?: string;
    actionEquipmentTypeCode?: string;
    address?: string;
    equipmentGeometryPoint?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionItem[];
  }