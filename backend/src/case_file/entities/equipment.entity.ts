import { EquipmentAction } from "./equipment-action.entity";
import { Point } from "geojson";

export class Equipment {
    type: string;
    shortDescription: string;
    longDescription: string;
    address: string;
    coordinates: Point;
    actions: EquipmentAction[]
}