import { Module } from "@nestjs/common";
import { CaseFileResolver } from "./case_file.resolver";
import { CaseFileService } from "./case_file.service";
import { PrismaModuleShared } from "../../prisma/shared/prisma.shared.module";
import { AutomapperModule } from "@automapper/nestjs";
import { PaginationModule } from "../../common/pagination.module";

@Module({
  imports: [PrismaModuleShared, AutomapperModule, PaginationModule],
  providers: [CaseFileResolver, CaseFileService],
})
export class CaseMomsSpaghettiFileModule {}
