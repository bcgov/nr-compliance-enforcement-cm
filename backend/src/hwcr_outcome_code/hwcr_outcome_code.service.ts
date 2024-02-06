import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HwcrOutcomeCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
      return this.prisma.hwcr_outcome_code.findMany();
    }
  
    findOne(id: string) {
      return this.prisma.hwcr_outcome_code.findUnique({
        where: { hwcr_outcome_code: id },
      });
    }
  
}
