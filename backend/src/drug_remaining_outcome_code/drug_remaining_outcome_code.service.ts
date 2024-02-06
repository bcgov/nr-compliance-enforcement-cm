import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DrugRemainingOutcomeCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.drug_remaining_outcome_code.findMany();
      }
    
      findOne(id: string) {
        return this.prisma.drug_remaining_outcome_code.findUnique({
          where: { drug_remaining_outcome_code: id },
        });
      }
}
