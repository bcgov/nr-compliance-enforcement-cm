import { AssessmentAction } from "./assessment-action.entity";

export class AssessmentDetails {
    action_not_required_ind: boolean;
    inaction_reason_code: string;
    short_description: string;
    long_description: string;
    active_ind: boolean;
    assessment_actions: AssessmentAction[]

}