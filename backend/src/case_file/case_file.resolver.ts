import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CaseFileService } from './case_file.service';
import { CreateAssessmentInput, CreateEquipmentInput, CreatePreventionInput } from './dto/create-case_file.input';
import { UpdateAssessmentInput, UpdatePreventionInput } from './dto/update-case_file.input';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { CreateSupplementalNoteInput } from './dto/supplemental-note/create-supplemental-note.input';
import { UpdateSupplementalNoteInput } from './dto/supplemental-note/update-supplemental-note.input';

@UseGuards(JwtRoleGuard)
@Resolver('CaseFile')
export class CaseFileResolver {
  constructor(private readonly caseFileService: CaseFileService) { }

  @Mutation('createAssessment')
  @Roles(Role.COS_OFFICER)
  createAssessment(@Args('createAssessmentInput') createAssessmentInput: CreateAssessmentInput) {
    return this.caseFileService.createAssessment(createAssessmentInput);
  }

  @Mutation('createPrevention')
  @Roles(Role.COS_OFFICER)
  createPrevention(@Args('createPreventionInput') createPreventionInput: CreatePreventionInput) {
    return this.caseFileService.createPrevention(createPreventionInput);
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

  @Mutation('updateAssessment')
  @Roles(Role.COS_OFFICER)
  updateAssessment(@Args('updateAssessmentInput') updateAssessmentInput: UpdateAssessmentInput) {
    return this.caseFileService.updateAssessment(updateAssessmentInput.caseIdentifier, updateAssessmentInput);
  }

  @Mutation('updatePrevention')
  @Roles(Role.COS_OFFICER)
  updatePrevention(@Args('updatePreventionInput') updatePreventionInput: UpdatePreventionInput) {
    return this.caseFileService.updatePrevention(updatePreventionInput.caseIdentifier, updatePreventionInput);
  }

  @Mutation('createEquipment')
  @Roles(Role.COS_OFFICER)
  createEquipment(@Args('createEquipmentInput') createEquipmentInput: CreateEquipmentInput) {
    return this.caseFileService.createEquipment(createEquipmentInput);
  }

  @Mutation("createNote")
  @Roles(Role.COS_OFFICER)
  createNote(@Args("input") input: CreateSupplementalNoteInput) {
    return this.caseFileService.createNote(input);
  }

  @Mutation("updateNote")
  @Roles(Role.COS_OFFICER)
  updateNote(@Args("input") input: UpdateSupplementalNoteInput) {
    return this.caseFileService.updateNote(input);
  }
}
