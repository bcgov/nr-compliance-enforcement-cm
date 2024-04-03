import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";
import { Configuration } from "./entities/configuration.entity";

@Injectable()
export class ConfigurationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const prismaConfigurations =  await this.prisma.configuration.findMany({
      select: {
        configuration_code: true,
        configuration_value: true,
        long_description: true,
        active_ind: true
      }
    });

    const configCodes: Configuration[] = prismaConfigurations.map(prismaConfigurations => ({
      configurationCode: prismaConfigurations.configuration_code,
      configurationValue: prismaConfigurations.configuration_value,
      longDescription: prismaConfigurations.long_description,
      activeIndicator: prismaConfigurations.active_ind
    }));

    return configCodes;
  }

  findOne(id: string) {
    return this.prisma.configuration.findUnique({
      where: {  
        configuration_code: id,
        active_ind: true 
      },
    });
  }

}
