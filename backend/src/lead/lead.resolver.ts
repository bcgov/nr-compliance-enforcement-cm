import { Resolver, Query, Args } from "@nestjs/graphql";
import { LeadService } from "./lead.service";
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver("Lead")
export class LeadResolver {
  constructor(private readonly leadService: LeadService) {}

  @Query("getLeadsByActionTaken")
  @Roles(Role.CEEB)
  findOne(@Args("actionCode") actionCode: string) {
    return this.leadService.getLeadsByActionTaken(actionCode);
  }
}
