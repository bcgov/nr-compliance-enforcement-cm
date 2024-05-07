import { UUID } from "crypto";

export interface EquipmentActionItem {
  actionId: UUID;
  actor: string;
  date: Date;
  actionCode: string;
  activeIndicator: boolean;
}
