import { Resolver, Query } from "@nestjs/graphql";
import { TempPocService } from "./temp_poc.service";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { coreRoles } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { GraphQLError } from "graphql";

@UseGuards(JwtRoleGuard)
@Resolver("TempPoc")
export class TempPocResolver {
  constructor(private readonly tempPocService: TempPocService) {}

  @Query("getPocNameList")
  @Roles(coreRoles)
  async findAll() {
    try {
      return await this.tempPocService.findAll();
    } catch (error) {
      throw new GraphQLError("Error fetching data from Investigation schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }
}
