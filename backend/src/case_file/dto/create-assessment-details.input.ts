import { CreateAssessmentActionInput } from "./create-assessment-action.input";
export class CreateAssessmentDetailsInput {
    action_not_required_ind: boolean
    inaction_reason_code: string
    assessment_actions: [CreateAssessmentActionInput]
}
