import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class ConflictHistoryCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
      return this.prisma.conflict_history_code.findMany();
    }
  
    findOne(id: string) {
      return this.prisma.conflict_history_code.findUnique({
        where: { conflict_history_code: id },
      });
    }
}
