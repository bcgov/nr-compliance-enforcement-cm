import { Resolver, Query, Args } from '@nestjs/graphql';
import { ConflictHistoryCodeService } from './conflict_history_code.service';

@Resolver('ConflictHistoryCode')
export class ConflictHistoryCodeResolver {
  constructor(private readonly conflictHistoryCodeService: ConflictHistoryCodeService) {}

  @Query('conflictHistoryCodes')
  findAll() {
    return this.conflictHistoryCodeService.findAll();
  }

  @Query('conflictHistoryCode')
  findOne(@Args('conflict_history_code') conflict_history_code: string) {
    return this.conflictHistoryCodeService.findOne(conflict_history_code);
  }

}