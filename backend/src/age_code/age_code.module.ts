import { Module } from '@nestjs/common';
import { AgeCodeService } from './age_code.service';
import { AgeCodeResolver } from './age_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [AgeCodeResolver, AgeCodeService],
})
export class AgeCodeModule {}
