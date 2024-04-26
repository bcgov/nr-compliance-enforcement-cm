import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { HWCRPreventionActionService } from "./hwcr_prevention_action.service";
import { HWCRPreventionActionResolver } from "./hwcr_prevention_action.resolver";

@Module({
  imports: [PrismaModule],
  providers: [HWCRPreventionActionResolver, HWCRPreventionActionService],
})
export class HWCRPreventionActionModule {}
