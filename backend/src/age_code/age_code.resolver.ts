import { Resolver, Query, Args } from '@nestjs/graphql';
import { AgeCodeService } from './age_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('AgeCode')
export class AgeCodeResolver {
  constructor(private readonly ageCodeService: AgeCodeService) {}

  @Query('getAllAgeCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.ageCodeService.findAll();
  }

  @Query('getAgeCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('age_code') age_code: string) {
    return this.ageCodeService.findOne(age_code);
  }

}
