import { Resolver, Query, Args } from '@nestjs/graphql';
import { ThreatLevelCodeService } from './threat_level_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('ThreatLevelCode')
export class ThreatLevelCodeResolver {
  constructor(private readonly threatLevelCodeService: ThreatLevelCodeService) {}

  @Query('getAllThreatLevelCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.threatLevelCodeService.findAll();
  }

  @Query('getThreatLevelCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('threat_level_code') threat_level_code: string) {
    return this.threatLevelCodeService.findOne(threat_level_code);
  }
}
