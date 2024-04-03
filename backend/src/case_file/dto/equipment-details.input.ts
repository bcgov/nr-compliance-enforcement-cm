import { EquipmentActionInput } from "./equipment-action.input";

export interface EquipmentDetailsInput {
    actionEquipmentTypeCode?: string;
    address?: string;
    equipmentGeometryPoint?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionInput[];
  }