import { Args, Query, Resolver } from "@nestjs/graphql";
import { IpmAuthCategoryCodeService } from "./ipm_auth_category_code.service";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/enum/role.enum";

@Resolver("IpmAuthCategoryCode")
export class IpmAuthCategoryCodeResolver {
  constructor(private readonly ipmAuthCategoryCodeService: IpmAuthCategoryCodeService) {}

  @Query("ipmAuthCategoryCodes")
  @Roles(Role.CEEB)
  findAll() {
    return this.ipmAuthCategoryCodeService.findAll();
  }
}
