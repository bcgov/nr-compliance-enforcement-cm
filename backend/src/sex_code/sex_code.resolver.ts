import { Resolver, Query, Args } from '@nestjs/graphql';
import { SexCodeService } from './sex_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('SexCode')
export class SexCodeResolver {
  constructor(private readonly sexCodeService: SexCodeService) {}

  @Query('getAllSexCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.sexCodeService.findAll();
  }

  @Query('getSexCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('sex_code') sex_code: string) {
    return this.sexCodeService.findOne(sex_code);
  }

}
