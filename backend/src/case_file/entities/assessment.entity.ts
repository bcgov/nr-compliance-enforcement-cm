import { Action } from "./case-action.entity";

export class Assessment {
    actionNotRequired: boolean;
    actionJustificationCode: string;
    actionJustificationShortDescription: string;
    actionJustificationLongDescription: string;
    actionJustificationActiveIndicator: boolean;
    actions: Action[]

}