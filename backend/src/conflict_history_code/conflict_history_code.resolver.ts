import { Resolver, Query, Args } from '@nestjs/graphql';
import { ConflictHistoryCodeService } from './conflict_history_code.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards (JwtRoleGuard)
@Resolver('ConflictHistoryCode')
export class ConflictHistoryCodeResolver {
  constructor(private readonly conflictHistoryCodeService: ConflictHistoryCodeService) {}

  @Query('conflictHistoryCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.conflictHistoryCodeService.findAll();
  }

}
