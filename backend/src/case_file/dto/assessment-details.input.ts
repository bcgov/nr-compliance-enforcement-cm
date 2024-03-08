import { AssessmentActionInput } from "./assessment-action.input";
export class AssessmentDetailsInput {
    action_not_required_ind: boolean
    inaction_reason_code: string
    assessment_actions: [AssessmentActionInput]
}
