import { Resolver, Query, Args } from "@nestjs/graphql";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { ActionCodeService } from "../action_code/action_code.service";
import { ACTION_TYPE_CODES } from "../common/action_type_codes";

@UseGuards(JwtRoleGuard)
@Resolver("CEEBDecisionAction")
export class CEEBDecisionActionResolver {
  constructor(private readonly actionCodeService: ActionCodeService) {}

  @Query("CEEBDecisionActions")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  find() {
    return this.actionCodeService.findAllCodesByType(ACTION_TYPE_CODES.CEEBACTION);
  }
}
