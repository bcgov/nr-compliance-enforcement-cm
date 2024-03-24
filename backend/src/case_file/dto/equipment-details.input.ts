import { EquipmentActionInput } from "./equipment-action.input";

export interface EquipmentDetailsInput {
    actionEquipmentTypeCode?: string;
    equipmentLocationDesc?: string;
    equipmentGeometryPoint?: string;
    actionEquipmentTypeActiveIndicator: boolean;
    actions: EquipmentActionInput[];
  }