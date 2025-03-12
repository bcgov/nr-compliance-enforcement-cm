import { ContactMethod } from "../../contact_method/entities/contact_method.entity";

export class Person {
  personGuid: string;
  firstName: string;
  middleName?: string;
  middleName2?: string;
  lastName: string;
  contactMethods?: ContactMethod[];
}
