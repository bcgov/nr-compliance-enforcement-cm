import { Injectable } from "@nestjs/common";
import { Person } from "./dto/person";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { person } from "prisma/shared/generated/person";

@Injectable()
export class PersonService {
  constructor(
    private readonly prisma: SharedPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

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

    return this.mapper.mapArray<person, Person>(prismaPeople as Array<person>, "person", "Person");
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

    try {
      return this.mapper.map<person, Person>(prismaPerson as person, "person", "Person");
    } catch (error) {
      console.log(error);
    }
  }
}
