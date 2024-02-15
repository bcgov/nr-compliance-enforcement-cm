import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class AgeCodeService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.age_code.findMany();
  }

  findOne(id: string) {
    return this.prisma.age_code.findUnique({
      where: {  
        age_code: id,
        active_ind: true 
      },
    });
  }

}
