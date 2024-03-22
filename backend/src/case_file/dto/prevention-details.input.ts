import { PreventionActionInput } from "./prevention-action.input"

export class PreventionDetailsInput {
    actionNotRequired: boolean
    actionJustificationCode: string
    actions: [PreventionActionInput]
}
