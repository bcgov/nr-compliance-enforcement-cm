import { Resolver, Query, Args } from '@nestjs/graphql';
import { DrugMethodCodeService } from './drug_method_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@Resolver('DrugMethodCode')
@UseGuards(JwtRoleGuard)
export class DrugMethodCodeResolver {
  constructor(private readonly drugMethodCodeService: DrugMethodCodeService) {}

  @Query('getAllActiveDrugMethodCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.drugMethodCodeService.findAll();
  }

  @Query('getDrugMethodCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('drug_method_code') drug_method_code: string) {
    return this.drugMethodCodeService.findOne(drug_method_code);
  }
}
