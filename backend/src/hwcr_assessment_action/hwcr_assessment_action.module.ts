import { Module } from "@nestjs/common";
import { HWCRAssessmentActionResolver } from "./hwcr_assessment_action.resolver";
import { HWCRAssessmentActionService } from "./hwcr_assessment_action.service";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [HWCRAssessmentActionResolver, HWCRAssessmentActionService],
})
export class HWCRAssessmentActionModule {}
