import { Resolver, Query, Args } from '@nestjs/graphql';
import { DrugMethodCodeService } from './drug_method_code.service';

@Resolver('DrugMethodCode')
export class DrugMethodCodeResolver {
  constructor(private readonly drugMethodCodeService: DrugMethodCodeService) {}

  @Query('getAllActiveDrugMethodCodes')
  findAll() {
    return this.drugMethodCodeService.findAll();
  }

  @Query('getDrugMethodCode')
  findOne(@Args('drug_method_code') drug_method_code: string) {
    return this.drugMethodCodeService.findOne(drug_method_code);
  }
}
