import { Injectable } from '@nestjs/common';
import { CreateAssessmentInput } from './dto/create-case_file.input';
import { UpdateAssessmentInput } from './dto/update-case_file.input';
import { PrismaService } from "nestjs-prisma";
import { CaseFile } from './entities/case_file.entity';
import { AssessmentAction } from './entities/assessment-action.entity';
import { GraphQLError } from 'graphql';

@Injectable()
export class CaseFileService {
  constructor(private prisma: PrismaService) { }

  async create(createAssessmentInput: CreateAssessmentInput): Promise<CaseFile> {

    let actiontypeCode: string = "COMPASSESS";
    let caseFileGuid: string;
    let caseFileOutput = new CaseFile();

    try {

      if (createAssessmentInput.lead_identifier) {
        const existingCaseFile = await this.findOneByLeadId(createAssessmentInput.lead_identifier);
        console.log("existingCaseFile", existingCaseFile);
        if (existingCaseFile != null && existingCaseFile.case_file_guid != null) {
          throw new Error(`The case ${existingCaseFile.case_file_guid} assosiated with lead id ${createAssessmentInput.lead_identifier} already exist. 
                          Please run updateAssessment mutation.`, {
          });
        }
      }
      await this.prisma.$transaction(async (db) => {

        let case_file = await db.case_file.create({
          data: {
            agency_code: {
              connect: {
                agency_code: createAssessmentInput.agency_code
              }
            },
            inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code:
              createAssessmentInput.assessment_details.inaction_reason_code ?
                {
                  connect: {
                    inaction_reason_code: createAssessmentInput.assessment_details.inaction_reason_code
                  }
                } : undefined,
            create_user_id: createAssessmentInput.create_user_id,
            create_utc_timestamp: new Date(),
            action_not_required_ind: createAssessmentInput.assessment_details.action_not_required_ind,
            case_code_case_file_case_codeTocase_code: {
              connect: {
                case_code: createAssessmentInput.case_code
              }
            },
          }
        });

        caseFileGuid = case_file.case_file_guid;

        await db.lead.create({
          data: {
            lead_identifier: createAssessmentInput.lead_identifier,
            case_identifier: caseFileGuid,
            create_user_id: createAssessmentInput.create_user_id,
            create_utc_timestamp: new Date()
          }
        });

        let action_codes_objects = await db.action_type_action_xref.findMany({
          where: { action_type_code: actiontypeCode },
          select: { action_code: true }
        });
        let action_codes: Array<string> = [];
        for (const action_code_object of action_codes_objects) {
          action_codes.push(action_code_object.action_code);
        }
        for (const action of createAssessmentInput.assessment_details.assessment_actions) {
          if (action_codes.indexOf(action.action_code) === -1) {
            throw "Some action code values where not passed from the client";
          };
        }

        for (const action of createAssessmentInput.assessment_details.assessment_actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actiontypeCode,
              action_code: action.action_code
            },
            select: {
              action_type_action_xref_guid: true
            }
          });
          await db.action.create({
            data: {
              case_guid: caseFileGuid,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              actor_guid: action.actor_guid,
              action_date: action.action_date,
              active_ind: action.active_ind,
              create_user_id: createAssessmentInput.create_user_id,
              create_utc_timestamp: new Date
            }
          });
        }
      });

      caseFileOutput = await this.findOne(caseFileGuid);
    }
    catch (exception) {
      console.log("exception", exception);
      throw new GraphQLError('Exception occurred. See server log for details', {
      });
    }
    return caseFileOutput;
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
        active_ind: true
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

    const actions: AssessmentAction[] = actionsBase.map((action) => {
      let actionData = actionCodes.find((element) => element.action_type_action_xref_guid === action.action_type_action_xref_guid);
      return {
        actor_guid: action.actor_guid,
        action_date: action.action_date,
        action_code: actionData.action_code,
        short_description: actionData.action_code_action_type_action_xref_action_codeToaction_code.short_description,
        long_description: actionData.action_code_action_type_action_xref_action_codeToaction_code.long_description,
        active_ind: action.active_ind,
      };
    });

    const assessment = await this.prisma.case_file.findFirst({
      where: {
        case_file_guid: case_file_guid
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

    const case_file: CaseFile = {
      case_file_guid: assessment?.case_file_guid,
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

  async findOneByLeadId(lead_identifier: string) {

    let caseFileOutput: CaseFile = new CaseFile();
    const caseIdRecord = await this.prisma.lead.findFirst({
      where: {
        lead_identifier: lead_identifier
      },
      select: {
        case_identifier: true,
      },
    });
    if (caseIdRecord?.case_identifier) {
      caseFileOutput = await this.findOne(caseIdRecord.case_identifier);
    }

    return caseFileOutput;
  }

  async update(case_file_guid: string, updateAssessmentInput: UpdateAssessmentInput) {

    let actiontypeCode: string = "COMPASSESS";
    let caseFileOutput = new CaseFile();

    try {
      await this.prisma.$transaction(async (db) => {
        
        await db.case_file.update({
          where: { case_file_guid: case_file_guid },
          data: {
            inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code:
              updateAssessmentInput.assessment_details.inaction_reason_code ?
                {
                  connect: {
                    inaction_reason_code: updateAssessmentInput.assessment_details.inaction_reason_code
                  }
                } : undefined,
            action_not_required_ind: updateAssessmentInput.assessment_details.action_not_required_ind,
            update_user_id: updateAssessmentInput.update_user_id,
            update_utc_timestamp: new Date(),
          },
        });

        await db.lead.updateMany({
          where: { case_identifier: case_file_guid },
          data: {
            lead_identifier: updateAssessmentInput.lead_identifier,
            update_user_id: updateAssessmentInput.update_user_id,
            update_utc_timestamp: new Date()
          }
        });

        // "inaction_reason_code" column has foreign key but must accept nulls.
        // In Prisma for some reason it is not possible to assign null to a relation field.
        // Setting it to "undefined" like in previous statement has no effect.
        // The statement below is to update the field from a referenced value to null if nesessary
        if (!updateAssessmentInput.assessment_details.inaction_reason_code) {
          await db.case_file.update({
            where: { case_file_guid: case_file_guid },
            data: {
              inaction_reason_code: null,
            }
          });
        }

        for (const action of updateAssessmentInput.assessment_details.assessment_actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actiontypeCode,
              action_code: action.action_code
            },
            select: {
              action_type_action_xref_guid: true
            }
          });

          await db.action.updateMany({
            where: {
              case_guid: case_file_guid,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid
            },
            data: {
              actor_guid: action.actor_guid,
              action_date: action.action_date,
              active_ind: action.active_ind,
              update_user_id: updateAssessmentInput.update_user_id,
              update_utc_timestamp: new Date
            }
          });
        };
        let assessmentCount: number = updateAssessmentInput.assessment_details.assessment_actions.length;
        if (assessmentCount === 0) {
          await db.action.updateMany({
            where: { case_guid: case_file_guid },
            data: { active_ind: false }
          });
        };
      });
      caseFileOutput = await this.findOne(case_file_guid);
    }
    catch (exception) {
      console.log("exception", exception);
      throw new GraphQLError('Exception occurred. See server log for details', {
      });
    }
    return caseFileOutput;
  }

  remove(id: number) {
    return `This action removes a #${id} caseFile`;
  }
}
