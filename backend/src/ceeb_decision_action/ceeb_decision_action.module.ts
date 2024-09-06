import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { ActionCodeService } from "../action_code/action_code.service";
import { CEEBDecisionActionResolver } from "./ceeb_decision_action.resolver";

@Module({
  imports: [PrismaModule],
  providers: [CEEBDecisionActionResolver, ActionCodeService],
})
export class CEEBDecisionActionModule {}
