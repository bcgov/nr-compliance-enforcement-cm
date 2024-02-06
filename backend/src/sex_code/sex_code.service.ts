import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class SexCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.sex_code.findMany();
    }

    findOne(id: string) {
        return this.prisma.sex_code.findUnique({
            where: { sex_code: id },
        });
    }
}
