import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Injectable, Logger } from "@nestjs/common";
import { investigation } from "../../../prisma/investigation/generated/investigation";
import { Investigation } from "./dto/investigation";
import { InvestigationPrismaService } from "../../prisma/investigation/prisma.investigation.service";

@Injectable()
export class InvestigationService {
  constructor(
    private readonly prisma: InvestigationPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private readonly logger = new Logger(InvestigationService.name);

  async findOne(investigationGuid: string) {
    const prismaInvestigation = await this.prisma.investigation.findUnique({
      where: {
        investigation_guid: investigationGuid,
      },
      include: {
        investigation_status_code: true,
      },
    });

    if (!prismaInvestigation) {
      throw new Error(`Investigation with guid ${investigationGuid} not found`);
    }

    try {
      return this.mapper.map<investigation, Investigation>(
        prismaInvestigation as investigation,
        "investigation",
        "Investigation",
      );
    } catch (error) {
      this.logger.error("Error mapping investigation:", error);
      throw error;
    }
  }
}
