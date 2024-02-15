import { Resolver, Query, Args } from '@nestjs/graphql';
import { SexCodeService } from './sex_code.service';

@Resolver('SexCode')
export class SexCodeResolver {
  constructor(private readonly sexCodeService: SexCodeService) {}

  @Query('getAllActiveSexCodes')
  findAll() {
    return this.sexCodeService.findAll();
  }

  @Query('getSexCode')
  findOne(@Args('sex_code') sex_code: string) {
    return this.sexCodeService.findOne(sex_code);
  }

}
