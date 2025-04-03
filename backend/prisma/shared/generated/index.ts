import { contact_method as _contact_method } from "./contact_method";
import { contact_method_h as _contact_method_h } from "./contact_method_h";
import { contact_method_type_code as _contact_method_type_code } from "./contact_method_type_code";
import { person as _person } from "./person";
import { person_h as _person_h } from "./person_h";

export namespace PrismaModel {
  export class contact_method extends _contact_method {}
  export class contact_method_h extends _contact_method_h {}
  export class contact_method_type_code extends _contact_method_type_code {}
  export class person extends _person {}
  export class person_h extends _person_h {}

  export const extraModels = [contact_method, contact_method_h, contact_method_type_code, person, person_h];
}
