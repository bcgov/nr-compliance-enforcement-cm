import { Injectable } from "@nestjs/common";
import { Person } from "./entities/person.entity";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";

@Injectable()
export class PersonService {
  constructor(private readonly prisma: SharedPrismaService) {}

  async findAll() {
    const prismaPeople = await this.prisma.person.findMany({
      select: {
        person_guid: true,
        first_name: true,
        middle_name: true,
        middle_name_2: true,
        last_name: true,
        contact_method: {
          select: {
            contact_value: true,
            contact_method_type_code: true,
            contact_method_type_code_contact_method_contact_method_type_codeTocontact_method_type_code: {
              select: {
                short_description: true,
                long_description: true,
              },
            },
          },
        },
      },
    });

    const people: Person[] = prismaPeople.map((person) => ({
      personGuid: person.person_guid,
      firstName: person.first_name,
      middleName: person.middle_name,
      middleName2: person.middle_name_2,
      lastName: person.last_name,
      contactMethods: person.contact_method?.map((contact) => {
        const contactType =
          contact.contact_method_type_code_contact_method_contact_method_type_codeTocontact_method_type_code;

        return {
          typeCode: contact.contact_method_type_code,
          typeShortDescription: contactType.short_description,
          typeDescription: contactType.long_description,
          value: contact.contact_value,
        };
      }),
    }));

    return people;
  }

  async findOne(id: string) {
    const prismaPerson = await this.prisma.person.findUnique({
      where: {
        person_guid: id,
      },
      include: {
        contact_method: {
          include: {
            contact_method_type_code_contact_method_contact_method_type_codeTocontact_method_type_code: true,
          },
        },
      },
    });

    const person: Person = {
      personGuid: prismaPerson.person_guid,
      firstName: prismaPerson.first_name,
      middleName: prismaPerson.middle_name,
      middleName2: prismaPerson.middle_name_2,
      lastName: prismaPerson.last_name,
      contactMethods: prismaPerson.contact_method?.map((contact) => {
        const contactType =
          contact.contact_method_type_code_contact_method_contact_method_type_codeTocontact_method_type_code;

        return {
          typeCode: contact.contact_method_type_code,
          typeShortDescription: contactType.short_description,
          typeDescription: contactType.long_description,
          value: contact.contact_value,
        };
      }),
    };

    return person;
  }
}
