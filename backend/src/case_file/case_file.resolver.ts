import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CaseFileService } from "./case_file.service";
import { CreateAssessmentInput, CreateEquipmentInput, CreatePreventionInput } from "./dto/create-case_file.input";
import { UpdateAssessmentInput, UpdateEquipmentInput, UpdatePreventionInput } from "./dto/update-case_file.input";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { ReviewInput } from "./dto/review-input";
import { CreateSupplementalNoteInput } from "./dto/supplemental-note/create-supplemental-note.input";
import { UpdateSupplementalNoteInput } from "./dto/supplemental-note/update-supplemental-note.input";
import { DeleteSupplementalNoteInput } from "./dto/supplemental-note/delete-supplemental-note.input";
import { DeleteEquipmentInput } from "./dto/equipment/delete-equipment.input";
import { CreateWildlifeInput } from "./dto/wildlife/create-wildlife-input";
import { DeleteWildlifeInput } from "./dto/wildlife/delete-wildlife-input";
import { UpdateWildlifeInput } from "./dto/wildlife/update-wildlife-input";
import { CreateDecisionInput } from "./dto/ceeb/decision/create-decsion-input";
import { UpdateDecisionInput } from "./dto/ceeb/decision/update-decsion-input";
import { CreateAuthorizationOutcomeInput } from "./dto/ceeb/authorization-outcome/create-authorization-outcome-input";
import { UpdateAuthorizationOutcomeInput } from "./dto/ceeb/authorization-outcome/update-authorization-outcome-input";
import { DeleteAuthorizationOutcomeInput } from "./dto/ceeb/authorization-outcome/delete-authorization-outcome-input";

@UseGuards(JwtRoleGuard)
@Resolver("CaseFile")
export class CaseFileResolver {
  constructor(private readonly caseFileService: CaseFileService) {}

  @Mutation("createAssessment")
  @Roles(Role.COS_OFFICER)
  createAssessment(@Args("createAssessmentInput") createAssessmentInput: CreateAssessmentInput) {
    return this.caseFileService.createAssessment(createAssessmentInput);
  }

  @Mutation("createPrevention")
  @Roles(Role.COS_OFFICER)
  createPrevention(@Args("createPreventionInput") createPreventionInput: CreatePreventionInput) {
    return this.caseFileService.createPrevention(createPreventionInput);
  }

  @Mutation("createReview")
  @Roles(Role.COS_OFFICER)
  createReview(@Args("reviewInput") reviewInput: ReviewInput) {
    return this.caseFileService.createReview(reviewInput);
  }

  @Query("getCaseFile")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  findOne(@Args("caseIdentifier") caseIdentifier: string) {
    return this.caseFileService.findOne(caseIdentifier);
  }

  @Query("getCaseFileByLeadId")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  findOneByLeadId(@Args("leadIdentifier") leadIdentifier: string) {
    return this.caseFileService.findOneByLeadId(leadIdentifier);
  }

  @Mutation("updateAssessment")
  @Roles(Role.COS_OFFICER)
  updateAssessment(@Args("updateAssessmentInput") updateAssessmentInput: UpdateAssessmentInput) {
    return this.caseFileService.updateAssessment(updateAssessmentInput.caseIdentifier, updateAssessmentInput);
  }

  @Mutation("updatePrevention")
  @Roles(Role.COS_OFFICER)
  updatePrevention(@Args("updatePreventionInput") updatePreventionInput: UpdatePreventionInput) {
    return this.caseFileService.updatePrevention(updatePreventionInput.caseIdentifier, updatePreventionInput);
  }

  @Mutation("createEquipment")
  @Roles(Role.COS_OFFICER)
  createEquipment(@Args("createEquipmentInput") createEquipmentInput: CreateEquipmentInput) {
    return this.caseFileService.createEquipment(createEquipmentInput);
  }

  @Mutation("updateEquipment")
  @Roles(Role.COS_OFFICER)
  updateEquipment(@Args("updateEquipmentInput") updateEquipmentInput: UpdateEquipmentInput) {
    return this.caseFileService.updateEquipment(updateEquipmentInput);
  }

  @Mutation("deleteEquipment")
  @Roles(Role.COS_OFFICER)
  deleteEquipment(@Args("deleteEquipmentInput") deleteEquipmentInput: DeleteEquipmentInput) {
    return this.caseFileService.deleteEquipment(deleteEquipmentInput);
  }

  @Mutation("updateReview")
  @Roles(Role.COS_OFFICER)
  updateReview(@Args("reviewInput") reviewInput: ReviewInput) {
    return this.caseFileService.updateReview(reviewInput);
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

  @Mutation("deleteNote")
  @Roles(Role.COS_OFFICER)
  deleteNote(@Args("input") input: DeleteSupplementalNoteInput) {
    return this.caseFileService.deleteNote(input);
  }

  @Mutation("createWildlife")
  @Roles(Role.COS_OFFICER)
  createWildlife(@Args("input") input: CreateWildlifeInput) {
    return this.caseFileService.createWildlife(input);
  }

  @Mutation("updateWildlife")
  @Roles(Role.COS_OFFICER)
  updateWildlife(@Args("input") input: UpdateWildlifeInput) {
    return this.caseFileService.updateWildlife(input);
  }

  @Mutation("deleteWildlife")
  @Roles(Role.COS_OFFICER)
  deleteWildlife(@Args("input") input: DeleteWildlifeInput) {
    return this.caseFileService.deleteWildlife(input);
  }

  @Mutation("createDecision")
  @Roles(Role.CEEB)
  createDecision(@Args("input") input: CreateDecisionInput) {
    return this.caseFileService.createDecision(input);
  }

  @Mutation("updateDecision")
  @Roles(Role.CEEB)
  updateDecision(@Args("input") input: UpdateDecisionInput) {
    return this.caseFileService.updateDecision(input);
  }

  @Mutation("createAuthorizationOutcome")
  @Roles(Role.CEEB)
  createAuthorizationOutcome(@Args("input") input: CreateAuthorizationOutcomeInput) {
    return this.caseFileService.createAuthorizationOutcome(input);
  }

  @Mutation("updateAuthorizationOutcome")
  @Roles(Role.CEEB)
  updateAuthorizationOutcome(@Args("input") input: UpdateAuthorizationOutcomeInput) {
    return this.caseFileService.updateAuthorizationOutcome(input);
  }

  @Mutation("deleteAuthorizationOutcome")
  @Roles(Role.CEEB)
  deleteAuthorizationOutcome(@Args("input") input: DeleteAuthorizationOutcomeInput) {
    return this.caseFileService.deleteAuthorizationOutcome(input);
  }
}
