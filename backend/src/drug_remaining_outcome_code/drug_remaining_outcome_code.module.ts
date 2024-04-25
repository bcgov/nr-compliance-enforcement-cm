import { Module } from "@nestjs/common";
import { DrugRemainingOutcomeCodeService } from "./drug_remaining_outcome_code.service";
import { DrugRemainingOutcomeCodeResolver } from "./drug_remaining_outcome_code.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [DrugRemainingOutcomeCodeResolver, DrugRemainingOutcomeCodeService],
})
export class DrugRemainingOutcomeCodeModule {}
