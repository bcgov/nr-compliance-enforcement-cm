import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Injectable, Logger } from "@nestjs/common";
import { investigation } from "../../../prisma/investigation/generated/investigation";
import { CreateInvestigationInput, Investigation } from "./dto/investigation";
import { InvestigationPrismaService } from "../../prisma/investigation/prisma.investigation.service";
import { UserService } from "../../common/user.service";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";

@Injectable()
export class InvestigationService {
  constructor(
    private readonly prisma: InvestigationPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly user: UserService,
    private readonly shared: SharedPrismaService,
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

  async create(input: CreateInvestigationInput): Promise<Investigation> {
    try {
      // Verify case file exists
      const caseFile = await this.shared.case_file.findUnique({
        where: {
          case_file_guid: input.caseGuid,
        },
      });

      if (!caseFile) {
        throw new Error(`Case file with guid ${input.caseGuid} not found`);
      }

      // Create investigation
      const investigation = await this.prisma.investigation.create({
        data: {
          investigation_status: "OPEN",
          investigation_description: input.description,
          owned_by_agency_ref: input.leadAgency,
          investigation_opened_utc_timestamp: new Date(),
          create_user_id: this.user.getIdirUsername(),
          create_utc_timestamp: new Date(),
        },
        include: {
          investigation_status_code: true,
        },
      });

      // Create case activity record
      await this.shared.case_activity.create({
        data: {
          case_file_guid: input.caseGuid,
          activity_type: "INVSTGTN",
          activity_identifier_ref: investigation.investigation_guid,
          create_user_id: this.user.getIdirUsername(),
          create_utc_timestamp: new Date(),
        },
      });
      return this.mapper.map<investigation, Investigation>(
        investigation as investigation,
        "investigation",
        "Investigation",
      );
    } catch (error) {
      this.logger.error("Error creating investigation:", error);
      throw error;
    }
  }
}
