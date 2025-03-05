import { Resolver, Query, Args } from "@nestjs/graphql";
import { AgencyCodeService } from "./agency_code.service";
import { JwtRoleGuard } from "../../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../../enum/role.enum";
import { Roles } from "../../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver("AgencyCode")
export class AgencyCodeResolver {
  constructor(private readonly agencyCodeService: AgencyCodeService) {}

  @Query("agencyCodes")
  @Roles(Role.COS, Role.CEEB)
  findAll() {
    return this.agencyCodeService.findAll();
  }
}
