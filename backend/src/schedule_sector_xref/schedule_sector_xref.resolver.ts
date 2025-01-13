import { Resolver, Query, Args } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { JwtRoleGuard } from "src/auth/jwtrole.guard";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/enum/role.enum";
import { ScheduleSectorXrefService } from "./schedule_sector_xref.service";
import { JwtAuthGuard } from "src/auth/jwtauth.guard";

@UseGuards(JwtAuthGuard, JwtRoleGuard)
@Resolver("ScheduleSectorXref")
export class ScheduleSectorXrefResolver {
  constructor(private readonly service: ScheduleSectorXrefService) {}

  @Query("scheduleSectorXrefs")
  @Roles(Role.CEEB, Role.COS)
  findAll() {
    return this.service.findAll();
  }
}
