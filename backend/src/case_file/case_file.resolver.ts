import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CaseFileService } from './case_file.service';
import { CreateAssessmentInput } from './dto/create-case_file.input';
import { UpdateAssessmentInput } from './dto/update-case_file.input';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('CaseFile')
export class CaseFileResolver {
  constructor(private readonly caseFileService: CaseFileService) { }

  @Mutation('createAssessment')
  @Roles(Role.COS_OFFICER)
  create(@Args('createAssessmentInput') createAssessmentInput: CreateAssessmentInput) {
    return this.caseFileService.create(createAssessmentInput);
  }

  @Query('getCaseFile')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('case_guid') case_guid: string) {
    return this.caseFileService.findOne(case_guid);
  }

  @Query('getCaseFileByLeadId')
  @Roles(Role.COS_OFFICER)
  findOneByLeadId(@Args('lead_identifier') lead_identifier: string) {
    return this.caseFileService.findOneByLeadId(lead_identifier);
  }

  @Mutation('updateAssessment')
  @Roles(Role.COS_OFFICER)
  update(@Args('updateAssessmentInput') updateAssessmentInput: UpdateAssessmentInput) {
    return this.caseFileService.update(updateAssessmentInput.case_file_guid, updateAssessmentInput);
  }

  @Mutation('removeCaseFile')
  @Roles(Role.COS_OFFICER)
  remove(@Args('id') id: number) {
    return this.caseFileService.remove(id);
  }
}
