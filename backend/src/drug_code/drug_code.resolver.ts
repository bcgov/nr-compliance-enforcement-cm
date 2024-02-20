import { Resolver, Query, Args } from '@nestjs/graphql';
import { DrugCodeService } from './drug_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@Resolver('DrugCode')
@UseGuards(JwtRoleGuard)
export class DrugCodeResolver {
  constructor(private readonly drugCodeService: DrugCodeService) {}

  @Query('getAllActiveDrugCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.drugCodeService.findAll();
  }

  @Query('getDrugCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('drug_code') drug_code: string) {
    return this.drugCodeService.findOne(drug_code);
  }

}
