import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { InvestigationService } from "./investigation.service";
import { Logger } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { coreRoles } from "../../enum/role.enum";
import { Roles } from "../../auth/decorators/roles.decorator";

@Resolver("Investigation")
export class InvestigationResolver {
  constructor(private readonly investigationService: InvestigationService) {}
  private readonly logger = new Logger(InvestigationResolver.name);

  @Query("getInvestigation")
  @Roles(coreRoles)
  async findOne(@Args("investigationGuid") investigationGuid: string) {
    try {
      return await this.investigationService.findOne(investigationGuid);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error fetching data from investigation schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }

  @Query("getInvestigations")
  @Roles(coreRoles)
  async findMany(@Args("ids", { type: () => [String] }) ids: string[]) {
    try {
      return await this.investigationService.findMany(ids);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error fetching investigations by IDs from investigation schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }
}
