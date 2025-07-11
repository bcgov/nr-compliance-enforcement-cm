import { Resolver, Query } from "@nestjs/graphql";
import { AgencyCodeService } from "./agency_code.service";
import { JwtRoleGuard } from "../../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { coreRoles } from "../../enum/role.enum";
import { Roles } from "../../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver("AgencyMomsSpaghettiCode")
export class AgencyCodeResolver {
  constructor(private readonly agencyCodeService: AgencyCodeService) {}

  @Query("agencyMomsSpaghettiCodes")
  @Roles(coreRoles)
  findAll() {
    return this.agencyCodeService.findAll();
  }
}
