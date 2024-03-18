import { AssessmentAction } from "./assessment-action.entity";

export class Assessment {
    actionNotRequired: boolean;
    actionJustificationCode: string;
    actionJustificationShortDescription: string;
    actionJustificationLongDescription: string;
    actionJustificationActiveIndicator: boolean;
    actions: AssessmentAction[]

}