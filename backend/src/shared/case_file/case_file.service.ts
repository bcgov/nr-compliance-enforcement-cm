import { Injectable, Logger } from "@nestjs/common";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { case_file } from "../../../prisma/shared/generated/case_file";
import {
  CaseFile,
  CaseFileFilters,
  CaseFileResult,
  CaseFileCreateInput,
  CaseFileUpdateInput,
  PageInfo,
} from "./dto/case_file";
import { PaginationUtility } from "../../common/pagination.utility";
import { UserService } from "../../common/user.service";

@Injectable()
export class CaseFileService {
  constructor(
    private readonly user: UserService,
    private readonly prisma: SharedPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly paginationUtility: PaginationUtility,
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

  async create(input: CaseFileCreateInput): Promise<CaseFile> {
    const caseFile = await this.prisma.case_file.create({
      data: {
        owned_by_agency: input.leadAgencyCode,
        case_status: input.caseStatus,
        case_opened_utc_timestamp: new Date(),
        create_user_id: this.user.getIdirUsername(),
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
      return this.mapper.map<case_file, CaseFile>(caseFile as case_file, "case_file", "CaseFile");
    } catch (error) {
      this.logger.error("Error creating case file:", error);
      throw error;
    }
  }

  async update(caseIdentifier: string, input: CaseFileUpdateInput): Promise<CaseFile> {
    const existingCaseFile = await this.prisma.case_file.findUnique({
      where: { case_file_guid: caseIdentifier },
    });
    if (!existingCaseFile) throw new Error("Case file not found");

    const updateData: any = {
      update_user_id: this.user.getIdirUsername(),
      update_utc_timestamp: new Date(),
    };

    if (input.leadAgencyCode !== undefined) {
      updateData.owned_by_agency = input.leadAgencyCode;
    }
    if (input.caseStatus !== undefined) {
      updateData.case_status = input.caseStatus;
    }

    const caseFile = await this.prisma.case_file.update({
      where: { case_file_guid: caseIdentifier },
      data: updateData,
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
      return this.mapper.map<case_file, CaseFile>(caseFile as case_file, "case_file", "CaseFile");
    } catch (error) {
      this.logger.error("Error updating case file:", error);
      throw error;
    }
  }

  async search(page: number = 1, pageSize: number = 25, filters?: CaseFileFilters): Promise<CaseFileResult> {
    const where: any = {};

    if (filters?.search) {
      // UUID column only supports exact matching
      where.OR = [{ case_file_guid: { equals: filters.search } }];
    }

    if (filters?.agencyCode) {
      where.owned_by_agency = filters.agencyCode;
    }

    if (filters?.caseStatus) {
      where.case_status = filters.caseStatus;
    }

    if (filters?.startDate || filters?.endDate) {
      where.case_opened_utc_timestamp = {};

      if (filters?.startDate) {
        where.case_opened_utc_timestamp.gte = filters.startDate;
      }

      if (filters?.endDate) {
        const endOfDay = new Date(filters.endDate);
        endOfDay.setHours(23, 59, 59, 999);
        where.case_opened_utc_timestamp.lte = endOfDay;
      }
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

    // Use the pagination utility to handle pagination logic and return pageInfo meta
    const result = await this.paginationUtility.paginate<case_file, CaseFile>(
      { page, pageSize },
      {
        prismaService: this.prisma,
        modelName: "case_file",
        sourceTypeName: "case_file",
        destinationTypeName: "CaseFile",
        mapper: this.mapper,
        whereClause: where,
        includeClause: {
          agency_code: true,
          case_status_code: true,
          case_activity: {
            include: {
              case_activity_type_code: true,
            },
          },
        },
        orderByClause: orderBy,
      },
    );

    return {
      items: result.items,
      pageInfo: result.pageInfo as PageInfo,
    };
  }
}
