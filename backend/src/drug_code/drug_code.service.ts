import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DrugCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
      return this.prisma.drug_code.findMany();
    }
  
    findOne(id: string) {
      return this.prisma.drug_code.findUnique({
        where: {
          drug_code: id,
          active_ind: true
         },
      });
    }
}
