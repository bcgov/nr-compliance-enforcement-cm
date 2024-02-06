import { Module } from '@nestjs/common';
import { HwcrOutcomeCodeService } from './hwcr_outcome_code.service';
import { HwcrOutcomeCodeResolver } from './hwcr_outcome_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [HwcrOutcomeCodeResolver, HwcrOutcomeCodeService],
})
export class HwcrOutcomeCodeModule {}
