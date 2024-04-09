import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";
import { CaseFileAction } from './entities/case_file_action.entity';

@Injectable()
export class CaseFileActionService {
  constructor(private prisma: PrismaService) { }

  async findActionById(actionId?: string) {

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
      },
    });

    let actionCode = await actionCodeContext.findFirst({
      where: 
      {
        action_code: action.action_type_action_xref.action_code,
      },
      select:
      { 
        short_description: true,
        long_description: true,
      }

    });

    const caseFileAction = Object.assign(new CaseFileAction(), {
      actionId: action.action_guid,
      actorId: action.actor_guid,
      activeIndicator: action.active_ind,
      actionCode: action.action_type_action_xref.action_code,
      shortDescription: actionCode.short_description,
      longDescription: actionCode.long_description,
      actionTypeCode: action.action_type_action_xref.action_type_code,
      displayOrder: action.action_type_action_xref.display_order,
    });

    return caseFileAction;
  }

  async findActionsByCaseId(caseId?: string) {

    const actionContext = this.prisma.action;
    const actionCodeContext = this.prisma.action_code;

    let queryResult = await actionContext.findMany({
      where: {
        case_guid: caseId,
      },
      select: {
        action_guid: true,
        actor_guid: true,
        active_ind: true,
        action_type_action_xref: true,
      },
    });

    let caseFileActions = [];
  
    queryResult.forEach(async (record) => {
      let actionCode = await actionCodeContext.findFirst({
        where: 
        {
          action_code: record.action_type_action_xref.action_code,
        },
        select:
        { 
          short_description: true,
          long_description: true,
        }
  
      });
      caseFileActions.push(
          Object.assign( {
            actionId: record.action_guid,
            actorId: record.actor_guid,
            activeIndicator: record.active_ind,
            actionCode: record.action_type_action_xref.action_code,
            shortDescription: actionCode.short_description,
            longDescription: actionCode.long_description,
            actionTypeCode: record.action_type_action_xref.action_type_code,
            displayOrder: record.action_type_action_xref.display_order,
          }));
      });

    return caseFileActions;
  }

}
