import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class ThreatLevelCodeService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.threat_level_code.findMany();
    }

    findOne(id: string) {
        return this.prisma.threat_level_code.findUnique({
            where: { threat_level_code: id },
        });
    }
}
