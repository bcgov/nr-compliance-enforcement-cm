
import { Resolver, Query, } from '@nestjs/graphql';
import { ActionCodeService } from '../action_code/action_code.service';
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { ACTION_TYPE_CODES } from '../common/action_type_codes';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtauth.guard';
import { JwtRoleGuard } from '../auth/jwtrole.guard';

@UseGuards(JwtAuthGuard, JwtRoleGuard)
@Resolver("EquipmentCode")
export class EquipmentCodeResolver {
  constructor(private readonly actionCodeService: ActionCodeService) {}

  @Query("equipmentCodes")
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.actionCodeService.findAllCodesByType(ACTION_TYPE_CODES.EQUIPMENT);
  }
}
