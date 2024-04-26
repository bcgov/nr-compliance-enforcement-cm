import { Resolver, Query, Args } from "@nestjs/graphql";
import { EquipmentCodeService } from "./equipment_code.service";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { JwtAuthGuard } from "../auth/jwtauth.guard";

@UseGuards(JwtAuthGuard, JwtRoleGuard)
@Resolver("EquipmentCode")
export class EquipmentCodeResolver {
  constructor(private readonly equipmentCodeService: EquipmentCodeService) {}

  @Query("equipmentCodes")
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.equipmentCodeService.findAll();
  }
}
