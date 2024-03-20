import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CaseFileService } from './case_file.service';
import { CreateCaseFileInput } from './dto/create-case_file.input';
import { UpdateCaseFileInput } from './dto/update-case_file.input';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('CaseFile')
export class CaseFileResolver {
  constructor(private readonly caseFileService: CaseFileService) { }

  @Mutation('createCaseFile')
  @Roles(Role.COS_OFFICER)
  create(@Args('createCaseFileInput') createCaseFileInput: CreateCaseFileInput) {
    return this.caseFileService.create(createCaseFileInput);
  }

  @Query('getCaseFile')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('caseIdentifier') caseIdentifier: string) {
    return this.caseFileService.findOne(caseIdentifier);
  }

  @Query('getCaseFileByLeadId')
  @Roles(Role.COS_OFFICER)
  findOneByLeadId(@Args('leadIdentifier') leadIdentifier: string) {
    return this.caseFileService.findOneByLeadId(leadIdentifier);
  }

  @Mutation('updateCaseFile')
  @Roles(Role.COS_OFFICER)
  update(@Args('updateCaseFileInput') updateCaseFileInput: UpdateCaseFileInput) {
    return this.caseFileService.update(updateCaseFileInput.caseIdentifier, updateCaseFileInput);
  }

}
