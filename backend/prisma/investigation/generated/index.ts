import { investigation as _investigation } from "./investigation";
import { investigation_h as _investigation_h } from "./investigation_h";
import { investigation_status_code as _investigation_status_code } from "./investigation_status_code";
import { investigation_status_code_h as _investigation_status_code_h } from "./investigation_status_code_h";

export namespace PrismaModel {
  export class investigation extends _investigation {}
  export class investigation_h extends _investigation_h {}
  export class investigation_status_code extends _investigation_status_code {}
  export class investigation_status_code_h extends _investigation_status_code_h {}

  export const extraModels = [investigation, investigation_h, investigation_status_code, investigation_status_code_h];
}
