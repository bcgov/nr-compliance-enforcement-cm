import { Module } from '@nestjs/common';
import { SexCodeService } from './sex_code.service';
import { SexCodeResolver } from './sex_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [SexCodeResolver, SexCodeService],
})
export class SexCodeModule {}
