import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HWCRAssessmentActionService } from './hwcr_assessment_action.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('HWCRAssessmentAction')
export class HWCRAssessmentActionResolver {
  constructor(private readonly HWCRAssessmentActionService: HWCRAssessmentActionService) { }

  @Query('HWCRAssessmentActions')
  @Roles(Role.COS_OFFICER)
  find(@Args('actionTypeCode') actionTypeCode?: string) {
    return this.HWCRAssessmentActionService.find(actionTypeCode);
  }

}
