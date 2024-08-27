import { Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "src/auth/jwtrole.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/enum/role.enum";
import { RationalCodeService } from "./rational_code.service";

@UseGuards(JwtRoleGuard)
@Resolver("RationalCode")
export class RationalCodeResolver {
  constructor(private readonly service: RationalCodeService) {}

  @Query("rationalCodes")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  findAll() {
    return this.service.findAll();
  }
}
