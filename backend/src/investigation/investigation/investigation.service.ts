import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Injectable, Logger } from "@nestjs/common";
import { investigation } from "../../../prisma/investigation/generated/investigation";
import { CreateInvestigationInput, Investigation, UpdateInvestigationInput } from "./dto/investigation";
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

  async findMany(ids: string[]): Promise<Investigation[]> {
    if (!ids || ids.length === 0) {
      return [];
    }

    const prismaInvestigations = await this.prisma.investigation.findMany({
      where: {
        investigation_guid: {
          in: ids,
        },
      },
      include: {
        investigation_status_code: true,
      },
    });

    try {
      return this.mapper.mapArray<investigation, Investigation>(
        prismaInvestigations as Array<investigation>,
        "investigation",
        "Investigation",
      );
    } catch (error) {
      this.logger.error("Error fetching investigations by IDs:", error);
      throw error;
    }
  }

  async create(input: CreateInvestigationInput): Promise<Investigation> {
    // Verify case file exists
    const caseFile = await this.shared.case_file.findUnique({
      where: {
        case_file_guid: input.caseIdentifier,
      },
    });

    if (!caseFile) {
      throw new Error(`Case file with guid ${input.caseIdentifier} not found`);
    }

    // Create the investigation
    let investigation;
    try {
      investigation = await this.prisma.investigation.create({
        data: {
          investigation_status: input.investigationStatus,
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
    } catch (error) {
      this.logger.error("Error creating investigation:", error);
      throw error;
    }

    // Try to create case activity record, and if it fails, delete the investigation
    try {
      await this.shared.case_activity.create({
        data: {
          case_file_guid: input.caseIdentifier,
          activity_type: "INVSTGTN",
          activity_identifier_ref: investigation.investigation_guid,
          create_user_id: this.user.getIdirUsername(),
          create_utc_timestamp: new Date(),
        },
      });
    } catch (activityError) {
      // Attempt to delete the investigation that was just created since the case activity creation failed
      // This is done to prevent orphaned investigations as this violates the current understanding of the business rules
      try {
        await this.prisma.investigation.delete({
          where: { investigation_guid: investigation.investigation_guid },
        });
      } catch (deleteError) {
        this.logger.error(
          `Error creating case activity, cleanup deletion of investigation with guid ${investigation.investigation_guid} failed:`,
          deleteError,
        );
        // Throw a combined error
        throw new Error(
          `Error deleting investigation record after case activity creation failed. Activity error: ${activityError}. Cleanup error: ${deleteError}`,
        );
      }
      // Successfully deleted the investigation record
      this.logger.error("Error creating case activity, investigation record deleted:", activityError);
      throw new Error(
        `Failed to create case activity for investigation. The investigation was rolled back. Error: ${activityError}`,
      );
    }

    try {
      return this.mapper.map<investigation, Investigation>(
        investigation as investigation,
        "investigation",
        "Investigation",
      );
    } catch (error) {
      this.logger.error("Error mapping investigation:", error);
      throw error;
    }
  }

  async update(investigationGuid: string, input: UpdateInvestigationInput): Promise<Investigation> {
    // Check if the investigation exists
    const existingInvestigation = await this.prisma.investigation.findUnique({
      where: { investigation_guid: investigationGuid },
    });

    if (!existingInvestigation) {
      throw new Error(`Investigation with guid ${investigationGuid} not found.`);
    }
    let updatedInvestigation;
    try {
      const updateData: any = {
        update_user_id: this.user.getIdirUsername(),
        update_utc_timestamp: new Date(),
      };

      if (input.leadAgency !== undefined) {
        updateData.owned_by_agency_ref = input.leadAgency;
      }
      if (input.investigationStatus !== undefined) {
        updateData.investigation_status = input.investigationStatus;
      }
      if (input.description !== undefined) {
        updateData.investigation_description = input.description;
      }
      // Perform the update
      updatedInvestigation = await this.prisma.investigation.update({
        where: { investigation_guid: investigationGuid },
        data: updateData,
        include: {
          investigation_status_code: true,
        },
      });
    } catch (error) {
      this.logger.error(`Error updating investigation with guid ${investigationGuid}:`, error);
      throw error;
    }
    try {
      return this.mapper.map<investigation, Investigation>(
        updatedInvestigation as investigation,
        "investigation",
        "Investigation",
      );
    } catch (error) {
      this.logger.error(`Error mapping investigation with guid ${investigationGuid}:`, error);
      throw error;
    }
  }
}
