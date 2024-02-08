import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DrugMethodCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.drug_method_code.findMany();
      }
    
      findOne(id: string) {
        return this.prisma.drug_method_code.findUnique({
          where: { 
            drug_method_code: id,
            active_ind: true
          },
        });
      }
}
