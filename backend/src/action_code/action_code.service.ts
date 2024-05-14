import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class ActionCodeService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.action_code.findMany();
  }

  findOne(id: string) {
    return this.prisma.action_code.findUnique({
      where: {
        action_code: id,
        active_ind: true,
      },
    });
  }

  async findAllCodesByType(actionTypeCode?: string) {
    const xrefDataContext = this.prisma.action_type_action_xref;
    let queryResult = null;
    queryResult = await xrefDataContext.findMany({
      where: {
        action_type_code: actionTypeCode,
      },
      select: {
        action_code: true,
        display_order: true,
        active_ind: true,
        action_code_action_type_action_xref_action_codeToaction_code: {
          select: {
            short_description: true,
            long_description: true,
          },
        },
      },
    });

    const actions = queryResult.map((record) => ({
      actionTypeCode: actionTypeCode,
      actionCode: record.action_code,
      displayOrder: record.display_order,
      activeIndicator: record.active_ind,
      shortDescription: record.action_code_action_type_action_xref_action_codeToaction_code.short_description,
      longDescription: record.action_code_action_type_action_xref_action_codeToaction_code.long_description,
    }));

    return actions;
  }
}
