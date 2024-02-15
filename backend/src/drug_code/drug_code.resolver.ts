import { Resolver, Query, Args } from '@nestjs/graphql';
import { DrugCodeService } from './drug_code.service';

@Resolver('DrugCode')
export class DrugCodeResolver {
  constructor(private readonly drugCodeService: DrugCodeService) {}

  @Query('getAllActiveDrugCodes')
  findAll() {
    return this.drugCodeService.findAll();
  }

  @Query('getDrugCode')
  findOne(@Args('drug_code') drug_code: string) {
    return this.drugCodeService.findOne(drug_code);
  }

}
