import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class InactionReasonCodeService {
  constructor(private prisma: PrismaService) { }

  find(agency_code?: string) {
    const dataContext = this.prisma.inaction_reason_code;
    return agency_code ? dataContext.findMany({ where: { agency_code: agency_code } })
      : dataContext.findMany();
  }
}
