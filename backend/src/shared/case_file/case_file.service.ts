import { Injectable, Logger } from "@nestjs/common";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { case_file } from "../../../prisma/shared/generated/case_file";
import { CaseFile } from "./dto/case_file";

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
}
