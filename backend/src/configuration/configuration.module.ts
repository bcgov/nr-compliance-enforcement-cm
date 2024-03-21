import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationResolver } from './configuration.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [ConfigurationResolver, ConfigurationService],
})
export class ConfigurationModule {}
