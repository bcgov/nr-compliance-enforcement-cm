import { Injectable } from "@nestjs/common";
import { CaseManagementPrismaService } from "../prisma/cm/prisma.cm.service";

@Injectable()
export class ActionCodeService {
  constructor(private readonly prisma: CaseManagementPrismaService) {}

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
        active_ind: true,
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
      orderBy: [{ display_order: "asc" }],
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
