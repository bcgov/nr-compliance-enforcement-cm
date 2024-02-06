import { Resolver, Query, Args } from '@nestjs/graphql';
import { HwcrOutcomeCodeService } from './hwcr_outcome_code.service';

@Resolver('HwcrOutcomeCode')
export class HwcrOutcomeCodeResolver {
  constructor(private readonly hwcrOutcomeCodeService: HwcrOutcomeCodeService) {}

  @Query('HWCROutcomeCodes')
  findAll() {
    return this.hwcrOutcomeCodeService.findAll();
  }

  @Query('HWCROutcomeCode')
  findOne(@Args('hwcr_outcome_code') hwcr_outcome_code: string) {
    return this.hwcrOutcomeCodeService.findOne(hwcr_outcome_code);
  }
}
