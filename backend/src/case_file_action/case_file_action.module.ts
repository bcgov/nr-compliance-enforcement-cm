import { Module } from "@nestjs/common";
import { CaseFileActionService } from "./case_file_action.service";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [CaseFileActionService],
  exports: [CaseFileActionService],
})
export class CaseFileActionModule {}
