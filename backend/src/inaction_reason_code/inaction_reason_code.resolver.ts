import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InactionReasonCodeService } from './inaction_reason_code.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('InactionReasonCode')
export class InactionReasonCodeResolver {
  constructor(private readonly inactionReasonCodeService: InactionReasonCodeService) {}
  

  @Query('getInactionReasonCodes')
  @Roles(Role.COS_OFFICER)
  find(@Args('agency_code') agency_code?: string) {
    return this.inactionReasonCodeService.find(agency_code);
  }
  
  
}
