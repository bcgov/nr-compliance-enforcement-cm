import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { ScheduleCodeResolver } from "./schedule_code.resolver";
import { ScheduleCodeService } from "./schedule_code.service";

@Module({
  imports: [PrismaModule],
  providers: [ScheduleCodeResolver, ScheduleCodeService],
})
export class ScheduleCodeModule {}
