import { Module } from '@nestjs/common';
import { InactionReasonCodeService } from './inaction_reason_code.service';
import { InactionReasonCodeResolver } from './inaction_reason_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [InactionReasonCodeResolver, InactionReasonCodeService],
})
export class InactionReasonCodeModule {}
