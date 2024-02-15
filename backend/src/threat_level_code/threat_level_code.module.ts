import { Module } from '@nestjs/common';
import { ThreatLevelCodeService } from './threat_level_code.service';
import { ThreatLevelCodeResolver } from './threat_level_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [ThreatLevelCodeResolver, ThreatLevelCodeService],
})
export class ThreatLevelCodeModule {}
