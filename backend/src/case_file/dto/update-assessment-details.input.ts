import { UpdateAssessmentActionInput } from "./update-assessment-action.input";
export class UpdateAssessmentDetailsInput {
    action_not_required_ind: boolean
    inaction_reason_code: string
    assessment_actions: [UpdateAssessmentActionInput]
}
