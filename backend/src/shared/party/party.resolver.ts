import { Logger, UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "../../auth/jwtrole.guard";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Roles } from "../../auth/decorators/roles.decorator";
import { coreRoles } from "../../enum/role.enum";
import { GraphQLError } from "graphql";
import { PartyService } from "./party.service";

@UseGuards(JwtRoleGuard)
@Resolver("Party")
export class PartyResolver {
  constructor(private readonly partyService: PartyService) {}
  private readonly logger = new Logger(PartyResolver.name);

  @Query("party")
  @Roles(coreRoles)
  async findOne(@Args("partyIdentifier") id: string) {
    try {
      return await this.partyService.findOne(id);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error fetching data from Shared schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }
}
