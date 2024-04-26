import { Module } from "@nestjs/common";
import { EquipmentCodeService } from "./equipment_code.service";
import { EquipmentCodeResolver } from "./equipment_code.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [EquipmentCodeResolver, EquipmentCodeService],
})
export class EquipmentCodeModule {}
