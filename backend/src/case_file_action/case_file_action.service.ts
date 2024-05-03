import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";
import { CaseFileAction } from './entities/case_file_action.entity';
import { ACTION_TYPE_CODES } from 'src/common/action_type_codes';

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
      actor: action.actor_guid,
      activeIndicator: action.active_ind,
      actionCode: action.action_type_action_xref.action_code,
      shortDescription: actionCode.short_description,
      longDescription: actionCode.long_description,
      actionTypeCode: action.action_type_action_xref.action_type_code,
      displayOrder: action.action_type_action_xref.display_order,
    });

    return caseFileAction;
  }

  async findActionByXrefIdAndCaseId(caseId?: string, actionXrefGuid?: string)
  {
    const actionContext = this.prisma.action;
    const actionCodeContext = this.prisma.action_code;
		console.log("caseId: " + JSON.stringify(caseId));
		console.log("actionXrefGuid: " + JSON.stringify(actionXrefGuid));
    let caseFileAction: CaseFileAction = 
		{
			actionId: '',
			actor: '',
			activeIndicator: false,
			actionCode: '',
			shortDescription: '',
			longDescription: '',
			actionTypeCode: '',
			displayOrder: 0
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
        },
      });

			console.log("queryResult: " + JSON.stringify(queryResult));
    
        let actionCode = await actionCodeContext.findFirst({
          where: 
          {
            action_code: queryResult.action_type_action_xref.action_code,
          },
          select:
          { 
            short_description: true,
            long_description: true,
          }
    
        });
				console.log("queryResult1111111111111: " + JSON.stringify(queryResult));
        caseFileAction.actionId = queryResult.action_guid;
				console.log("queryResult2222222222222222: " + JSON.stringify(queryResult));
				
				caseFileAction.actionId = queryResult.action_guid;
				caseFileAction.actor = queryResult.actor_guid;
				caseFileAction.activeIndicator = queryResult.active_ind;
				caseFileAction.actionCode = queryResult.action_type_action_xref.action_code;
				caseFileAction.shortDescription = actionCode.short_description;
				caseFileAction.longDescription = actionCode.long_description;
				caseFileAction.actionTypeCode = queryResult.action_type_action_xref.action_type_code;
				caseFileAction.displayOrder = queryResult.action_type_action_xref.display_order;
            console.log("caseFileAction: " + JSON.stringify(caseFileAction));
        return caseFileAction;
    }

  async findActionsByCaseIdAndType(caseId?: string, actionTypeCode?: string) {

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
			console.log("pushingAction-3333333: " + JSON.stringify(caseFileAction));
			caseFileActions.push(caseFileAction);
			console.log("caseFileAction-111111111111111111111111111s: " + JSON.stringify(caseFileActions));
  }
;
    console.log("caseFileAction-2222222222222s: " + JSON.stringify(caseFileActions));
    return caseFileActions;
  }

  async findActionByCaseIdAndCaseCode(caseId?: string, actionCaseCode?: string) {

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
    if(xrefResult)
      {
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
        },
      });
  
    if(queryResult)
      {
        let actionCode = await actionCodeContext.findFirst({
          where: 
          {
            action_code: queryResult.action_type_action_xref.action_code,
          },
          select:
          { 
            short_description: true,
            long_description: true,
          }
    
        });
        caseFileAction =
            Object.assign( {
              actionId: queryResult.action_guid,
              actor: queryResult.actor_guid,
              activeIndicator: queryResult.active_ind,
              actionCode: queryResult.action_type_action_xref.action_code,
              shortDescription: actionCode.short_description,
              longDescription: actionCode.long_description,
              actionTypeCode: queryResult.action_type_action_xref.action_type_code,
              displayOrder: queryResult.action_type_action_xref.display_order,
            });
          }
        }

    return caseFileAction;
  }

}
