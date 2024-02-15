import { Resolver, Query, Args } from '@nestjs/graphql';
import { HwcrOutcomeCodeService } from './hwcr_outcome_code.service';

@Resolver('HwcrOutcomeCode')
export class HwcrOutcomeCodeResolver {
  constructor(private readonly hwcrOutcomeCodeService: HwcrOutcomeCodeService) {}

  @Query('getAllActiveHWCROutcomeCodes')
  findAll() {
    return this.hwcrOutcomeCodeService.findAll();
  }

  @Query('getHWCROutcomeCode')
  findOne(@Args('hwcr_outcome_code') hwcr_outcome_code: string) {
    return this.hwcrOutcomeCodeService.findOne(hwcr_outcome_code);
  }
}
