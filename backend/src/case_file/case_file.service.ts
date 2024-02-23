import { Injectable } from '@nestjs/common';
import { CreateCaseFileInput } from './dto/create-case_file.input';
import { UpdateCaseFileInput } from './dto/update-case_file.input';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class CaseFileService {
  constructor(private prisma: PrismaService) { }
  create(createCaseFileInput: CreateCaseFileInput) {
    return 'This action adds a new caseFile';
  }

  findAll() {
    return `This action returns all caseFile`;
  }

  async findOne(case_file_guid: string) {

    const lead = await this.prisma.lead.findFirst({
      where: {
        case_identifier: case_file_guid,
      },
      select: {
        lead_identifier: true,
      },
    });

    const actionsBase = await this.prisma.action.findMany({
      where: {
        case_guid: case_file_guid,
      },
      select: {
        action_type_action_xref_guid: true,
        actor_guid: true,
        action_date: true,
      },
    });

    const actionCodes = await this.prisma.action_type_action_xref.findMany({
      where: {
        action_type_code: "COMPASSESS",
        action_type_action_xref_guid: { in: actionsBase.map((item) => item.action_type_action_xref_guid) },
      },
      select: {
        action_code: true,
        action_type_action_xref_guid: true,
        action_code_action_type_action_xref_action_codeToaction_code: {
          select: {
            short_description: true,
            long_description: true,
            active_ind: true
          },
        },
      }
    });

    const actions = actionsBase.map((action) => {
      let actionData = actionCodes.find((element) => element.action_type_action_xref_guid === action.action_type_action_xref_guid);
      return {
        actor_guid: action.actor_guid,
        action_date: action.action_date,
        action_code: actionData.action_code,
        short_description: actionData.action_code_action_type_action_xref_action_codeToaction_code.short_description,
        long_description: actionData.action_code_action_type_action_xref_action_codeToaction_code.long_description,
        active_ind: actionData.action_code_action_type_action_xref_action_codeToaction_code.active_ind,
      };
    });

     const assessment = await this.prisma.case_file.findFirst({
      where: {
       case_file_guid : case_file_guid
      },
      select: {
        case_file_guid: true,
        action_not_required_ind: true,
        inaction_reason_code: true,
        inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code: {
          where: {
            agency_code: "COS"
          },
          select: {
            active_ind: true,
            short_description: true,
            long_description: true,
          }
        }
      }
    });

    const case_file = {
      case_file_guid : assessment?.case_file_guid,
      lead_identifier: lead?.lead_identifier,
      assessment_details: 
      {
        action_not_required_ind: assessment?.action_not_required_ind,
        inaction_reason_code: assessment?.inaction_reason_code,
        short_description: assessment?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.short_description,
        long_description: assessment?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.long_description,
        active_ind: assessment?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.active_ind,
        assessment_actions: actions
      }
    };

    return case_file;

  }

  update(id: number, updateCaseFileInput: UpdateCaseFileInput) {
    return `This action updates a #${id} caseFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseFile`;
  }
}
