import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { HWCRAssessmentActionResolver } from "./hwcr_assessment_action.resolver";
import { ActionCodeService } from "../action_code/action_code.service";

@Module({
  imports: [PrismaModule],
  providers: [HWCRAssessmentActionResolver, ActionCodeService],
})
export class HWCRAssessmentActionModule {}
