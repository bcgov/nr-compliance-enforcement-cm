import { Resolver, Query, Args } from '@nestjs/graphql';
import { EarCodeService } from './ear_code.service';

@Resolver('EarCode')
export class EarCodeResolver {
  constructor(private readonly earCodeService: EarCodeService) {}

  @Query('earCodes')
  findAll() {
    return this.earCodeService.findAll();
  }

  @Query('earCode')
  findOne(@Args('ear_code') ear_code: string) {
    return this.earCodeService.findOne(ear_code);
  }

}
