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
  findOne(@Args('case_guid') case_guid: string) {
    return this.caseFileService.findOne(case_guid);
  }

  @Mutation('updateCaseFile')
  @Roles(Role.COS_OFFICER)
  update(@Args('updateCaseFileInput') updateCaseFileInput: UpdateCaseFileInput) {
    return this.caseFileService.update(updateCaseFileInput.case_file_guid, updateCaseFileInput);
  }

  @Mutation('removeCaseFile')
  @Roles(Role.COS_OFFICER)
  remove(@Args('id') id: number) {
    return this.caseFileService.remove(id);
  }
}
