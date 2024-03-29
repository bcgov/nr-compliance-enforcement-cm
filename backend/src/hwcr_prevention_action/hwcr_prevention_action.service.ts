import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";
import { HWCRPreventionAction } from './entities/hwcr_prevention_action.entity';

@Injectable()
export class HWCRPreventionActionService {
  constructor(private prisma: PrismaService) { }

  async find(actionTypeCode?: string) {
    const dataContext = this.prisma.action_type_action_xref;
    let queryResult = null;
    actionTypeCode = "COSPRV&EDU"; //send from frontend later?
    if (actionTypeCode) {
      queryResult = await dataContext.findMany({
        where: {
          action_type_code: actionTypeCode
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
            }
          }
        },
        orderBy: {
          display_order: 'asc',
        }
      })
    }
    else {
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
            }
          }
        }
      })
    }
    let actionCodes: Array<HWCRPreventionAction> = [];

    queryResult.forEach((record) => {
      actionCodes.push(
        Object.assign(new HWCRPreventionAction(), {
          actionTypeCode: record.action_type_code,
          actionCode: record.action_code,
          displayOrder: record.display_order,
          activeIndicator: record.active_ind,
          shortDescription: record.action_code_action_type_action_xref_action_codeToaction_code.short_description,
          longDescription: record.action_code_action_type_action_xref_action_codeToaction_code.long_description
        }));
    });

    return actionCodes;
  }
}
