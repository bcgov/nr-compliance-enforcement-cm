import { Module } from "@nestjs/common";
import { CaseFileService } from "./case_file.service";
import { CaseFileResolver } from "./case_file.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [CaseFileResolver, CaseFileService],
})
export class CaseFileModule {}
