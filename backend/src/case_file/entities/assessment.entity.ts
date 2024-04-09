import { CaseFileAction } from "../../case_file_action/entities/case_file_action.entity";

export class Assessment {
    actionNotRequired: boolean;
    actionJustificationCode: string;
    actionJustificationShortDescription: string;
    actionJustificationLongDescription: string;
    actionJustificationActiveIndicator: boolean;
    actions: CaseFileAction[]

}