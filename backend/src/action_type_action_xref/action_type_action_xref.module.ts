import { Module } from '@nestjs/common';
import { ActionTypeActionXrefService } from './action_type_action_xref.service';
import { ActionTypeActionXrefResolver } from './action_type_action_xref.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [ActionTypeActionXrefResolver, ActionTypeActionXrefService],
})
export class ActionTypeActionXrefModule {}
