import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ActionTypeActionXrefService } from './action_type_action_xref.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('ActionTypeActionXref')
export class ActionTypeActionXrefResolver {
  constructor(private readonly actionTypeActionXrefService: ActionTypeActionXrefService) {}

  @Query('getActionTypeActionXrefs')
  @Roles(Role.COS_OFFICER)
  find(@Args('action_type_code') action_type_code ?: string) {
    return this.actionTypeActionXrefService.find(action_type_code);
  }


}
