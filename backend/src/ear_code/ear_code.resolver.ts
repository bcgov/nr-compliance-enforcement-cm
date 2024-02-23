import { Resolver, Query, Args } from '@nestjs/graphql';
import { EarCodeService } from './ear_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('EarCode')
export class EarCodeResolver {
  constructor(private readonly earCodeService: EarCodeService) {}

  @Query('getAllEarCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.earCodeService.findAll();
  }

  @Query('getEarCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('ear_code') ear_code: string) {
    return this.earCodeService.findOne(ear_code);
  }

}
