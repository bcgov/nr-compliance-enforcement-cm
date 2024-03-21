import { Resolver, Query, Args } from '@nestjs/graphql';
import { ConfigurationService } from './configuration.service';
import { JwtRoleGuard } from "../auth/jwtrole.guard";
import { UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@UseGuards(JwtRoleGuard)
@Resolver('Configuration')
export class ConfigurationResolver {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Query('getAllConfigurationCodes')
  @Roles(Role.COS_OFFICER)
  findAll() {
    return this.configurationService.findAll();
  }

  @Query('getConfigurationCode')
  @Roles(Role.COS_OFFICER)
  findOne(@Args('configuration_code') configuration_code: string) {
    return this.configurationService.findOne(configuration_code);
  }

}
