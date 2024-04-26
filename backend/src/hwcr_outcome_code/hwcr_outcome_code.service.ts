import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HwcrOutcomeCode } from "./entities/hwcr_outcome_code.entity";

@Injectable()
export class HwcrOutcomeCodeService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const prismaHWCROutcomeCodes = await this.prisma.hwcr_outcome_code.findMany({
      select: {
        hwcr_outcome_code: true,
        short_description: true,
        long_description: true,
        display_order: true,
        active_ind: true,
      },
    });

    const hwcrOutcomeCodes: HwcrOutcomeCode[] = prismaHWCROutcomeCodes.map((prismaHWCROutcomeCodes) => ({
      hwcrOutcomeCode: prismaHWCROutcomeCodes.hwcr_outcome_code,
      shortDescription: prismaHWCROutcomeCodes.short_description,
      longDescription: prismaHWCROutcomeCodes.long_description,
      displayOrder: prismaHWCROutcomeCodes.display_order,
      activeIndicator: prismaHWCROutcomeCodes.active_ind,
    }));

    return hwcrOutcomeCodes;
  }

  findOne(id: string) {
    return this.prisma.hwcr_outcome_code.findUnique({
      where: { hwcr_outcome_code: id, active_ind: true },
    });
  }
}
