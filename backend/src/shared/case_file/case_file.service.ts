import { Injectable, Logger } from "@nestjs/common";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { case_file } from "../../../prisma/shared/generated/case_file";
import { CaseFile, CaseMomsSpaghettiFileFilters, CaseMomsSpaghettiFileResult, PageInfo } from "./dto/case_file";

@Injectable()
export class CaseFileService {
  constructor(
    private readonly prisma: SharedPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private readonly logger = new Logger(CaseFileService.name);

  async findOne(id: string) {
    const prismaCaseFile = await this.prisma.case_file.findUnique({
      where: {
        case_file_guid: id,
      },
      include: {
        agency_code: true,
        case_status_code: true,
        case_activity: {
          include: {
            case_activity_type_code: true,
          },
        },
      },
    });

    try {
      return this.mapper.map<case_file, CaseFile>(prismaCaseFile as case_file, "case_file", "CaseFile");
    } catch (error) {
      this.logger.error("Error mapping case file:", error);
    }
  }

  async findMany(ids: string[]): Promise<CaseFile[]> {
    if (!ids || ids.length === 0) {
      return [];
    }

    const prismaCaseFiles = await this.prisma.case_file.findMany({
      where: {
        case_file_guid: {
          in: ids,
        },
      },
      include: {
        agency_code: true,
        case_status_code: true,
        case_activity: {
          include: {
            case_activity_type_code: true,
          },
        },
      },
    });

    try {
      return this.mapper.mapArray<case_file, CaseFile>(prismaCaseFiles as Array<case_file>, "case_file", "CaseFile");
    } catch (error) {
      this.logger.error("Error fetching case files by IDs:", error);
      throw error;
    }
  }

  async search(
    page: number = 1,
    pageSize: number = 25,
    filters?: CaseMomsSpaghettiFileFilters,
  ): Promise<CaseMomsSpaghettiFileResult> {
    // Constrain input parameters
    page = Math.max(1, page);
    pageSize = Math.min(Math.max(1, pageSize), 100); // Limit max page size to 100
    const skip = (page - 1) * pageSize;

    // Build where clause based on filters
    const where: any = {};

    if (filters?.search) {
      // Partial UUID search options
      where.OR = [
        { case_file_guid: { equals: filters.search } }, // Exact matching
      ];
    }

    if (filters?.agencyCode) {
      where.owned_by_agency = filters.agencyCode;
    }

    if (filters?.caseStatus) {
      where.case_status = filters.caseStatus;
    }

    // map filters to db columns
    const sortFieldMap: Record<string, string> = {
      caseIdentifier: "case_file_guid",
      caseOpenedTimestamp: "case_opened_utc_timestamp",
      leadAgency: "owned_by_agency",
      caseStatus: "case_status",
    };

    let orderBy: any = { case_opened_utc_timestamp: "desc" }; // Default sort

    if (filters?.sortBy && filters?.sortOrder) {
      const dbField = sortFieldMap[filters.sortBy];
      const validSortOrder = filters.sortOrder.toLowerCase() === "asc" ? "asc" : "desc";

      if (dbField) {
        orderBy = { [dbField]: validSortOrder };
      }
    }

    try {
      // Get total count for pagination metadata
      const totalCount = await this.prisma.case_file.count({ where });

      // Get the actual data
      const prismaCaseFiles = await this.prisma.case_file.findMany({
        where,
        include: {
          agency_code: true,
          case_status_code: true,
          case_activity: {
            include: {
              case_activity_type_code: true,
            },
          },
        },
        skip,
        take: pageSize,
        orderBy,
      });

      // Map the data
      const items = this.mapper.mapArray<case_file, CaseFile>(
        prismaCaseFiles as Array<case_file>,
        "case_file",
        "CaseFile",
      );

      // Calculate pagination metadata
      const totalPages = Math.ceil(totalCount / pageSize);
      const hasNextPage = page < totalPages;
      const hasPreviousPage = page > 1;

      const pageInfo: PageInfo = {
        hasNextPage,
        hasPreviousPage,
        totalCount,
        totalPages,
        currentPage: page,
        pageSize: pageSize,
      };

      return {
        items,
        pageInfo,
      };
    } catch (error) {
      this.logger.error("Error fetching paginated case files:", error);
      throw error;
    }
  }
}
