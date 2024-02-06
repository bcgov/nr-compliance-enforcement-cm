import { Resolver, Query, Args } from '@nestjs/graphql';
import { SexCodeService } from './sex_code.service';

@Resolver('SexCode')
export class SexCodeResolver {
  constructor(private readonly sexCodeService: SexCodeService) {}

  @Query('sexCodes')
  findAll() {
    return this.sexCodeService.findAll();
  }

  @Query('sexCode')
  findOne(@Args('sex_code') sex_code: string) {
    return this.sexCodeService.findOne(sex_code);
  }

}
