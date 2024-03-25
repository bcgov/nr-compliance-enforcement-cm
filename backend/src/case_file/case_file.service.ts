import { Injectable } from "@nestjs/common";
import { CreateAssessmentInput, CreateCaseInput, CreatePreventionInput } from "./dto/create-case_file.input";
import { UpdateAssessmentInput, UpdatePreventionInput } from "./dto/update-case_file.input";
import { PrismaService } from "nestjs-prisma";
import { CaseFile } from "./entities/case_file.entity";
import { GraphQLError } from "graphql";
import { CreateSupplementalNoteInput } from "./dto/supplemental-note/create-supplemental-note.input";
import { Note } from "./entities/supplemental-note/supplemental-note.entity";
import { ACTION_CODES } from "../common/action_codes";
import { UpdateSupplementalNoteInput } from "./dto/supplemental-note/update-supplemental-note.input";

@Injectable()
export class CaseFileService {
  constructor(private prisma: PrismaService) {}

  async createAssessmentCase(createAssessmentInput: CreateAssessmentInput): Promise<string> {
    let caseFileGuid: string;

    try {
      await this.prisma.$transaction(async (db) => {
        let case_file = await db.case_file.create({
          data: {
            agency_code: {
              connect: {
                agency_code: createAssessmentInput.agencyCode,
              },
            },
            inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code: createAssessmentInput
              .assessmentDetails.actionJustificationCode
              ? {
                  connect: {
                    inaction_reason_code: createAssessmentInput.assessmentDetails.actionJustificationCode,
                  },
                }
              : undefined,
            create_user_id: createAssessmentInput.createUserId,
            create_utc_timestamp: new Date(),
            action_not_required_ind: createAssessmentInput.assessmentDetails.actionNotRequired,
            case_code_case_file_case_codeTocase_code: {
              connect: {
                case_code: createAssessmentInput.caseCode,
              },
            },
          },
        });

        caseFileGuid = case_file.case_file_guid;

        await db.lead.create({
          data: {
            lead_identifier: createAssessmentInput.leadIdentifier,
            case_identifier: caseFileGuid,
            create_user_id: createAssessmentInput.createUserId,
            create_utc_timestamp: new Date(),
          },
        });
      });
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
    return caseFileGuid;
  }

  async createOtherCase(createInput: CreatePreventionInput): Promise<string> {
    let caseFileGuid: string;

    try {
      await this.prisma.$transaction(async (db) => {
        let case_file = await db.case_file.create({
          data: {
            agency_code: {
              connect: {
                agency_code: createInput.agencyCode,
              },
            },
            create_user_id: createInput.createUserId,
            create_utc_timestamp: new Date(),
            case_code_case_file_case_codeTocase_code: {
              connect: {
                case_code: createInput.caseCode,
              },
            },
          },
        });

        caseFileGuid = case_file.case_file_guid;

        await db.lead.create({
          data: {
            lead_identifier: createInput.leadIdentifier,
            case_identifier: caseFileGuid,
            create_user_id: createInput.createUserId,
            create_utc_timestamp: new Date(),
          },
        });
      });
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
    return caseFileGuid;
  }

  //--
  //-- creates an initial case_file and lead element for the
  //-- selected complaint
  //--
  async createCase(input: CreateCaseInput): Promise<string> {
    let caseFileGuid: string;

    try {
      await this.prisma.$transaction(async (db) => {
        let case_file = await db.case_file.create({
          data: {
            agency_code: {
              connect: {
                agency_code: input.agencyCode,
              },
            },
            create_user_id: input.createUserId,
            create_utc_timestamp: new Date(),
            case_code_case_file_case_codeTocase_code: {
              connect: {
                case_code: input.caseCode,
              },
            },
          },
        });

        caseFileGuid = case_file.case_file_guid;

        await db.lead.create({
          data: {
            lead_identifier: input.leadIdentifier,
            case_identifier: caseFileGuid,
            create_user_id: input.createUserId,
            create_utc_timestamp: new Date(),
          },
        });
      });
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
    return caseFileGuid;
  }

  async createAssessment(createAssessmentInput: CreateAssessmentInput): Promise<CaseFile> {
    let actiontypeCode: string = "COMPASSESS";
    let caseFileGuid: string = await this.createAssessmentCase(createAssessmentInput);
    let caseFileOutput: CaseFile;
    try {
      await this.prisma.$transaction(async (db) => {
        let action_codes_objects = await db.action_type_action_xref.findMany({
          where: { action_type_code: actiontypeCode },
          select: { action_code: true },
        });
        let action_codes: Array<string> = [];
        for (const action_code_object of action_codes_objects) {
          action_codes.push(action_code_object.action_code);
        }
        for (const action of createAssessmentInput.assessmentDetails.actions) {
          if (action_codes.indexOf(action.actionCode) === -1) {
            throw "Some action code values where not passed from the client";
          }
        }

        for (const action of createAssessmentInput.assessmentDetails.actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actiontypeCode,
              action_code: action.actionCode,
            },
            select: {
              action_type_action_xref_guid: true,
            },
          });
          await db.action.create({
            data: {
              case_guid: caseFileGuid,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              actor_guid: action.actor,
              action_date: action.date,
              active_ind: action.activeIndicator,
              create_user_id: createAssessmentInput.createUserId,
              create_utc_timestamp: new Date(),
            },
          });
        }
      });
      caseFileOutput = await this.findOne(caseFileGuid);
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
    return caseFileOutput;
  }

  async createPrevention(createPreventionInput: CreatePreventionInput): Promise<CaseFile> {
    let actiontypeCode: string = "COSPRV&EDU";
    let caseFileGuid: string = await this.createOtherCase(createPreventionInput);
    let caseFileOutput: CaseFile;
    try {
      await this.prisma.$transaction(async (db) => {
        let action_codes_objects = await db.action_type_action_xref.findMany({
          where: { action_type_code: actiontypeCode },
          select: { action_code: true },
        });
        let action_codes: Array<string> = [];
        for (const action_code_object of action_codes_objects) {
          action_codes.push(action_code_object.action_code);
        }
        for (const action of createPreventionInput.preventionDetails.actions) {
          if (action_codes.indexOf(action.actionCode) === -1) {
            throw "Some action code values where not passed from the client";
          }
        }

        for (const action of createPreventionInput.preventionDetails.actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actiontypeCode,
              action_code: action.actionCode,
            },
            select: {
              action_type_action_xref_guid: true,
            },
          });
          await db.action.create({
            data: {
              case_guid: caseFileGuid,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              actor_guid: action.actor,
              action_date: action.date,
              active_ind: action.activeIndicator,
              create_user_id: createPreventionInput.createUserId,
              create_utc_timestamp: new Date(),
            },
          });
        }
      });
      caseFileOutput = await this.findOne(caseFileGuid);
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
    return caseFileOutput;
  }

  findAll() {
    return `This action returns all caseFile`;
  }

  async findOne(caseIdentifier: string) {
    let agencyCode: string = "COS";

    const _populateNotes = async (caseFile): Promise<Note> => {
      const { note_text: note, case_file_guid: caseId } = caseFile;
      let result = { note: "", action: { actor: "", action: "", date: undefined } } as Note;

      //-- use raw sql query to get the note action
      //-- TODO: try to replace with a proper prisma query
      const NOTES_QUERY = `SELECT a.action_type_action_xref_guid AS actionId, atax.action_code AS action, a.actor_guid AS actor, atax.create_utc_timestamp as created  FROM case_management.action_type_action_xref atax 
      JOIN case_management."action" a ON atax.action_type_action_xref_guid = a.action_type_action_xref_guid 
      JOIN case_management.case_file cf ON a.case_guid  = cf.case_file_guid 
      WHERE atax.action_code = '${ACTION_CODES.UPDATENOTE}'
      AND cf.case_file_guid = '${caseId}'
      ORDER BY atax.create_utc_timestamp, atax.update_utc_timestamp DESC 
      LIMIT 1`;

      const results: Array<{ actionId: string; action: string; actor: string; created: Date }> =
        await this.prisma.$queryRawUnsafe(NOTES_QUERY);

      //-- there will and should only be one item returned, check to mke sure there is a value
      //-- before trying to return the note
      if (results.length !== 0) {
        const { action, actor, created } = results[0];
        result = { ...result, note, action: { actor, action, date: created } };
      }

      return Promise.resolve(result);
    };

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
        active_ind: true,
      },
    });

    const assessmentActionCodes = await this.prisma.action_type_action_xref.findMany({
      where: {
        action_type_code: "COMPASSESS",
        action_type_action_xref_guid: { in: actionsBase.map((item) => item.action_type_action_xref_guid) },
      },
      select: {
        action_code: true,
        action_type_action_xref_guid: true,
        action_type_code: true,
        action_code_action_type_action_xref_action_codeToaction_code: {
          select: {
            short_description: true,
            long_description: true,
            active_ind: true,
          },
        },
      },
    });

    const preventionActionCodes = await this.prisma.action_type_action_xref.findMany({
      where: {
        action_type_code: "COSPRV&EDU",
        action_type_action_xref_guid: { in: actionsBase.map((item) => item.action_type_action_xref_guid) },
      },
      select: {
        action_code: true,
        action_type_action_xref_guid: true,
        action_type_code: true,
        action_code_action_type_action_xref_action_codeToaction_code: {
          select: {
            short_description: true,
            long_description: true,
            active_ind: true,
          },
        },
      },
    });

    const assessmentActions = assessmentActionCodes.map((action) => {
      let actionData = actionsBase.find(
        (element) => element.action_type_action_xref_guid === action.action_type_action_xref_guid,
      );
      if (actionData && actionData !== undefined) {
        return {
          actor: actionData.actor_guid,
          date: actionData.action_date,
          actionCode: action.action_code,
          shortDescription: action.action_code_action_type_action_xref_action_codeToaction_code.short_description,
          longDescription: action.action_code_action_type_action_xref_action_codeToaction_code.long_description,
          activeIndicator: actionData.active_ind,
        };
      }
    });

    const preventionActions = preventionActionCodes.map((action) => {
      let actionData = actionsBase.find(
        (element) => element.action_type_action_xref_guid === action.action_type_action_xref_guid,
      );
      if (actionData && actionData !== undefined) {
        return {
          actor: actionData.actor_guid,
          date: actionData.action_date,
          actionCode: action.action_code,
          shortDescription: action.action_code_action_type_action_xref_action_codeToaction_code.short_description,
          longDescription: action.action_code_action_type_action_xref_action_codeToaction_code.long_description,
          activeIndicator: actionData.active_ind,
        };
      }
    });

    const caseFile = await this.prisma.case_file.findFirst({
      where: {
        case_file_guid: caseIdentifier,
      },
      select: {
        case_file_guid: true,
        action_not_required_ind: true,
        inaction_reason_code: true,
        note_text: true,
        inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code: {
          where: {
            agency_code: agencyCode,
          },
          select: {
            active_ind: true,
            short_description: true,
            long_description: true,
          },
        },
      },
    });

    const case_file: CaseFile = {
      caseIdentifier: caseFile?.case_file_guid,
      leadIdentifier: lead?.lead_identifier,
      assessmentDetails: {
        actionNotRequired: caseFile?.action_not_required_ind,
        actionJustificationCode: caseFile?.inaction_reason_code,
        actionJustificationShortDescription:
          caseFile?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.short_description,
        actionJustificationLongDescription:
          caseFile?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.long_description,
        actionJustificationActiveIndicator:
          caseFile?.inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code?.active_ind,
        actions: assessmentActions,
      },
      preventionDetails: {
        actions: preventionActions,
      },
      note: await _populateNotes(caseFile),
    };
    return case_file;
  }

  async findOneByLeadId(leadIdentifier: string) {
    let caseFileOutput: CaseFile = new CaseFile();
    const caseIdRecord = await this.prisma.lead.findFirst({
      where: {
        lead_identifier: leadIdentifier,
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

  async updateAssessment(caseIdentifier: string, updateAssessmentInput: UpdateAssessmentInput) {
    let actionTypeCode: string = "COMPASSESS";
    let caseFileOutput: CaseFile;

    try {
      await this.prisma.$transaction(async (db) => {
        await db.case_file.update({
          where: { case_file_guid: caseIdentifier },
          data: {
            inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code: updateAssessmentInput
              .assessmentDetails.actionJustificationCode
              ? {
                  connect: {
                    inaction_reason_code: updateAssessmentInput.assessmentDetails.actionJustificationCode,
                  },
                }
              : undefined,
            action_not_required_ind: updateAssessmentInput.assessmentDetails.actionNotRequired,
            update_user_id: updateAssessmentInput.updateUserId,
            update_utc_timestamp: new Date(),
          },
        });

        await db.lead.updateMany({
          where: { case_identifier: caseIdentifier },
          data: {
            lead_identifier: updateAssessmentInput.leadIdentifier,
            update_user_id: updateAssessmentInput.updateUserId,
            update_utc_timestamp: new Date(),
          },
        });

        for (const action of updateAssessmentInput.assessmentDetails.actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actionTypeCode,
              action_code: action.actionCode,
            },
            select: {
              action_type_action_xref_guid: true,
              action_code: true,
              action_type_code: true,
            },
          });

          let actionXref = await db.action.findFirst({
            where: {
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              case_guid: caseIdentifier,
            },
            select: {
              action_type_action_xref_guid: true,
            },
          });

          if (actionXref) {
            await db.action.updateMany({
              where: {
                case_guid: caseIdentifier,
                action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              },
              data: {
                actor_guid: action.actor,
                action_date: action.date,
                active_ind: action.activeIndicator,
                update_user_id: updateAssessmentInput.updateUserId,
                update_utc_timestamp: new Date(),
              },
            });
          } else {
            await db.action.create({
              data: {
                case_guid: caseIdentifier,
                action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
                actor_guid: action.actor,
                action_date: action.date,
                active_ind: action.activeIndicator,
                create_user_id: updateAssessmentInput.updateUserId,
                create_utc_timestamp: new Date(),
              },
            });
          }
        }

        let assessmentCount: number = updateAssessmentInput.assessmentDetails.actions.length;
        if (assessmentCount === 0) {
          await db.action.updateMany({
            where: { case_guid: caseIdentifier },
            data: { active_ind: false },
          });
        }
      });

      caseFileOutput = await this.findOne(caseIdentifier);
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
    return caseFileOutput;
  }

  async updatePrevention(caseIdentifier: string, updatePreventionInput: UpdatePreventionInput) {
    let actionTypeCode: string = "COSPRV&EDU";
    let caseFileOutput: CaseFile;

    try {
      await this.prisma.$transaction(async (db) => {
        for (const action of updatePreventionInput.preventionDetails.actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: actionTypeCode,
              action_code: action.actionCode,
            },
            select: {
              action_type_action_xref_guid: true,
              action_code: true,
              action_type_code: true,
            },
          });

          let actionXref = await db.action.findFirst({
            where: {
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              case_guid: caseIdentifier,
            },
            select: {
              action_type_action_xref_guid: true,
            },
          });

          if (actionXref) {
            await db.action.updateMany({
              where: {
                case_guid: caseIdentifier,
                action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              },
              data: {
                actor_guid: action.actor,
                action_date: action.date,
                active_ind: action.activeIndicator,
                update_user_id: updatePreventionInput.updateUserId,
                update_utc_timestamp: new Date(),
              },
            });
          } else {
            await db.action.create({
              data: {
                case_guid: caseIdentifier,
                action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
                actor_guid: action.actor,
                action_date: action.date,
                active_ind: action.activeIndicator,
                create_user_id: updatePreventionInput.updateUserId,
                create_utc_timestamp: new Date(),
              },
            });
          }
        }
        let preventionCount: number = updatePreventionInput.preventionDetails.actions.length;
        if (preventionCount === 0) {
          await db.action.updateMany({
            where: { case_guid: caseIdentifier },
            data: { active_ind: false },
          });
        }
      });
      caseFileOutput = await this.findOne(caseIdentifier);
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
    return caseFileOutput;
  }

  remove(id: number) {
    return `This action removes a #${id} caseFile`;
  }

  hasCaseFile = async (leadId: string): Promise<boolean> => {
    const { lead: result } = await this.prisma.case_file.findFirst({
      select: {
        lead: {
          where: {
            lead_identifier: leadId,
          },
        },
      },
    });

    return result.length === 1;
  };

  createNote = async (input: CreateSupplementalNoteInput): Promise<CaseFile> => {
    const { leadIdentifier, note, createUserId, actor } = input;
    let caseFileId = "";

    if (await this.hasCaseFile(leadIdentifier)) {
      const caseFile = await this.findOneByLeadId(leadIdentifier);
      caseFileId = caseFile.caseIdentifier;
    } else {
      const caseInput: CreateCaseInput = { ...input };
      caseFileId = await this.createCase(caseInput);
    }

    return await this._upsertNote(caseFileId, note, actor, createUserId);
  };

  updateNote = async (input: UpdateSupplementalNoteInput): Promise<CaseFile> => {
    const { caseIdentifier: caseFileId, actor, note, updateUserId } = input;

    return await this._upsertNote(caseFileId, note, actor, updateUserId);
  }

  private _upsertNote = async (caseId: string, note: string, actor: string, userId: string): Promise<CaseFile> => {
    const _hasAction = async (caseId: string): Promise<boolean> => {
      const NOTES_QUERY = `SELECT a.action_type_action_xref_guid AS actionId FROM case_management.action_type_action_xref atax 
      JOIN case_management."action" a ON atax.action_type_action_xref_guid = a.action_type_action_xref_guid 
      JOIN case_management.case_file cf ON a.case_guid  = cf.case_file_guid 
      WHERE atax.action_code = '${ACTION_CODES.UPDATENOTE}'
      AND cf.case_file_guid = '${caseId}'
      ORDER BY atax.create_utc_timestamp, atax.update_utc_timestamp DESC 
      LIMIT 1`;

      const result: Array<{ actionId: string }> = await this.prisma.$queryRawUnsafe(NOTES_QUERY);

      return result.length !== 0;
    };

    const _getActionXref = async (caseId: string): Promise<string> => {
      const GET_ACTION_XREF_QUERY = `SELECT a.action_type_action_xref_guid AS actionId FROM case_management.action_type_action_xref atax
      JOIN case_management."action" a ON atax.action_type_action_xref_guid = a.action_type_action_xref_guid
      JOIN case_management.case_file cf ON a.case_guid  = cf.case_file_guid
      WHERE atax.action_code = '${ACTION_CODES.UPDATENOTE}'
      AND cf.case_file_guid = '${caseId}'
      ORDER BY atax.create_utc_timestamp, atax.update_utc_timestamp DESC
      LIMIT 1`;

      const result: Array<{ actionid: string }> = await this.prisma.$queryRawUnsafe(GET_ACTION_XREF_QUERY);

      if (result === null || result.length === 0) {
        console.log(
          "exception: unable to create supplemental note",
          `Unable to return action_type_action_xref for case_file: ${caseId}`,
        );
        throw new GraphQLError("Exception occurred. See server log for details", {});
      }

      return result[0].actionid;
    };

    //-- the xref is what is going to put every together and this reference is used to
    //-- connect the xref to the action and inturn the action to the case file
    const ACTION_TYPE_CODE = "CASEACTION";

    try {
      await this.prisma.$transaction(async (db) => {
        const current = new Date();

        if (await _hasAction(caseId)) {
          const xrefId = await _getActionXref(caseId);
          await db.action_type_action_xref.update({
            where: {
              action_type_action_xref_guid: xrefId,
            },
            data: {
              update_user_id: userId,
              update_utc_timestamp: current,
            },
          });

          await db.action.updateMany({
            where: {
              case_guid: caseId,
              action_type_action_xref_guid: xrefId,
            },
            data: {
              actor_guid: actor,
              action_date: current,
              update_user_id: userId,
              update_utc_timestamp: current,
            },
          });
        } else {
          const xref = await db.action_type_action_xref.create({
            data: {
              action_code: ACTION_CODES.UPDATENOTE,
              action_type_code: ACTION_TYPE_CODE,
              display_order: 1,
              create_user_id: userId,
              create_utc_timestamp: current,
              update_user_id: userId,
              update_utc_timestamp: current,
            },
          });

          const action = await db.action.create({
            data: {
              case_guid: caseId,
              action_type_action_xref_guid: xref.action_type_action_xref_guid,
              actor_guid: actor,
              action_date: current,
              create_user_id: userId,
              create_utc_timestamp: current,
              update_user_id: userId,
              update_utc_timestamp: current,
            },
          });
        }

        //-- the system can't create a note as the note is part of the case file
        //-- this means that the note will always update the case file
        await db.case_file.update({
          where: {
            case_file_guid: caseId,
          },
          data: {
            note_text: note,
            update_user_id: userId,
            update_utc_timestamp: current,
          },
        });
      });

      return await this.findOne(caseId);
    } catch (error) {
      console.log("exception: unable to create supplemental note", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };
}
