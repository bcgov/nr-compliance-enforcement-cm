import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { HWCRPreventionActionResolver } from './hwcr_prevention_eduction_action.resolver';
import { HWCRPreventionActionService } from './hwcr_prevention_eduction_action.service';

@Module({
  imports: [PrismaModule],
  providers: [HWCRPreventionActionResolver, HWCRPreventionActionService],
})
export class HWCRPreventionActionModule { }
