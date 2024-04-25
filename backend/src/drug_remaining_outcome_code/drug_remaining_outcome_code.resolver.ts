import { Resolver, Query, Args } from "@nestjs/graphql";
import { DrugRemainingOutcomeCodeService } from "./drug_remaining_outcome_code.service";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver("DrugRemainingOutcomeCode")
export class DrugRemainingOutcomeCodeResolver {
  constructor(private readonly drugRemainingOutcomeCodeService: DrugRemainingOutcomeCodeService) {}

  @Query("drugRemainingOutcomeCodes")
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.drugRemainingOutcomeCodeService.findAll();
  }
}
