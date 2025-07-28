import { Logger, UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "../../auth/jwtrole.guard";
import { Args, Query, Resolver, Int } from "@nestjs/graphql";
import { Roles } from "../../auth/decorators/roles.decorator";
import { coreRoles } from "../../enum/role.enum";
import { GraphQLError } from "graphql";
import { CaseFileService } from "./case_file.service";
import { CaseMomsSpaghettiFileFilters } from "./dto/case_file";

@UseGuards(JwtRoleGuard)
@Resolver("CaseMomsSpaghettiFile")
export class CaseFileResolver {
  constructor(private readonly caseFileService: CaseFileService) {}
  private readonly logger = new Logger(CaseFileResolver.name);

  @Query("caseMomsSpaghettiFile")
  @Roles(coreRoles)
  async findOne(@Args("caseFileGuid") id: string) {
    try {
      return await this.caseFileService.findOne(id);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error fetching data from Shared schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }

  @Query("caseMomsSpaghettiFiles")
  @Roles(coreRoles)
  async findMany(@Args("ids", { type: () => [String] }) ids: string[]) {
    try {
      return await this.caseFileService.findMany(ids);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error fetching case files by IDs from Shared schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }

  @Query("searchCaseMomsSpaghettiFiles")
  @Roles(coreRoles)
  async search(
    @Args("page", { type: () => Int, nullable: true, defaultValue: 1 }) page: number,
    @Args("pageSize", { type: () => Int, nullable: true, defaultValue: 25 }) pageSize: number,
    @Args("filters", { nullable: true }) filters?: CaseMomsSpaghettiFileFilters,
  ) {
    try {
      return await this.caseFileService.search(page, pageSize, filters);
    } catch (error) {
      this.logger.error(error);
      throw new GraphQLError("Error searching paginated data from Shared schema", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
  }
}
