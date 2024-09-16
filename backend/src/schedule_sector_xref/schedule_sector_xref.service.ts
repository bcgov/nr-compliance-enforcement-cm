import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScheduleSectorXref } from "./entities/schedule_sector_xref.entity";

@Injectable()
export class ScheduleSectorXrefService {
  constructor(private prisma: PrismaService) {}

  findAll = async (): Promise<Array<ScheduleSectorXref>> => {
    const codes = await this.prisma.schedule_sector_xref.findMany({
      select: {
        sector_code: true,
        schedule_code: true,
      },
    });

    return codes.map(({ sector_code, schedule_code }) => ({
      sectorCode: sector_code,
      scheduleCode: schedule_code,
    }));
  };
}
