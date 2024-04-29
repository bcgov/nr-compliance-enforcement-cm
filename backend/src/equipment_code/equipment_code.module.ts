
import { Module } from '@nestjs/common';
import { ActionCodeService } from '../action_code/action_code.service';
import { EquipmentCodeResolver } from './equipment_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [EquipmentCodeResolver, ActionCodeService],
})
export class EquipmentCodeModule {}
