import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class ConfigurationService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.configuration.findMany();
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
