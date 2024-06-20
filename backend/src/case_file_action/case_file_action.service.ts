import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CaseFileAction } from "./entities/case_file_action.entity";
import { ACTION_TYPE_CODES } from "../common/action_type_codes";
import { GraphQLError } from "graphql";

@Injectable()
export class CaseFileActionService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(CaseFileActionService.name);

  //helper method that is used to map the Prisma result set into a useable object
  private mapActionResult(actionResult: any) {
    if (actionResult) {
      const {
        action_guid: actionId,
        actor_guid: actor,
        active_ind: activeIndicator,
        action_date: date,
        action_type_action_xref: {
          action_type_code: actionTypeCode,
          display_order: displayOrder,
          action_code_action_type_action_xref_action_codeToaction_code: {
            action_code: actionCode,
            short_description: shortDescription,
            long_description: longDescription,
          },
        },
      } = actionResult;

      return {
        actionId,
        actor,
        activeIndicator,
        date,
        actionTypeCode,
        displayOrder,
        actionCode,
        shortDescription,
        longDescription,
      };
    }
  }

  //helper method that is used to find the details of all the details of an action given a case and actionType/actionCode pair.
  //This could potentially be refactored by combining it with findActionsByCaseIdAndType
  private async findActionByXrefIdAndCaseId(caseId: string, actionXrefGuid: string) {
    const actionContext = this.prisma.action;

    try {
      let actionResult = await actionContext.findFirst({
        where: {
          case_guid: caseId,
          action_type_action_xref_guid: actionXrefGuid,
        },
        select: {
          action_guid: true,
          actor_guid: true,
          active_ind: true,
          action_type_action_xref: {
            select: {
              action_type_code: true,
              display_order: true,
              action_code_action_type_action_xref_action_codeToaction_code: {
                select: {
                  action_code: true,
                  short_description: true,
                  long_description: true,
                },
              },
            },
          },
          action_date: true,
        },
      });

      return this.mapActionResult(actionResult);
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  }

  //Used to return the all the actions of a given type for a specific case
  async findActionsByCaseIdAndType(caseId: string, actionTypeCode: string) {
    const actionCodeXrefContext = this.prisma.action_type_action_xref;

    try {
      let xrefResults = await actionCodeXrefContext.findMany({
        where: {
          action_type_code: actionTypeCode,
        },
        select: {
          action_type_action_xref_guid: true,
        },
        orderBy: [{ display_order: "asc" }],
      });

      let caseFileActions: CaseFileAction[] = new Array();

      for await (const xrefResult of xrefResults) {
        const caseFileAction = await this.findActionByXrefIdAndCaseId(caseId, xrefResult.action_type_action_xref_guid);
        if (caseFileAction) {
          caseFileActions.push(caseFileAction);
        }
      }

      return caseFileActions;
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  }

  //Used to return the all the actions of a given code for a specific case
  async findActionByCaseIdAndCaseCode(caseId: string, actionCaseCode: string) {
    const actionContext = this.prisma.action;

    try {
      const actionResult = await actionContext.findFirst({
        where: {
          case_guid: caseId,
          action_type_action_xref: {
            action_code_action_type_action_xref_action_codeToaction_code: {
              action_code: actionCaseCode,
            },
          },
          active_ind: true,
        },
        select: {
          action_guid: true,
          actor_guid: true,
          active_ind: true,
          action_type_action_xref: {
            select: {
              action_type_code: true,
              display_order: true,
              action_code_action_type_action_xref_action_codeToaction_code: {
                select: {
                  action_code: true,
                  short_description: true,
                  long_description: true,
                },
              },
            },
          },
          action_date: true,
        },
      });

      return this.mapActionResult(actionResult);
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  }
}
