import { EquipmentActionItem } from "./equipment-action";

export interface EquipmentDetailsInput {
    actionEquipmentTypeCode?: string;
    address?: string;
    equipmentGeometryPoint?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionItem[];
  }