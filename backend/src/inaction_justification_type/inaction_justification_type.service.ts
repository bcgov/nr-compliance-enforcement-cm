import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";
import { InactionJustificationType } from './entities/inaction_justification_type.entity';

@Injectable()
export class InactionJustificationTypeService {
  constructor(private prisma: PrismaService) { }

  async find(agencyCode?: string) {
    let queryResult = null;
    const dataContext = this.prisma.inaction_reason_code;

    if (agencyCode) {
      queryResult = await dataContext.findMany({
        where: {
          agency_code: agencyCode
        },
        select: {
          inaction_reason_code: true,
          agency_code: true,
          short_description: true,
          long_description: true,
          display_order: true,
          active_ind: true
        }
      })
    }
    else {
      queryResult = await dataContext.findMany({
        select: {
          inaction_reason_code: true,
          agency_code: true,
          short_description: true,
          long_description: true,
          display_order: true,
          active_ind: true
        }
      })
    }
    let inactionJustificationTypes: Array<InactionJustificationType> = [];

    queryResult.forEach((record) => {
      inactionJustificationTypes.push(
        Object.assign(new InactionJustificationType(), {
          actionJustificationCode: record.inaction_reason_code,
          agencyCode: record.agency_code,
          shortDescription: record.short_description,
          longDescription: record.long_description,
          displayOrder: record.display_order,
          activeIndicator: record.active_ind
        }));
    });

    return inactionJustificationTypes;
  }
}
