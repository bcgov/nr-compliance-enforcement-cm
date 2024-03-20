import { Injectable } from '@nestjs/common';
import { CreateCaseFileInput } from './dto/create-case_file.input';
import { UpdateCaseFileInput } from './dto/update-case_file.input';
import { PrismaService } from "nestjs-prisma";
import { CaseFile } from './entities/case_file.entity';
import { AssessmentAction } from './entities/assessment-action.entity';
import { GraphQLError } from 'graphql';

@Injectable()
export class CaseFileService {
  constructor(private prisma: PrismaService) { }

  async create(createCaseFileInput: CreateCaseFileInput): Promise<CaseFile> {

    let actionTypeCode: string = "COMPASSESS";
    let preventionActionTypeCode: string = "COSPRV&EDU";
    let caseFileGuid: string;
    let caseFileOutput = new CaseFile();

    try {

      if (createCaseFileInput.leadIdentifier) {
        const existingCaseFile = await this.findOneByLeadId(createCaseFileInput.leadIdentifier);
        console.log("existingCaseFile", existingCaseFile);
        if (existingCaseFile != null && existingCaseFile.caseIdentifier != null) {
          throw new Error(`The case ${existingCaseFile.caseIdentifier} assosiated with lead id ${createCaseFileInput.leadIdentifier} already exist. 
                          Please run updateAssessment mutation.`, {
          });
        }
      }
      await this.prisma.$transaction(async (db) => {

        let case_file = await db.case_file.create({
          data: {
            agency_code: {
              connect: {
                agency_code: createCaseFileInput.agencyCode
              }
            },
            inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code:
            createCaseFileInput.assessmentDetails.actionJustificationCode ?
                {
                  connect: {
                    inaction_reason_code: createCaseFileInput.assessmentDetails.actionJustificationCode
                  }
                } : undefined,
            create_user_id: createCaseFileInput.createUserId,
            create_utc_timestamp: new Date(),
            action_not_required_ind: createCaseFileInput.assessmentDetails.actionNotRequired,
            case_code_case_file_case_codeTocase_code: {
              connect: {
                case_code: createCaseFileInput.caseCode
              }
            },
          }
        });

        caseFileGuid = case_file.case_file_guid;

        await db.lead.create({
          data: {
            lead_identifier: createCaseFileInput.leadIdentifier,
            case_identifier: caseFileGuid,
            create_user_id: createCaseFileInput.createUserId,
            create_utc_timestamp: new Date()
          }
        });

        //Assessment Codes
        let action_codes_objects = await db.action_type_action_xref.findMany({
          where: { action_type_code: actionTypeCode },
          select: { action_code: true }
        });
        let action_codes: Array<string> = [];
        for (const action_code_object of action_codes_objects) {
          action_codes.push(action_code_object.action_code);
        }
        for (const action of createCaseFileInput.assessmentDetails.actions) {
          if (action_codes.indexOf(action.actionCode) === -1) {
            throw "Some action code values where not passed from the client";
          };
        }

        for (const action of createCaseFileInput.assessmentDetails.actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actionTypeCode,
              action_code: action.actionCode
            },
            select: {
              action_type_action_xref_guid: true
            }
          });
          await db.action.create({
            data: {
              case_guid: caseFileGuid,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              actor_guid: action.actor,
              action_date: action.date,
              active_ind: action.activeIndicator,
              create_user_id: createCaseFileInput.createUserId,
              create_utc_timestamp: new Date
            }
          });
        }

        //Prevention Education
        action_codes_objects = await db.action_type_action_xref.findMany({
          where: { action_type_code: preventionActionTypeCode },
          select: { action_code: true }
        });
        action_codes = [];
        for (const action_code_object of action_codes_objects) {
          action_codes.push(action_code_object.action_code);
        }
        for (const action of createCaseFileInput.preventionDetails.actions) {
          if (action_codes.indexOf(action.actionCode) === -1) {
            throw "Some action code values where not passed from the client";
          };
        }

        for (const action of createCaseFileInput.preventionDetails.actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actionTypeCode,
              action_code: action.actionCode
            },
            select: {
              action_type_action_xref_guid: true
            }
          });
          await db.action.create({
            data: {
              case_guid: caseFileGuid,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              actor_guid: action.actor,
              action_date: action.date,
              active_ind: action.activeIndicator,
              create_user_id: createCaseFileInput.createUserId,
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

  async findOne(caseIdentifier: string) {

    let actiontypeCode: string = "COMPASSESS";
    let agencyCode: string = "COS"

    const lead = await this.prisma.lead.findFirst({
      where: {
        case_identifier: caseIdentifier,
      },
      select: {
        lead_identifier: true,
      },
    });

    const actionsBase = await this.prisma.action.findMany({
      where: {
        case_guid: caseIdentifier,
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
        action_type_code: actiontypeCode,
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
        actor: action.actor_guid,
        date: action.action_date,
        actionCode: actionData.action_code,
        shortDescription: actionData.action_code_action_type_action_xref_action_codeToaction_code.short_description,
        longDescription: actionData.action_code_action_type_action_xref_action_codeToaction_code.long_description,
        activeIndicator: action.active_ind,
      };
    });

    const assessment = await this.prisma.case_file.findFirst({
      where: {
        case_file_guid: caseIdentifier
      },
      select: {
        case_file_guid: true,
        action_not_required_ind: true,
        inaction_reason_code: true,
        inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code: {
          where: {
            agency_code: agencyCode
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
      caseIdentifier: assessment?.case_file_guid,
      leadIdentifier: lead?.lead_identifier,
      assessmentDetails:
      {
        actionNotRequired: assessment?.action_not_required_ind,
        actionJustificationCode: assessment?.inaction_reason_code,
        actionJustificationShortDescription: assessment?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.short_description,
        actionJustificationLongDescription: assessment?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.long_description,
        actionJustificationActiveIndicator: assessment?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.active_ind,
        actions: actions
      },
      preventionDetails:
      {
        actions: actions
      },
    };

    return case_file;

  }

  async findOneByLeadId(leadIdentifier: string) {

    let caseFileOutput: CaseFile = new CaseFile();
    const caseIdRecord = await this.prisma.lead.findFirst({
      where: {
        lead_identifier: leadIdentifier
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

  async update(caseIdentifier: string, updateCaseFileInput: UpdateCaseFileInput) {

    let actiontypeCode: string = "COMPASSESS";
    let caseFileOutput = new CaseFile();

    try {
      await this.prisma.$transaction(async (db) => {

        await db.case_file.update({
          where: { case_file_guid: caseIdentifier },
          data: {
            inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code:
            updateCaseFileInput.assessmentDetails.actionJustificationCode ?
                {
                  connect: {
                    inaction_reason_code: updateCaseFileInput.assessmentDetails.actionJustificationCode
                  }
                } : undefined,
            action_not_required_ind: updateCaseFileInput.assessmentDetails.actionNotRequired,
            update_user_id: updateCaseFileInput.updateUserId,
            update_utc_timestamp: new Date(),
          },
        });

        await db.lead.updateMany({
          where: { case_identifier: caseIdentifier },
          data: {
            lead_identifier: updateCaseFileInput.leadIdentifier,
            update_user_id: updateCaseFileInput.updateUserId,
            update_utc_timestamp: new Date()
          }
        });

        // "inaction_reason_code" column has foreign key but must accept nulls.
        // In Prisma for some reason it is not possible to assign null to a relation field.
        // Setting it to "undefined" like in previous statement has no effect.
        // The statement below is to update the field from a referenced value to null if nesessary
        if (!updateCaseFileInput.assessmentDetails.actionJustificationCode) {
          await db.case_file.update({
            where: { case_file_guid: caseIdentifier },
            data: {
              inaction_reason_code: null,
            }
          });
        }

        for (const action of updateCaseFileInput.assessmentDetails.actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actiontypeCode,
              action_code: action.actionCode
            },
            select: {
              action_type_action_xref_guid: true
            }
          });

          await db.action.updateMany({
            where: {
              case_guid: caseIdentifier,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid
            },
            data: {
              actor_guid: action.actor,
              action_date: action.date,
              active_ind: action.activeIndicator,
              update_user_id: updateCaseFileInput.updateUserId,
              update_utc_timestamp: new Date
            }
          });
        };
        let assessmentCount: number = updateCaseFileInput.assessmentDetails.actions.length;
        if (assessmentCount === 0) {
          await db.action.updateMany({
            where: { case_guid: caseIdentifier },
            data: { active_ind: false }
          });
        };
      });
      caseFileOutput = await this.findOne(caseIdentifier);
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
