import { Resolver, Query, Args } from '@nestjs/graphql';
import { ThreatLevelCodeService } from './threat_level_code.service';

@Resolver('ThreatLevelCode')
export class ThreatLevelCodeResolver {
  constructor(private readonly threatLevelCodeService: ThreatLevelCodeService) {}

  @Query('threatLevelCodes')
  findAll() {
    return this.threatLevelCodeService.findAll();
  }

  @Query('threatLevelCode')
  findOne(@Args('threat_level_code') threat_level_code: string) {
    return this.threatLevelCodeService.findOne(threat_level_code);
  }
}
