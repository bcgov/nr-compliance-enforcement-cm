import { Module } from '@nestjs/common';
import { EarCodeService } from './ear_code.service';
import { EarCodeResolver } from './ear_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [EarCodeResolver, EarCodeService],
})
export class EarCodeModule {}





