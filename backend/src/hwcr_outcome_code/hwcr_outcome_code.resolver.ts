import { Resolver, Query, Args } from '@nestjs/graphql';
import { HwcrOutcomeCodeService } from './hwcr_outcome_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('HwcrOutcomeCode')
export class HwcrOutcomeCodeResolver {
  constructor(private readonly hwcrOutcomeCodeService: HwcrOutcomeCodeService) {}

  @Query('getAllActiveHWCROutcomeCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.hwcrOutcomeCodeService.findAll();
  }

  @Query('getHWCROutcomeCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('hwcr_outcome_code') hwcr_outcome_code: string) {
    return this.hwcrOutcomeCodeService.findOne(hwcr_outcome_code);
  }
}
