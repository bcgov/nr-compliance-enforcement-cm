import { Module } from "@nestjs/common";
import { ParkService } from "./park.service";
import { ParkResolver } from "./park.resolver";
import { PrismaModuleShared } from "../../prisma/shared/prisma.shared.module";
import { AutomapperModule } from "@automapper/nestjs";

@Module({
  imports: [PrismaModuleShared, AutomapperModule],
  providers: [ParkResolver, ParkService],
  exports: [ParkService],
})
export class ParkModule {}
