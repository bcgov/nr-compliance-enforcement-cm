import { Module } from "@nestjs/common";
import { AgencyCodeService } from "./agency_code.service";
import { AgencyCodeResolver } from "./agency_code.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [AgencyCodeResolver, AgencyCodeService],
})
export class AgencyCodeModule {}
