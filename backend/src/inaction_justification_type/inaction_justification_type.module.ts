
import { Module } from '@nestjs/common';
import { InactionJustificationTypeResolver } from './inaction_justification_type.resolver';
import { InactionJustificationTypeService } from './inaction_justification_type.service';

import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [InactionJustificationTypeResolver, InactionJustificationTypeService],
})
export class InactionJustificationTypeModule { }
