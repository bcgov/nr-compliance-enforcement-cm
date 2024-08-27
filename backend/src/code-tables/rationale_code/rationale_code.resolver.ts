import { Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "src/auth/jwtrole.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/enum/role.enum";
import { RationaleCodeService } from "./rationale_code.service";

@UseGuards(JwtRoleGuard)
@Resolver("RationaleCode")
export class RationaleCodeResolver {
  constructor(private readonly service: RationaleCodeService) {}

  @Query("rationaleCodes")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  findAll() {
    return this.service.findAll();
  }
}
