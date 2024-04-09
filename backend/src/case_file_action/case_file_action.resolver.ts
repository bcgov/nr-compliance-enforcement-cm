import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CaseFileActionService } from './case_file_action.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('CaseFileAction')
export class CaseFileActionResolver {
  constructor(private readonly CaseFileActionService: CaseFileActionService) { }

  @Query('FindCaseFileAction')
  @Roles(Role.COS_OFFICER)
  find(@Args('actionId') actionId?: string) {
    return this.CaseFileActionService.findActionById(actionId);
  }

  @Query('FindCaseFileActionsByCaseFile')
  @Roles(Role.COS_OFFICER)
  findAllByCaseFile(@Args('caseId') caseId?: string) {
    return this.CaseFileActionService.findActionsByCaseId(caseId);
  }

}
