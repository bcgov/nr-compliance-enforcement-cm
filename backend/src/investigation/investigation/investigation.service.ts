import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Injectable, Logger } from "@nestjs/common";
import { investigation } from "../../../prisma/investigation/generated/investigation";
import { Investigation, InvestigationFilters, InvestigationResult } from "./dto/investigation";
import { InvestigationPrismaService } from "../../prisma/investigation/prisma.investigation.service";
import { PaginationUtility } from "src/common/pagination.utility";
import { PageInfo } from "src/shared/case_file/dto/case_file";
import { CaseFileService } from "src/shared/case_file/case_file.service";

@Injectable()
export class InvestigationService {
  constructor(
    private readonly prisma: InvestigationPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly paginationUtility: PaginationUtility,
    private readonly caseFileService: CaseFileService,
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

  async search(page: number = 1, pageSize: number = 25, filters?: InvestigationFilters): Promise<InvestigationResult> {
    const where: any = {};

    if (filters?.search) {
      // UUID column only supports exact matching
      where.OR = [{ investigation_guid: { equals: filters.search } }];
    }

    if (filters?.leadAgency) {
      where.owned_by_agency_ref = filters.leadAgency;
    }

    if (filters?.investigationStatus) {
      where.investigation_status = filters.investigationStatus;
    }

    if (filters?.startDate || filters?.endDate) {
      where.investigation_opened_utc_timestamp = {};

      if (filters?.startDate) {
        where.investigation_opened_utc_timestamp.gte = filters.startDate;
      }

      if (filters?.endDate) {
        const endOfDay = new Date(filters.endDate);
        endOfDay.setHours(23, 59, 59, 999);
        where.investigation_opened_utc_timestamp.lte = endOfDay;
      }
    }

    // map filters to db columns
    const sortFieldMap: Record<string, string> = {
      investigationGuid: "investigation_guid",
      openedTimestamp: "investigation_opened_utc_timestamp",
      leadAgency: "owned_by_agency_ref",
      investigationStatus: "investigation_status",
    };

    let orderBy: any = { investigation_opened_utc_timestamp: "desc" }; // Default sort

    if (filters?.sortBy && filters?.sortOrder) {
      const dbField = sortFieldMap[filters.sortBy];
      const validSortOrder = filters.sortOrder.toLowerCase() === "asc" ? "asc" : "desc";

      if (dbField) {
        orderBy = { [dbField]: validSortOrder };
      }
    }

    // Use the pagination utility to handle pagination logic and return pageInfo meta
    const result = await this.paginationUtility.paginate<investigation, Investigation>(
      { page, pageSize },
      {
        prismaService: this.prisma,
        modelName: "investigation",
        sourceTypeName: "investigation",
        destinationTypeName: "Investigation",
        mapper: this.mapper,
        whereClause: where,
        includeClause: {
          officer_investigation_xref: true,
          investigation_status_code: true,
        },
        orderByClause: orderBy,
      },
    );
    const res = await Promise.all(
      result.items.map(async (inv) => {
        const caseFile = await this.caseFileService.findCaseFileByActivityId("INVSTGTN", inv.investigationGuid);

        return { ...inv, caseIdentifier: caseFile.caseIdentifier };
      }),
    );

    if (filters?.sortBy === "caseIdentifier") {
      if (filters?.sortOrder?.toLowerCase() === "desc") {
        res.sort((a, b) => b.caseIdentifier.localeCompare(a.caseIdentifier));
      } else res.sort((a, b) => a.caseIdentifier.localeCompare(b.caseIdentifier));
    }

    return {
      items: res,
      pageInfo: result.pageInfo as PageInfo,
    };
  }
}
