import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Injectable, Logger } from "@nestjs/common";
import { inspection } from "../../../prisma/inspection/generated/inspection";
import { Inspection, InspectionFilters, InspectionResult } from "./dto/inspection";
import { InspectionPrismaService } from "../../prisma/inspection/prisma.inspection.service";
import { PaginationUtility } from "src/common/pagination.utility";
import { PageInfo } from "src/shared/case_file/dto/case_file";
import { CaseFileService } from "src/shared/case_file/case_file.service";

@Injectable()
export class InspectionService {
  constructor(
    private readonly prisma: InspectionPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly paginationUtility: PaginationUtility,
    private readonly caseFileService: CaseFileService,
  ) {}

  private readonly logger = new Logger(InspectionService.name);

  async findOne(inspectionGuid: string) {
    const prismaInspection = await this.prisma.inspection.findUnique({
      where: {
        inspection_guid: inspectionGuid,
      },
      include: {
        inspection_status_code: true,
      },
    });

    if (!prismaInspection) {
      throw new Error(`Inspection with guid ${inspectionGuid} not found`);
    }

    try {
      return this.mapper.map<inspection, Inspection>(prismaInspection as inspection, "inspection", "Inspection");
    } catch (error) {
      this.logger.error("Error mapping inspection:", error);
      throw error;
    }
  }

  async findMany(ids: string[]): Promise<Inspection[]> {
    if (!ids || ids.length === 0) {
      return [];
    }

    const prismaInspections = await this.prisma.inspection.findMany({
      where: {
        inspection_guid: {
          in: ids,
        },
      },
      include: {
        inspection_status_code: true,
      },
    });

    try {
      return this.mapper.mapArray<inspection, Inspection>(
        prismaInspections as Array<inspection>,
        "inspection",
        "Inspection",
      );
    } catch (error) {
      this.logger.error("Error fetching inspections by IDs:", error);
      throw error;
    }
  }

  async search(page: number = 1, pageSize: number = 25, filters?: InspectionFilters): Promise<InspectionResult> {
    const where: any = {};

    if (filters?.search) {
      // UUID column only supports exact matching
      where.OR = [{ inspection_guid: { equals: filters.search } }];
    }

    if (filters?.leadAgency) {
      where.owned_by_agency_ref = filters.leadAgency;
    }

    if (filters?.inspectionStatus) {
      where.inspection_status = filters.inspectionStatus;
    }

    if (filters?.startDate || filters?.endDate) {
      where.inspection_opened_utc_timestamp = {};

      if (filters?.startDate) {
        where.inspection_opened_utc_timestamp.gte = filters.startDate;
      }

      if (filters?.endDate) {
        const endOfDay = new Date(filters.endDate);
        endOfDay.setHours(23, 59, 59, 999);
        where.inspection_opened_utc_timestamp.lte = endOfDay;
      }
    }

    // map filters to db columns
    const sortFieldMap: Record<string, string> = {
      inspectionGuid: "inspection_guid",
      openedTimestamp: "inspection_opened_utc_timestamp",
      leadAgency: "owned_by_agency_ref",
      inspectionStatus: "inspection_status",
    };

    let orderBy: any = { inspection_opened_utc_timestamp: "desc" }; // Default sort

    if (filters?.sortBy && filters?.sortOrder) {
      const dbField = sortFieldMap[filters.sortBy];
      const validSortOrder = filters.sortOrder.toLowerCase() === "asc" ? "asc" : "desc";

      if (dbField) {
        orderBy = { [dbField]: validSortOrder };
      }
    }

    // Use the pagination utility to handle pagination logic and return pageInfo meta
    const result = await this.paginationUtility.paginate<inspection, Inspection>(
      { page, pageSize },
      {
        prismaService: this.prisma,
        modelName: "inspection",
        sourceTypeName: "inspection",
        destinationTypeName: "Inspection",
        mapper: this.mapper,
        whereClause: where,
        includeClause: {
          officer_inspection_xref: true,
          inspection_status_code: true,
        },
        orderByClause: orderBy,
      },
    );
    const res = await Promise.all(
      result.items.map(async (ins) => {
        const caseFile = await this.caseFileService.findCaseFileByActivityId("INSPECTION", ins.inspectionGuid);

        return { ...ins, caseIdentifier: caseFile.caseIdentifier };
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
