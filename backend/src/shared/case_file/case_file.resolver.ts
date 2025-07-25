import { Logger, UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "../../auth/jwtrole.guard";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Roles } from "../../auth/decorators/roles.decorator";
import { coreRoles } from "../../enum/role.enum";
import { GraphQLError } from "graphql";
import { CaseFileService } from "./case_file.service";

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
}
