import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";
import { ThreatLevelCode } from './entities/threat_level_code.entity';

@Injectable()
export class ThreatLevelCodeService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        const prismaThreatLevelCodes =  await this.prisma.threat_level_code.findMany({
          select: {
            threat_level_code: true,
            short_description: true,
            long_description: true,
            display_order: true,
            active_ind: true
          }
        });
    
        const threatCodes: ThreatLevelCode[] = prismaThreatLevelCodes.map(prismaThreatLevelCodes => ({
          threatLevelCode: prismaThreatLevelCodes.threat_level_code,
          shortDescription: prismaThreatLevelCodes.short_description,
          longDescription: prismaThreatLevelCodes.long_description,
          displayOrder: prismaThreatLevelCodes.display_order,
          activeIndicator: prismaThreatLevelCodes.active_ind
        }));
    
        return threatCodes;
    }

    findOne(id: string) {
        return this.prisma.threat_level_code.findUnique({
            where: {
                threat_level_code: id,
                active_ind: true
            },
        });
    }
}
