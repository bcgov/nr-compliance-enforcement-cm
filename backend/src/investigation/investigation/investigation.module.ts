import { Module } from "@nestjs/common";
import { InvestigationService } from "./investigation.service";
import { InvestigationResolver } from "./investigation.resolver";
import { PrismaModuleInvestigation } from "../../prisma/investigation/prisma.investigation.module";
import { PrismaModuleShared } from "../../prisma/shared/prisma.shared.module";
import { AutomapperModule } from "@automapper/nestjs";
import { UserModule } from "../../common/user.module";

@Module({
  imports: [PrismaModuleInvestigation, PrismaModuleShared, AutomapperModule, UserModule],
  providers: [InvestigationResolver, InvestigationService],
})
export class InvestigationModule {}
