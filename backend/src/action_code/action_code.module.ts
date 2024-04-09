import { Module } from '@nestjs/common';
import { ActionCodeService } from './action_code.service';
import { ActionCodeResolver } from './action_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [ActionCodeResolver, ActionCodeService],
})
export class ActionCodeModule {}
