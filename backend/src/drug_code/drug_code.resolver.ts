import { Resolver, Query, Args } from '@nestjs/graphql';
import { DrugCodeService } from './drug_code.service';

@Resolver('DrugCode')
export class DrugCodeResolver {
  constructor(private readonly drugCodeService: DrugCodeService) {}

  @Query('drugCodes')
  findAll() {
    return this.drugCodeService.findAll();
  }

  @Query('drugCode')
  findOne(@Args('drug_code') drug_code: string) {
    return this.drugCodeService.findOne(drug_code);
  }

}
