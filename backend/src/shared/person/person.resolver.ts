import { Resolver, Query, Args } from "@nestjs/graphql";
import { PersonService } from "./person.service";
import { JwtRoleGuard } from "../../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { coreRoles } from "../../enum/role.enum";
import { Roles } from "../../auth/decorators/roles.decorator";
import { GraphQLError } from "graphql";

@UseGuards(JwtRoleGuard)
@Resolver("Person")
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query("people")
  @Roles(coreRoles)
  async findAll() {
    try {
      return await this.personService.findAll();
    } catch (error) {
      throw new GraphQLError("Error fetching data from Shared schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }

  @Query("person")
  @Roles(coreRoles)
  async findOne(@Args("personGuid") id: string) {
    try {
      return await this.personService.findOne(id);
    } catch (error) {
      throw new GraphQLError("Error fetching data from Shared schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }
}
