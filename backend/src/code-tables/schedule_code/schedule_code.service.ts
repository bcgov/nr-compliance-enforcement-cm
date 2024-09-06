import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScheduleCode } from "./entities/sechedule_code.entity";

@Injectable()
export class ScheduleCodeService {
  constructor(private prisma: PrismaService) {}

  findAll = async (): Promise<Array<ScheduleCode>> => {
    const codes = await this.prisma.schedule_code.findMany({
      select: {
        schedule_code: true,
        short_description: true,
        long_description: true,
        display_order: true,
        active_ind: true,
      },
    });

    return codes.map(({ schedule_code, short_description, long_description, display_order, active_ind }) => ({
      scheduleCode: schedule_code,
      shortDescription: short_description,
      longDescription: long_description,
      displayOrder: display_order,
      activeIndicator: active_ind,
    }));
  };
}
