import { Module } from '@nestjs/common';
import { CaseFileActionResolver } from './case_file_action.resolver';
import { CaseFileActionService } from './case_file_action.service';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [CaseFileActionResolver, CaseFileActionService],
  exports:[CaseFileActionService],
})
export class CaseFileActionModule { }
