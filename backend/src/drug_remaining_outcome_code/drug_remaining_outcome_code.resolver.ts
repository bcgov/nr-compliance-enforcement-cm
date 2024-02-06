import { Resolver, Query, Args } from '@nestjs/graphql';
import { DrugRemainingOutcomeCodeService } from './drug_remaining_outcome_code.service';

@Resolver('DrugRemainingOutcomeCode')
export class DrugRemainingOutcomeCodeResolver {
  constructor(private readonly drugRemainingOutcomeCodeService: DrugRemainingOutcomeCodeService) {}

  @Query('drugRemainingOutcomeCodes')
  findAll() {
    return this.drugRemainingOutcomeCodeService.findAll();
  }

  @Query('drugRemainingOutcomeCode')
  findOne(@Args('drug_remaining_outcome_code') drug_remaining_outcome_code: string) {
    return this.drugRemainingOutcomeCodeService.findOne(drug_remaining_outcome_code);
  }

}