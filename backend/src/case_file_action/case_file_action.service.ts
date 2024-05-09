import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CaseFileAction } from "./entities/case_file_action.entity";
import { ACTION_TYPE_CODES } from "../common/action_type_codes";

@Injectable()
export class CaseFileActionService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(CaseFileActionService.name);

  async findActionById(actionId: string) {
    const actionContext = this.prisma.action;
    const actionCodeContext = this.prisma.action_code;

    let action = await actionContext.findFirst({
      where: {
        action_guid: actionId,
      },
      select: {
        action_guid: true,
        actor_guid: true,
        active_ind: true,
        action_type_action_xref: true,
        action_date: true,
      },
    });

    let actionCode = await actionCodeContext.findFirst({
      where: {
        action_code: action.action_type_action_xref.action_code,
      },
      select: {
        short_description: true,
        long_description: true,
      },
    });

    const caseFileAction = Object.assign(new CaseFileAction(), {
      actionId: action.action_guid,
      actor: action.actor_guid,
      activeIndicator: action.active_ind,
      actionCode: action.action_type_action_xref.action_code,
      shortDescription: actionCode.short_description,
      longDescription: actionCode.long_description,
      actionTypeCode: action.action_type_action_xref.action_type_code,
      displayOrder: action.action_type_action_xref.display_order,
      date: action.action_date,
    });

    return caseFileAction;
  }

  async findActionByXrefIdAndCaseId(caseId: string, actionXrefGuid: string) {
    const actionContext = this.prisma.action;
    const actionCodeContext = this.prisma.action_code;
    let caseFileAction: CaseFileAction = {
      actionId: "",
      actor: "",
      activeIndicator: false,
      actionCode: "",
      shortDescription: "",
      longDescription: "",
      actionTypeCode: "",
      displayOrder: 0,
      date: null,
    };

    let queryResult = await actionContext.findFirst({
      where: {
        case_guid: caseId,
        action_type_action_xref_guid: actionXrefGuid,
      },
      select: {
        action_guid: true,
        actor_guid: true,
        active_ind: true,
        action_type_action_xref: true,
        action_date: true,
      },
    });
    if (queryResult) {
      let actionCode = await actionCodeContext.findFirst({
        where: {
          action_code: queryResult.action_type_action_xref.action_code,
        },
        select: {
          short_description: true,
          long_description: true,
        },
      });
      caseFileAction.actionId = queryResult.action_guid;

      caseFileAction.actionId = queryResult.action_guid;
      caseFileAction.actor = queryResult.actor_guid;
      caseFileAction.activeIndicator = queryResult.active_ind;
      caseFileAction.actionCode = queryResult.action_type_action_xref.action_code;
      caseFileAction.shortDescription = actionCode.short_description;
      caseFileAction.longDescription = actionCode.long_description;
      caseFileAction.actionTypeCode = queryResult.action_type_action_xref.action_type_code;
      caseFileAction.displayOrder = queryResult.action_type_action_xref.display_order;
      caseFileAction.date = queryResult.action_date;
      return caseFileAction;
    }
  }

  async findActionsByCaseIdAndType(caseId: string, actionTypeCode: string) {
    const actionCodeXrefContext = this.prisma.action_type_action_xref;

    let xrefResults = await actionCodeXrefContext.findMany({
      where: {
        action_type_code: actionTypeCode,
      },
      select: {
        action_type_action_xref_guid: true,
      },
    });

    let caseFileActions: CaseFileAction[] = new Array();

    for await (const xrefResult of xrefResults) {
      const caseFileAction = await this.findActionByXrefIdAndCaseId(caseId, xrefResult.action_type_action_xref_guid);
      if (caseFileAction) {
        caseFileActions.push(caseFileAction);
      }
    }
    return caseFileActions;
  }

  async findActionByCaseIdAndCaseCode(caseId: string, actionCaseCode: string) {
    const actionContext = this.prisma.action;
    const actionCodeContext = this.prisma.action_code;
    const actionCodeXrefContext = this.prisma.action_type_action_xref;

    let xrefResult = await actionCodeXrefContext.findFirst({
      where: {
        action_type_code: ACTION_TYPE_CODES.CASEACTION,
        action_code: actionCaseCode,
      },
      select: {
        action_type_action_xref_guid: true,
      },
    });

    let caseFileAction;
    if (xrefResult) {
      const queryResult = await actionContext.findFirst({
        where: {
          case_guid: caseId,
          action_type_action_xref_guid: xrefResult.action_type_action_xref_guid,
        },
        select: {
          action_guid: true,
          actor_guid: true,
          active_ind: true,
          action_type_action_xref: true,
          action_date: true,
        },
      });

      if (queryResult) {
        let actionCode = await actionCodeContext.findFirst({
          where: {
            action_code: queryResult.action_type_action_xref.action_code,
          },
          select: {
            short_description: true,
            long_description: true,
          },
        });
        caseFileAction = Object.assign({
          actionId: queryResult.action_guid,
          actor: queryResult.actor_guid,
          activeIndicator: queryResult.active_ind,
          actionCode: queryResult.action_type_action_xref.action_code,
          shortDescription: actionCode.short_description,
          longDescription: actionCode.long_description,
          actionTypeCode: queryResult.action_type_action_xref.action_type_code,
          displayOrder: queryResult.action_type_action_xref.display_order,
          date: queryResult.action_date,
        });
      }
    }

    return caseFileAction;
  }
}
