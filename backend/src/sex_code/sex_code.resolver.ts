import { Resolver, Query, Args } from "@nestjs/graphql";
import { SexCodeService } from "./sex_code.service";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver("SexCode")
export class SexCodeResolver {
  constructor(private readonly sexCodeService: SexCodeService) {}

  @Query("sexCodes")
  @Roles(Role.COS_OFFICER, Role.CEEB)
  findAll() {
    return this.sexCodeService.findAll();
  }
}
