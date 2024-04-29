
import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { HWCRPreventionActionResolver } from './hwcr_prevention_action.resolver';
import { ActionCodeService } from '../action_code/action_code.service';

@Module({
  imports: [PrismaModule],
  providers: [HWCRPreventionActionResolver, ActionCodeService],
})
export class HWCRPreventionActionModule {}
