import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EquipmentCode } from "./entities/equipment_code.entity";

@Injectable()
export class EquipmentCodeService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const prismaEquipmentCodes = await this.prisma.equipment_code.findMany({
      select: {
        equipment_code: true,
        short_description: true,
        long_description: true,
        display_order: true,
        active_ind: true,
      },
    });

    const equipmentCodes: EquipmentCode[] = prismaEquipmentCodes.map((prismaEquipmentCodes) => ({
      equipmentCode: prismaEquipmentCodes.equipment_code,
      shortDescription: prismaEquipmentCodes.short_description,
      longDescription: prismaEquipmentCodes.long_description,
      displayOrder: prismaEquipmentCodes.display_order,
      activeIndicator: prismaEquipmentCodes.active_ind,
    }));

    return equipmentCodes;
  }

  findOne(id: string) {
    return this.prisma.equipment_code.findUnique({
      where: {
        equipment_code: id,
        active_ind: true,
      },
    });
  }
}
