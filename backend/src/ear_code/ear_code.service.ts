import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EarCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
      return this.prisma.ear_code.findMany();
    }
  
    findOne(id: string) {
      return this.prisma.ear_code.findUnique({
        where: {
          ear_code: id,
          active_ind: true
        },
      });
    }
  
}
