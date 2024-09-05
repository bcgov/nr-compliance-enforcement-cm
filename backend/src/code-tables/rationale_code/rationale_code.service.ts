import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RationaleCode } from "./entities/rationale_code.entity";

@Injectable()
export class RationaleCodeService {
  constructor(private prisma: PrismaService) {}

  findAll = async (): Promise<Array<RationaleCode>> => {
    const codes = await this.prisma.rationale_code.findMany({
      select: {
        rationale_code: true,
        short_description: true,
        long_description: true,
        display_order: true,
        active_ind: true,
      },
    });

    return codes.map(({ rationale_code, short_description, long_description, display_order, active_ind }) => ({
      rationaleCode: rationale_code,
      shortDescription: short_description,
      longDescription: long_description,
      displayOrder: display_order,
      activeIndicator: active_ind,
    }));
  };
}
