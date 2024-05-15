import { Module } from "@nestjs/common";
import { EquipmentCodeResolver } from "./equipment_code.resolver";
import { PrismaModule } from "nestjs-prisma";
import { EquipmentCodeService } from "./equipment_code.service";

@Module({
  imports: [PrismaModule],
  providers: [EquipmentCodeResolver, EquipmentCodeService],
})
export class EquipmentCodeModule {}
