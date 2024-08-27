import { Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "src/auth/jwtrole.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/enum/role.enum";
import { NonComplianceCodeService } from "./non_compliance_code.service";

@UseGuards(JwtRoleGuard)
@Resolver("NonComplianceCode")
export class NonComplianceCodeResolver {
  constructor(private readonly service: NonComplianceCodeService) {}

  @Query("nonComplianceCodes")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  findAll() {
    return this.service.findAll();
  }
}
