import { contact_method as _contact_method } from "./contact_method";
import { contact_method_h as _contact_method_h } from "./contact_method_h";
import { contact_method_type_code as _contact_method_type_code } from "./contact_method_type_code";
import { person as _person } from "./person";
import { person_h as _person_h } from "./person_h";
import { park as _park } from "./park";
import { temp_poc as _temp_poc } from "./temp_poc";

export namespace PrismaModel {
  export class contact_method extends _contact_method {}
  export class contact_method_h extends _contact_method_h {}
  export class contact_method_type_code extends _contact_method_type_code {}
  export class person extends _person {}
  export class person_h extends _person_h {}
  export class park extends _park {}
  export class temp_poc extends _temp_poc {}

  export const extraModels = [
    contact_method,
    contact_method_h,
    contact_method_type_code,
    person,
    person_h,
    park,
    temp_poc,
  ];
}
