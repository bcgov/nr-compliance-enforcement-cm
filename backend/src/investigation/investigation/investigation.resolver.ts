import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { InvestigationService } from "./investigation.service";
import { Logger } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { coreRoles } from "../../enum/role.enum";
import { Roles } from "../../auth/decorators/roles.decorator";
import { CreateInvestigationInput } from "src/investigation/investigation/dto/investigation";

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

  @Mutation("createInvestigation")
  @Roles(coreRoles)
  async create(@Args("input") input: CreateInvestigationInput) {
    try {
      return await this.investigationService.create(input);
    } catch (error) {
      this.logger.error("Create investigation error:", error);
      throw new GraphQLError("Error creating investigation", {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  }
}
