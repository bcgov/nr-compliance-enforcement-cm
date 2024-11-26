import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { NonComplianceCodeService } from "./non_compliance_code.service";
import { NonComplianceCodeResolver } from "./non_compliance.resolver";

@Module({
  imports: [PrismaModule],
  providers: [NonComplianceCodeResolver, NonComplianceCodeService],
})
export class NonComplianceCodeModule {}
