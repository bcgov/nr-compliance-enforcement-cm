import { Resolver, Query, Args } from "@nestjs/graphql";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { HWCRPreventionActionService } from "./hwcr_prevention_action.service";

@UseGuards(JwtRoleGuard)
@Resolver("HWCRPreventionAction")
export class HWCRPreventionActionResolver {
  constructor(private readonly HWCRPreventionActionService: HWCRPreventionActionService) {}

  @Query("HWCRPreventionActions")
  @Roles(Role.COS_OFFICER)
  find(@Args("actionTypeCode") actionTypeCode?: string) {
    return this.HWCRPreventionActionService.find(actionTypeCode);
  }
}
