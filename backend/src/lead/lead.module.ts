import { Module } from "@nestjs/common";
import { LeadService } from "./lead.service";
import { LeadResolver } from "./lead.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [LeadResolver, LeadService],
})
export class LeadModule {}
