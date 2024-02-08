import { Resolver, Query, Args } from '@nestjs/graphql';
import { ConflictHistoryCodeService } from './conflict_history_code.service';

@Resolver('ConflictHistoryCode')
export class ConflictHistoryCodeResolver {
  constructor(private readonly conflictHistoryCodeService: ConflictHistoryCodeService) {}

  @Query('getAllActiveConflictHistoryCodes')
  findAll() {
    return this.conflictHistoryCodeService.findAll();
  }

  @Query('getConflictHistoryCode')
  findOne(@Args('conflict_history_code') conflict_history_code: string) {
    return this.conflictHistoryCodeService.findOne(conflict_history_code);
  }

}
