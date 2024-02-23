import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ActionTypeActionXrefService } from './action_type_action_xref.service';

@Resolver('ActionTypeActionXref')
export class ActionTypeActionXrefResolver {
  constructor(private readonly actionTypeActionXrefService: ActionTypeActionXrefService) {}

  @Query('getActionTypeActionXrefs')
  find(@Args('action_type_code') action_type_code ?: string) {
    return this.actionTypeActionXrefService.find(action_type_code);
  }


}
