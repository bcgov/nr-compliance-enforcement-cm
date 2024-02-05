import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class EquipmentCodeService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.equipment_code.findMany();
  }

  findOne(id: string) {
    return this.prisma.equipment_code.findUnique({
      where: { equipment_code: id },
    });
  }
}
