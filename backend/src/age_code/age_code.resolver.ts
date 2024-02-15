import { Resolver, Query, Args } from '@nestjs/graphql';
import { AgeCodeService } from './age_code.service';


@Resolver('AgeCode')
export class AgeCodeResolver {
  constructor(private readonly ageCodeService: AgeCodeService) {}

  @Query('getAllActiveAgeCodes')
  findAll() {
    return this.ageCodeService.findAll();
  }

  @Query('getAgeCode')
  findOne(@Args('age_code') age_code: string) {
    return this.ageCodeService.findOne(age_code);
  }

}
