import { Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "src/auth/jwtrole.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/enum/role.enum";
import { CaseLocationCodeService } from "./case_location_code.service";

@UseGuards(JwtRoleGuard)
@Resolver("CaseLocationCode")
export class CaseLocationCodeResolver {
  constructor(private readonly service: CaseLocationCodeService) {}

  @Query("caseLocationCodes")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  findAll() {
    return this.service.findAll();
  }
}
