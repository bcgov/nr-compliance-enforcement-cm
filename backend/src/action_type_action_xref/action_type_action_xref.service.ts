import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";
import { ActionTypeActionXref } from './entities/action_type_action_xref.entity';

@Injectable()
export class ActionTypeActionXrefService {
  constructor(private prisma: PrismaService) { }

  async find(action_type_code?: string) {
    const dataContext = this.prisma.action_type_action_xref;
    let queryResult = null;

    if (action_type_code) {
      queryResult = await dataContext.findMany({
        where: {
          action_type_code: action_type_code
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
    let actionCodes: Array<ActionTypeActionXref> = [];

    queryResult.forEach((record) => {
      actionCodes.push(
        Object.assign(new ActionTypeActionXref(), {
          action_type_code: record.action_type_code,
          action_code: record.action_code,
          display_order: record.display_order,
          active_ind: record.active_ind,
          short_description: record.action_code_action_type_action_xref_action_codeToaction_code.short_description,
          long_description: record.action_code_action_type_action_xref_action_codeToaction_code.long_description
        }));
    });

    return actionCodes;
  }
}
