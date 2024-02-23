import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InactionReasonCodeService } from './inaction_reason_code.service';

@Resolver('InactionReasonCode')
export class InactionReasonCodeResolver {
  constructor(private readonly inactionReasonCodeService: InactionReasonCodeService) {}


  @Query('getInactionReasonCodes')
  find(@Args('agency_code') agency_code?: string) {
    return this.inactionReasonCodeService.find(agency_code);
  }
  
  
}
