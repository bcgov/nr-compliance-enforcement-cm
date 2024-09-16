import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { ScheduleSectorXrefService } from "./schedule_sector_xref.service";
import { ScheduleSectorXrefResolver } from "./schedule_sector_xref.resolver";

@Module({
  imports: [PrismaModule],
  providers: [ScheduleSectorXrefResolver, ScheduleSectorXrefService],
})
export class ScheduleSectorXrefModule {}
