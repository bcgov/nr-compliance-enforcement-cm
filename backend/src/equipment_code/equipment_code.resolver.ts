import { Resolver, Query, Args } from '@nestjs/graphql';
import { EquipmentCodeService } from './equipment_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('EquipmentCode')
export class EquipmentCodeResolver {
  constructor(private readonly equipmentCodeService: EquipmentCodeService) {}

  @Query('getAllEquipmentCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.equipmentCodeService.findAll();
  }

  @Query('getEquipmentCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('equipment_code') equipment_code: string) {
    return this.equipmentCodeService.findOne(equipment_code);
  }

}
