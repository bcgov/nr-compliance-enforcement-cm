import { Injectable, Logger } from "@nestjs/common";
import { CreateAssessmentInput, CreateCaseInput, CreateEquipmentInput, CreatePreventionInput } from "./dto/create-case_file.input";
import { UpdateAssessmentInput, UpdatePreventionInput } from "./dto/update-case_file.input";
import { PrismaService } from "nestjs-prisma";
import { CaseFile } from "./entities/case_file.entity";
import { GraphQLError } from "graphql";
import { CreateSupplementalNoteInput } from "./dto/supplemental-note/create-supplemental-note.input";
import { ACTION_CODES } from "../common/action_codes";
import { UpdateSupplementalNoteInput } from "./dto/supplemental-note/update-supplemental-note.input";
import { ACTION_TYPE_CODES } from "../common/action_type_codes"
import { Action } from "./entities/case-action.entity";
import { CaseFileActionItem } from "./dto/case-file-action-item";
import { Equipment } from "./entities/equipment.entity";

@Injectable()
export class CaseFileService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(CaseFileService.name);

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
      throw new GraphQLError("Exception occurred. See server log for details", exception);
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

  //-----------
  //-- helpers
  //-----------

  //-- returns a collection of actions
  private getCaseActions = async (
    actions: Array<CaseFileActionItem>,
    actionTypeCode: string,
    actionCode: string = "",
  ): Promise<Array<Action>> => {
    let items = [];

    if (!actionCode) {
      items = actions.filter((action) => {
        const {
          action_type_action_xref: {
            action_type_code_action_type_action_xref_action_type_codeToaction_type_code: _actionTypeCode,
          },
        } = action;

        return _actionTypeCode.action_type_code === actionTypeCode;
      });
    } else {
      items = actions.filter((action) => {
        const {
          action_type_action_xref: {
            action_code_action_type_action_xref_action_codeToaction_code: _actionCode,
            action_type_code_action_type_action_xref_action_type_codeToaction_type_code: _actionTypeCode,
          },
        } = action;

        return _actionTypeCode.action_type_code === actionTypeCode && _actionCode.action_code === actionCode;
      });
    }

    const result = items.map(
      ({
        actor_guid: actor,
        action_date: date,
        active_ind: activeIndicator,
        action_type_action_xref: {
          action_code_action_type_action_xref_action_codeToaction_code: {
            action_code: actionCode,
            short_description: shortDescription,
            long_description: longDescription,
          },
        },
      }) => {
        return {
          actor,
          date,
          actionCode,
          shortDescription,
          longDescription,
          activeIndicator,
        } as Action;
      },
    );
    return result;
  };

  //-- returns a single action, if multiple actions exist the first action
  //-- will be returned
  private getCaseAction = async (
    actions: Array<CaseFileActionItem>,
    actionTypeCode: string,
    actionCode: string = "",
  ): Promise<Action> => {
    let item: CaseFileActionItem;

    if (!actionCode) {
      item = actions.find((action) => {
        const {
          action_type_action_xref: {
            action_type_code_action_type_action_xref_action_type_codeToaction_type_code: _actionTypeCode,
          },
        } = action;

        return _actionTypeCode.action_type_code === actionTypeCode;
      });
    } else {
      item = actions.find((action) => {
        const {
          action_type_action_xref: {
            action_code_action_type_action_xref_action_codeToaction_code: _actionCode,
            action_type_code_action_type_action_xref_action_type_codeToaction_type_code: _actionTypeCode,
          },
        } = action;

        return _actionTypeCode.action_type_code === actionTypeCode && _actionCode.action_code === actionCode;
      });
    }

    if (item) {
      const {
        actor_guid: actor,
        action_date: date,
        active_ind: activeIndicator,
        action_type_action_xref: {
          action_code_action_type_action_xref_action_codeToaction_code: {
            action_code: actionCode,
            short_description: shortDescription,
            long_description: longDescription,
          },
        },
      } = item;

      return {
        actor,
        date,
        actionCode,
        shortDescription,
        longDescription,
        activeIndicator,
      } as Action;
    }
  };

  findOne = async (id: string): Promise<CaseFile> => {
    const queryResult = await this.prisma.case_file.findUnique({
      where: {
        case_file_guid: id,
      },
      select: {
        case_file_guid: true,
        action_not_required_ind: true,
        inaction_reason_code: true,
        note_text: true,
        inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code: {
          select: {
            short_description: true,
            long_description: true,
            active_ind: true,
          },
        },
        lead: {
          select: {
            lead_identifier: true,
          },
        },
        action: {
          select: {
            actor_guid: true,
            action_date: true,
            active_ind: true,
            action_type_action_xref: {
              select: {
                action_code_action_type_action_xref_action_codeToaction_code: {
                  select: {
                    action_code: true,
                    short_description: true,
                    long_description: true,
                    active_ind: true,
                  },
                },
                action_type_code_action_type_action_xref_action_type_codeToaction_type_code: {
                  select: {
                    action_type_code: true,
                    short_description: true,
                    long_description: true,
                    active_ind: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const {
      case_file_guid: caseFileId,
      lead,
      action_not_required_ind: actionNotRequired,
      inaction_reason_code: inactionReasonCode,
      inaction_reason_code_case_file_inaction_reason_codeToinaction_reason_code: reason,
    } = queryResult;

    const equipmentDetails = await this._findEquipmentDetails(caseFileId);

    const caseFile: CaseFile = {
      caseIdentifier: caseFileId,
      leadIdentifier: lead[0].lead_identifier, //this is okay because there will only be one lead for a case... for now.
      assessmentDetails: {
        actionNotRequired: actionNotRequired,
        actionJustificationCode: inactionReasonCode,
        actionJustificationShortDescription: !reason ? "" : reason.short_description,
        actionJustificationLongDescription: !reason ? "" : reason.long_description,
        actionJustificationActiveIndicator: !reason ? false : reason.active_ind,
        actions: await this.getCaseActions(queryResult.action, ACTION_TYPE_CODES.COMPASSESS),
      },
      preventionDetails: {
        actions: await this.getCaseActions(queryResult.action, ACTION_TYPE_CODES.COSPRVANDEDU),
      },
      note: {
        note: queryResult.note_text,
        action: await this.getCaseAction(queryResult.action, ACTION_TYPE_CODES.CASEACTION, ACTION_CODES.UPDATENOTE),
      },
      equipmentDetails: equipmentDetails
    };

    return caseFile;
  };

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

  createNote = async (input: CreateSupplementalNoteInput): Promise<CaseFile> => {
    let caseFileId = "";

    const { leadIdentifier, note, createUserId, actor } = input;
    const caseFile = await this.findOneByLeadId(leadIdentifier);

    if (caseFile.caseIdentifier) {
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
  };

  private _upsertNote = async (caseId: string, note: string, actor: string, userId: string): Promise<CaseFile> => {
    const _hasAction = async (caseId: string): Promise<boolean> => {
      const xrefId = await _getNoteActionXref();

      const query = await this.prisma.action.findFirst({
        where: {
          case_guid: caseId,
          action_type_action_xref_guid: xrefId,
        },
      });
      return query !== null;
    };

    const _getNoteActionXref = async (): Promise<string> => {
      const query = await this.prisma.action_type_action_xref.findFirst({
        where: {
          action_code: ACTION_CODES.UPDATENOTE,
          action_type_code: ACTION_TYPE_CODES.CASEACTION,
        },
        select: {
          action_type_action_xref_guid: true,
        },
      });

      return query.action_type_action_xref_guid;
    };

    try {
      await this.prisma.$transaction(async (db) => {
        const current = new Date();

        const hasAction = await _hasAction(caseId);
        const xrefId = await _getNoteActionXref();

        //-- if an action doens't exist for the note create one
        //-- otherwise update the note action before updating the note
        if (!hasAction) {
          await db.action.create({
            data: {
              case_guid: caseId,
              action_type_action_xref_guid: xrefId,
              actor_guid: actor,
              action_date: current,
              create_user_id: userId,
              create_utc_timestamp: current,
              update_user_id: userId,
              update_utc_timestamp: current,
            },
          });
        } else {
          const action = await db.action.findFirst({
            where: {
              case_guid: caseId,
              action_type_action_xref_guid: xrefId,
            },
            select: {
              action_guid: true,
            },
          });

          await db.action.update({
            where: {
              action_guid: action.action_guid,
            },
            data: {
              actor_guid: actor,
              action_date: current,
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
  // find all equipment records, and their respective actions, for a given case
  async _findEquipmentDetails(caseIdentifier: string): Promise<Equipment[]> {
    const actions = await this.prisma.action.findMany({
      where: { case_guid: caseIdentifier },
      include: {
        equipment: true,
      },
    });

    // Initialize a map to hold equipment details keyed by equipment_guid
    const equipmentDetailsMap = new Map();

    // get all the action codes, we're looking for the action codes matching the action performed on the equipment
    const actionCodes = await this.prisma.action_type_action_xref.findMany({
      where: {
        action_type_action_xref_guid: {
          in: actions.map((item) => item.action_type_action_xref_guid),
        },
      },
      select: {
        action_code: true,
        action_type_action_xref_guid: true,
        action_code_action_type_action_xref_action_codeToaction_code: {
          select: {
            short_description: true,
            long_description: true,
            active_ind: true,
          },
        },
      },
    });

    // construct the equipmentDetails list
    actions.forEach((action) => {
      const equipment = action.equipment;

      // get the action xref for the action
      let actionData = actionCodes.find(
        (element) =>
          element.action_type_action_xref_guid ===
          action.action_type_action_xref_guid
      );
  
      if (equipment) {
        // Initialize or update the equipment detail entry in the map
        let equipmentDetail =
          equipmentDetailsMap.get(equipment.equipment_guid) ||
          ({
            actionEquipmentTypeCode: equipment.equipment_code,
            actionEquipmentTypeActiveIndicator: equipment.active_ind,
            address: equipment.equipment_location_desc,
            xCoordinate: "",
            yCoordinate: "",
            actions: [],
          } as Equipment);

        // Append the action to this equipment's list of actions
        equipmentDetail.actions.push({
          actor: action.actor_guid,
          date: action.action_date,
          activeIndicator: action.active_ind,
          actionCode: actionData.action_code,
        });

        equipmentDetailsMap.set(equipment.equipment_guid, equipmentDetail);
      }
    });
    const equipmentDetails = Array.from(
      equipmentDetailsMap.values()
    ) as Equipment[];

    return equipmentDetails;
  }

  async createEquipment(
    createEquipmentInput: CreateEquipmentInput
  ): Promise<CaseFile> {
    const actiontypeCode: string = "EQUIPMENT";
    const actionCode: string = "SETEQUIPMT";

    

    let caseFileOutput: CaseFile;
    try {
      await this.prisma.$transaction(async (db) => {

        let caseFile = await this.findOneByLeadId(
          createEquipmentInput.leadIdentifier
        );
        let caseFileGuid;
    
        if (caseFile?.caseIdentifier) {
          caseFileGuid = caseFile.caseIdentifier;
        } else {
          caseFileGuid = await this.createCase(createEquipmentInput);
        }

        const newEquipmentJSON = {
          active_ind: true,
          create_user_id: createEquipmentInput.createUserId,
          create_utc_timestamp: new Date(),
          update_user_id: createEquipmentInput.createUserId,
          update_utc_timestamp: new Date(),
          equipment_code:
            createEquipmentInput.equipmentDetails[0].actionEquipmentTypeCode,
          equipment_location_desc:
            createEquipmentInput.equipmentDetails[0].address,
          equipment_geometry_point:
            createEquipmentInput.equipmentDetails[0].equipmentGeometryPoint,
        }

        this.logger.debug(createEquipmentInput.equipmentDetails[0].address);
        this.logger.debug(`Creating equipment: ${JSON.stringify(newEquipmentJSON)}`);

        // create the equipment record
        const newEquipment = await db.equipment.create({
          data: newEquipmentJSON
        });

        this.logger.debug(`New Equipment: ${JSON.stringify(newEquipment)}`);

        let action_codes_objects = await db.action_type_action_xref.findMany({
          where: { action_type_code: actiontypeCode },
          select: { action_code: true },
        });
        let action_codes: Array<string> = [];
        for (const action_code_object of action_codes_objects) {
          action_codes.push(action_code_object.action_code);
        }

        const equipmentDetailsInstance =
          createEquipmentInput.equipmentDetails[0];
        const actions = equipmentDetailsInstance.actions;

        for (const action of actions) {
          if (action_codes.indexOf(action.actionCode) === -1) {
            throw "Some action code values where not passed from the client";
          }
        }

        for (const action of actions) {
          let actionTypeActionXref =
            await db.action_type_action_xref.findFirstOrThrow({
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
              action_type_action_xref_guid:
                actionTypeActionXref.action_type_action_xref_guid,
              actor_guid: action.actor,
              action_date: action.date,
              active_ind: action.activeIndicator,
              create_user_id: createEquipmentInput.createUserId,
              create_utc_timestamp: new Date(),
              equipment_guid: newEquipment.equipment_guid,
            },
          });
        }
        caseFileOutput = await this.findOne(caseFileGuid);
      });
      
    } catch (exception) {
      console.log("exception", exception);
      throw new GraphQLError(
        "Exception occurred. See server log for details",
        {}
      );
    }
    return caseFileOutput;
  }
}

 