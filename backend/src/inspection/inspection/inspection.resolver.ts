import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { InspectionService } from "./inspection.service";
import { Logger } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { coreRoles } from "../../enum/role.enum";
import { Roles } from "../../auth/decorators/roles.decorator";
import { InspectionFilters } from "./dto/inspection";

@Resolver("Inspection")
export class InspectionResolver {
  constructor(private readonly inspectionService: InspectionService) {}
  private readonly logger = new Logger(InspectionResolver.name);

  @Query("getInspection")
  @Roles(coreRoles)
  async findOne(@Args("inspectionGuid") inspectionGuid: string) {
    try {
      return await this.inspectionService.findOne(inspectionGuid);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error fetching data from inspection schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }

  @Query("getInspections")
  @Roles(coreRoles)
  async findMany(@Args("ids", { type: () => [String] }) ids: string[]) {
    try {
      return await this.inspectionService.findMany(ids);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error fetching inspections by IDs from inspection schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }

  @Query("searchInspections")
  @Roles(coreRoles)
  async search(
    @Args("page", { type: () => Int, nullable: true, defaultValue: 1 }) page: number,
    @Args("pageSize", { type: () => Int, nullable: true, defaultValue: 25 }) pageSize: number,
    @Args("filters", { nullable: true }) filters?: InspectionFilters,
  ) {
    try {
      return await this.inspectionService.search(page, pageSize, filters);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error searching paginated inspection data from Shared schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }
}
