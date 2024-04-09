import { Resolver, Query, Args } from '@nestjs/graphql';
import { ActionCodeService } from './action_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards (JwtRoleGuard)
@Resolver('ActionCode')
export class ActionCodeResolver {
  constructor(private readonly actionCodeService: ActionCodeService) {}

  @Query('getAllActionCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.actionCodeService.findAll();
  }

  @Query('getActionCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('action_code') action_code: string) {
    return this.actionCodeService.findOne(action_code);
  }

  @Query('getActionCodesByType')
  @Roles(Role.COS_OFFICER)
  findAllByCode(@Args('action_type_code') action_type_code: string) {
    return this.actionCodeService.findAllCodesByType(action_type_code);
  }

}
