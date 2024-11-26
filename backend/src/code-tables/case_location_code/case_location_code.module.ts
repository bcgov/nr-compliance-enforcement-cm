import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { CaseLocationCodeService } from "./case_location_code.service";
import { CaseLocationCodeResolver } from "./case_location_code.resolver";

@Module({
  imports: [PrismaModule],
  providers: [CaseLocationCodeResolver, CaseLocationCodeService],
})
export class CaseLocationCodeModule {}
