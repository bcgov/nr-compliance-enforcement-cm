import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CaseFileAction } from "../case_file_action/entities/case_file_action.entity";

@Injectable()
export class HWCRAssessmentActionService {
  constructor(private prisma: PrismaService) {}

  async find(actionTypeCode?: string) {
    const dataContext = this.prisma.action_type_action_xref;
    let queryResult = null;
    actionTypeCode = "COMPASSESS"; //send from frontend later?
    if (actionTypeCode) {
      queryResult = await dataContext.findMany({
        where: {
          action_type_code: actionTypeCode,
        },
        select: {
          action_type_code: true,
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
    } else {
      queryResult = await dataContext.findMany({
        select: {
          action_type_code: true,
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
    }
    let actionCodes: Array<CaseFileAction> = [];

    queryResult.forEach((record) => {
      actionCodes.push(
        Object.assign(new CaseFileAction(), {
          actionTypeCode: record.action_type_code,
          actionCode: record.action_code,
          displayOrder: record.display_order,
          activeIndicator: record.active_ind,
          shortDescription: record.action_code_action_type_action_xref_action_codeToaction_code.short_description,
          longDescription: record.action_code_action_type_action_xref_action_codeToaction_code.long_description,
        }),
      );
    });

    return actionCodes;
  }
}
