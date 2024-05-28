import { Injectable, Logger } from "@nestjs/common";
import { CreateAssessmentInput, CreateCaseInput, CreatePreventionInput } from "./dto/create-case_file.input";
import { UpdateAssessmentInput, UpdateEquipmentInput, UpdatePreventionInput } from "./dto/update-case_file.input";
import { PrismaService } from "nestjs-prisma";
import { CaseFile } from "./entities/case_file.entity";
import { GraphQLError } from "graphql";
import { CreateSupplementalNoteInput } from "./dto/supplemental-note/create-supplemental-note.input";
import { ACTION_CODES } from "../common/action_codes";
import { UpdateSupplementalNoteInput } from "./dto/supplemental-note/update-supplemental-note.input";
import { ACTION_TYPE_CODES } from "../common/action_type_codes";
import { ReviewInput } from "./dto/review-input";
import { CaseFileActionService } from "../case_file_action/case_file_action.service";
import { Equipment } from "./entities/equipment.entity";
import { DeleteEquipmentInput } from "./dto/equipment/delete-equipment.input";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { DeleteSupplementalNoteInput } from "./dto/supplemental-note/delete-supplemental-note.input";
import { CreateWildlifeInput } from "./dto/wildlife/create-wildlife-input";
import { WildlifeInput } from "./dto/wildlife/wildlife-input";
import { EarTagInput } from "./dto/wildlife/ear-tag-input";
import { DrugInput } from "./dto/wildlife/drug-input";
import { WildlifeAction } from "./dto/wildlife/wildlife-action";
import { DrugUsed, EarTag, Wildlife } from "./entities/wildlife-entity";
import { SubjectQueryResult } from "./dto/subject-query-result";
import { DeleteWildlifeInput } from "./dto/wildlife/delete-wildlife-input";
import { UpdateWildlifeInput } from "./dto/wildlife/update-wildlife-input";

@Injectable()
export class CaseFileService {
  constructor(
    private prisma: PrismaService,
    private readonly caseFileActionService: CaseFileActionService,
  ) {}

  private readonly logger = new Logger(CaseFileService.name);

  //--
  //-- creates an initial case_file and lead element for the
  //-- selected complaint
  //--
  async createCase(
    db: Omit<
      PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
      "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
    >,
    input: CreateCaseInput,
  ): Promise<string> {
    let caseFileGuid: string;

    try {
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

      const lead = await db.lead.create({
        data: {
          lead_identifier: input.leadIdentifier,
          case_identifier: caseFileGuid,
          create_user_id: input.createUserId,
          create_utc_timestamp: new Date(),
        },
      });
    } catch (exception) {
      throw new GraphQLError("Exception occurred. See server log for details", exception);
    }
    return caseFileGuid;
  }

  //------------------
  //-- assessments
  //------------------
  async createAssessment(createAssessmentInput: CreateAssessmentInput): Promise<CaseFile> {
    const _createAssessmentCase = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      createAssessmentInput: CreateAssessmentInput,
    ): Promise<string> => {
      let caseFileGuid: string;

      try {
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
      } catch (exception) {
        throw new GraphQLError("Exception occurred. See server log for details", {});
      }
      return caseFileGuid;
    };

    let caseFileOutput: CaseFile;

    try {
      let caseFileGuid: string = "";

      await this.prisma.$transaction(async (db) => {
        caseFileGuid = await _createAssessmentCase(db, createAssessmentInput);

        let action_codes_objects = await db.action_type_action_xref.findMany({
          where: { action_type_code: ACTION_TYPE_CODES.COMPASSESS },
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
              action_type_code: ACTION_TYPE_CODES.COMPASSESS,
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

  findOne = async (id: string): Promise<CaseFile> => {
    const equipmentDetails = await this.findEquipmentDetails(id);
    const queryResult = await this.prisma.case_file.findUnique({
      where: {
        case_file_guid: id,
      },
      select: {
        case_file_guid: true,
        review_required_ind: true,
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
        wildlife: {
          where: {
            active_ind: true,
          },
          select: {
            wildlife_guid: true,
            species_code: true,
            age_code: true,
            sex_code: true,
            conflict_history_code: true,
            threat_level_code: true,
            hwcr_outcome_code: true,
            create_utc_timestamp: true,
            drug_administered: {
              where: {
                active_ind: true,
              },
            },
            ear_tag: {
              where: {
                active_ind: true,
              },
            },
            action: {
              where: {
                active_ind: true,
              },
              select: {
                action_guid: true,
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
      review_required_ind: isReviewRequired,
    } = queryResult;

    const reviewCompleteAction = await this.caseFileActionService.findActionByCaseIdAndCaseCode(
      caseFileId,
      ACTION_CODES.COMPLTREVW,
    );

    const assessmentActions = await this.caseFileActionService.findActionsByCaseIdAndType(
      caseFileId,
      ACTION_TYPE_CODES.COMPASSESS,
    );

    const preventionActions = await this.caseFileActionService.findActionsByCaseIdAndType(
      caseFileId,
      ACTION_TYPE_CODES.COSPRVANDEDU,
    );

    let caseFile: CaseFile = {
      caseIdentifier: caseFileId,
      leadIdentifier: lead[0].lead_identifier, //this is okay because there will only be one lead for a case... for now.
      assessmentDetails: assessmentActions
        ? {
            actionNotRequired: actionNotRequired,
            actionJustificationCode: inactionReasonCode,
            actionJustificationShortDescription: !reason ? "" : reason.short_description,
            actionJustificationLongDescription: !reason ? "" : reason.long_description,
            actionJustificationActiveIndicator: !reason ? false : reason.active_ind,
            actions: assessmentActions,
          }
        : null,
      preventionDetails: preventionActions
        ? {
            actions: preventionActions,
          }
        : null,
      isReviewRequired: isReviewRequired,
      reviewComplete: reviewCompleteAction ?? null,
      note: queryResult.note_text
        ? {
            note: queryResult.note_text,
            action: await this.caseFileActionService.findActionByCaseIdAndCaseCode(caseFileId, ACTION_CODES.UPDATENOTE),
          }
        : null,
      equipment: equipmentDetails,
      //-- for now wildlife will populate the subject property
      //-- though this may not be the case at a later date
    };

    //-- add the wildlife items to the subject if there
    //-- are results to add to the casefile
    if (queryResult.wildlife) {
      caseFile.subject = await this._getCaseFileSubjects(queryResult);
    }

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
          let actionTypeActionXref = await this.prisma.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: ACTION_TYPE_CODES.COMPASSESS,
              action_code: action.actionCode,
            },
            select: {
              action_type_action_xref_guid: true,
              action_code: true,
              action_type_code: true,
            },
          });

          let actionXref = await this.prisma.action.findFirst({
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

  //--------------------------
  //-- prevention & education
  //--------------------------
  async createPrevention(createPreventionInput: CreatePreventionInput): Promise<CaseFile> {
    const _createPreventionCase = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      createInput: CreatePreventionInput,
    ): Promise<string> => {
      let caseFileGuid: string;

      try {
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
      } catch (exception) {
        throw new GraphQLError("Exception occurred. See server log for details", {});
      }
      return caseFileGuid;
    };

    let caseFileOutput: CaseFile;
    try {
      let caseFileGuid: string = "";

      await this.prisma.$transaction(async (db) => {
        caseFileGuid = await _createPreventionCase(db, createPreventionInput);

        let action_codes_objects = await this.prisma.action_type_action_xref.findMany({
          where: { action_type_code: ACTION_TYPE_CODES.COSPRVANDEDU },
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
          let actionTypeActionXref = await this.prisma.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: ACTION_TYPE_CODES.COSPRVANDEDU,
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

  async updatePrevention(caseIdentifier: string, updatePreventionInput: UpdatePreventionInput) {
    let caseFileOutput: CaseFile;

    try {
      await this.prisma.$transaction(async (db) => {
        for (const action of updatePreventionInput.preventionDetails.actions) {
          let actionTypeActionXref = await this.prisma.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: ACTION_TYPE_CODES.COSPRVANDEDU,
              action_code: action.actionCode,
            },
            select: {
              action_type_action_xref_guid: true,
              action_code: true,
              action_type_code: true,
            },
          });

          let actionXref = await this.prisma.action.findFirst({
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

  //------------------
  //-- file review
  //------------------
  async createReview(reviewInput: ReviewInput): Promise<CaseFile> {
    const _createReviewCase = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      reviewInput: ReviewInput,
    ): Promise<string> => {
      try {
        let caseFileId: string;
        await this.prisma.$transaction(async (db) => {
          //create case
          const caseFile = await db.case_file.create({
            data: {
              agency_code: {
                connect: {
                  agency_code: reviewInput.agencyCode,
                },
              },
              create_user_id: reviewInput.userId,
              create_utc_timestamp: new Date(),
              review_required_ind: true,
              case_code_case_file_case_codeTocase_code: {
                connect: {
                  case_code: reviewInput.caseCode,
                },
              },
            },
          });
          caseFileId = caseFile.case_file_guid;

          await db.lead.create({
            data: {
              lead_identifier: reviewInput.leadIdentifier,
              case_identifier: caseFile.case_file_guid,
              create_user_id: reviewInput.userId,
              create_utc_timestamp: new Date(),
            },
          });
        });
        return caseFileId;
      } catch (err) {
        this.logger.error(err);
        throw new GraphQLError("Error in createReviewCase", {});
      }
    };

    const _createReviewComplete = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      reviewInput: ReviewInput,
    ): Promise<string> => {
      try {
        let actionId: string;

        let actionTypeActionXref = await this.prisma.action_type_action_xref.findFirstOrThrow({
          where: {
            action_type_code: ACTION_TYPE_CODES.CASEACTION,
            action_code: ACTION_CODES.COMPLTREVW,
          },
          select: {
            action_type_action_xref_guid: true,
          },
        });
        const reviewAction = await db.action.create({
          data: {
            case_guid: reviewInput.caseIdentifier,
            action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
            actor_guid: reviewInput.reviewComplete.actor,
            action_date: reviewInput.reviewComplete.date,
            active_ind: true, //True: review complete, false: review not complete
            create_user_id: reviewInput.userId,
            create_utc_timestamp: new Date(),
          },
        });
        return reviewAction.action_guid;
      } catch (err) {
        this.logger.error(err);
        throw new GraphQLError("Error in createReviewComplete", {});
      }
    };

    try {
      let result = {
        ...reviewInput,
      };

      await this.prisma.$transaction(async (db) => {
        //If case is not exists -> create case
        if (!reviewInput.caseIdentifier) {
          const caseFileId = await _createReviewCase(db, reviewInput);
          result.caseIdentifier = caseFileId;
          result.isReviewRequired = true;
        }
        //Else update review_required_ind
        else {
          const caseFile = await db.case_file.update({
            where: {
              case_file_guid: reviewInput.caseIdentifier,
            },
            data: {
              review_required_ind: reviewInput.isReviewRequired,
            },
          });
          result.isReviewRequired = caseFile.review_required_ind;

          //if isReviewRequired && reviewComplete, create reviewComplete action
          if (reviewInput.isReviewRequired && reviewInput.reviewComplete && !reviewInput.reviewComplete.actionId) {
            const actionId = await _createReviewComplete(db, reviewInput);
            reviewInput.reviewComplete.actionId = actionId;
          }
        }
      });
      return result;
    } catch (err) {
      this.logger.error(err);
      throw new GraphQLError("Error in createReview", {});
    }
  }

  async updateReview(reviewInput: ReviewInput): Promise<CaseFile> {
    try {
      const { isReviewRequired, caseIdentifier, reviewComplete } = reviewInput;
      await this.prisma.$transaction(async (db) => {
        // Update review_required_ind in table case_file
        await db.case_file.update({
          where: {
            case_file_guid: caseIdentifier,
          },
          data: {
            review_required_ind: isReviewRequired,
          },
        });

        // If reviewComplete is provided, update the corresponding action
        if (reviewComplete && reviewComplete.actionId) {
          const { actionId, activeIndicator } = reviewComplete;

          await db.action.update({
            where: {
              action_guid: actionId,
            },
            data: {
              active_ind: activeIndicator,
            },
          });
        }
      });

      return this.findOneByLeadId(caseIdentifier);
    } catch (err) {
      this.logger.error(err);
      throw new GraphQLError("Error in updateReview", {});
    }
  }

  //----------------------
  //-- supplemental notes
  //----------------------
  createNote = async (model: CreateSupplementalNoteInput): Promise<CaseFile> => {
    let caseFileId = "";

    try {
      let result: CaseFile;

      await this.prisma.$transaction(async (db) => {
        const { leadIdentifier, note, createUserId, actor } = model;
        const caseFile = await this.findOneByLeadId(leadIdentifier);

        if (caseFile && caseFile?.caseIdentifier) {
          caseFileId = caseFile.caseIdentifier;
        } else {
          const caseInput: CreateCaseInput = { ...model };
          caseFileId = await this.createCase(db, caseInput);
        }

        await this._upsertNote(db, caseFileId, note, actor, createUserId);
      });

      result = await this.findOne(caseFileId);

      return result;
    } catch (error) {
      this.logger.error("exception: unable to create supplemental note", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };

  updateNote = async (model: UpdateSupplementalNoteInput): Promise<CaseFile> => {
    const { caseIdentifier: caseFileId, actor, note, updateUserId, actionId } = model;

    try {
      let result: CaseFile;

      await this.prisma.$transaction(async (db) => {
        const caseId = await this._upsertNote(db, caseFileId, note, actor, updateUserId, actionId);

        result = await this.findOne(caseId);
      });

      return result;
    } catch (error) {
      this.logger.error("exception: unable to update supplemental note", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };

  private _upsertNote = async (
    db: Omit<
      PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
      "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
    >,
    caseId: string,
    note: string,
    actor: string,
    userId: string,
    actionId: string = "",
  ): Promise<string> => {
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
            active_ind: true,
            action_date: current,
            create_user_id: userId,
            create_utc_timestamp: current,
            update_user_id: userId,
            update_utc_timestamp: current,
          },
        });
      } else if (hasAction && !actionId) {
        //-- create a new note when there is an existing action (note was deleted)
        //-- and there is no actionId
        const action = await this.prisma.action.findFirst({
          select: {
            action_guid: true,
          },
          where: {
            case_guid: caseId,
            action_type_action_xref_guid: xrefId,
          },
        });

        await db.action.update({
          where: {
            action_guid: action.action_guid,
          },
          data: {
            actor_guid: actor,
            active_ind: true,
            action_date: current,
            update_user_id: userId,
            update_utc_timestamp: current,
          },
        });
      } else {
        await db.action.update({
          where: {
            action_guid: actionId,
          },
          data: {
            actor_guid: actor,
            active_ind: true,
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

      return caseId;
    } catch (error) {
      this.logger.error("exception: unable to create supplemental note", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };

  deleteNote = async (model: DeleteSupplementalNoteInput): Promise<CaseFile> => {
    const { caseIdentifier, updateUserId: userId, actor, actionId } = model;
    const current = new Date();

    try {
      await this.prisma.$transaction(async (db) => {
        if (!actionId || !caseIdentifier) {
          throw new Error(`Unable to delete note for caseIdentifier: ${caseIdentifier}`);
        }

        await db.case_file.update({
          where: {
            case_file_guid: caseIdentifier,
          },
          data: {
            note_text: "",
            update_user_id: userId,
            update_utc_timestamp: current,
          },
        });

        await db.action.update({
          where: {
            action_guid: actionId,
          },
          data: {
            actor_guid: actor,
            action_date: current,
            active_ind: false,
            update_user_id: userId,
            update_utc_timestamp: current,
          },
        });
      });

      return await this.findOne(caseIdentifier);
    } catch (error) {
      this.logger.error("exception: unable to delete supplemental note", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };

  //------------------
  //-- equipment
  //------------------
  async createEquipment(createEquipmentInput: CreateCaseInput): Promise<CaseFile> {
    let caseFileOutput: CaseFile;
    let caseFileGuid;
    try {
      await this.prisma.$transaction(async (db) => {
        let caseFile = await this.findOneByLeadId(createEquipmentInput.leadIdentifier);

        if (caseFile?.caseIdentifier) {
          caseFileGuid = caseFile.caseIdentifier;
        } else {
          caseFileGuid = await this.createCase(db, createEquipmentInput);
        }

        const createdDate = new Date();

        const newEquipmentJSON = {
          active_ind: true,
          create_user_id: createEquipmentInput.createUserId,
          create_utc_timestamp: createdDate,
          update_user_id: createEquipmentInput.createUserId,
          update_utc_timestamp: createdDate,
          equipment_code: createEquipmentInput.equipment[0].typeCode,
          equipment_location_desc: createEquipmentInput.equipment[0].address,
          was_animal_captured: createEquipmentInput.equipment[0].wasAnimalCaptured,
          // exclude equipment_geometry_point because prisma can't handle this =gracefully
        };

        this.logger.debug(`Creating equipment: ${JSON.stringify(newEquipmentJSON)}`);

        // create the equipment record
        const newEquipment = await db.equipment.create({
          data: newEquipmentJSON,
        });

        // constructing a geometry type to update the equipment record with
        // prisma doesn't handle geometry types, so we have to create this as a string and insert it
        const xCoordinate = createEquipmentInput.equipment[0].xCoordinate;
        const yCoordinate = createEquipmentInput.equipment[0].yCoordinate;

        if (xCoordinate && yCoordinate) {
          const pointWKT = `POINT(${xCoordinate} ${yCoordinate})`;

          // update the equipment record to set the coordinates
          // using raw query because prisma can't handle the awesomeness
          await this.prisma.$executeRaw`SET search_path TO public, case_management`;
          const geometryUpdateQuery = `
          UPDATE case_management.equipment
          SET equipment_geometry_point = public.ST_GeomFromText($1, 4326)
          WHERE equipment_guid = $2::uuid;
        `;

          // Execute the update with safe parameter binding
          try {
            await db.$executeRawUnsafe(
              geometryUpdateQuery,
              pointWKT, // WKT string for the POINT
              newEquipment.equipment_guid, // UUID of the equipment
            );
            this.logger.debug(`Updated geometry for equipment GUID: ${newEquipment.equipment_guid}`);
          } catch (error) {
            this.logger.error("An error occurred during the geometry update:", error);
            throw new Error("Failed to update equipment geometry due to a database error.");
          }
        }

        this.logger.debug(`New Equipment: ${JSON.stringify(newEquipment)}`);

        // we can only create one equipment at a time, so just grab the first one.
        const equipmentDetailsInstance = createEquipmentInput.equipment[0];
        const actions = equipmentDetailsInstance.actions;

        // get the actions associated with the creation of the equipment.  We may be setting an equipment, or setting and removing an equipment
        for (const action of actions) {
          let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
            where: {
              action_type_code: ACTION_TYPE_CODES.EQUIPMENT,
              action_code: action.actionCode,
            },
            select: {
              action_type_action_xref_guid: true,
            },
          });

          // create the action records (this may either be setting an equipment or removing an equipment)
          const data = {
            case_guid: caseFileGuid,
            action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
            actor_guid: action.actor,
            action_date: action.date,
            active_ind: action.activeIndicator,
            create_user_id: createEquipmentInput.createUserId,
            create_utc_timestamp: new Date(),
            equipment_guid: newEquipment.equipment_guid,
          };

          this.logger.debug(`Creating new action record for equipment: ${JSON.stringify(data)}`);
          await db.action.create({
            data: data,
          });
        }
      });
      caseFileOutput = await this.findOne(caseFileGuid);
    } catch (exception) {
      this.logger.error("An error occurred during equipment creation:", exception);
      throw new GraphQLError("An error occurred during equipment creation. See server log for details");
    }
    return caseFileOutput;
  }

  async updateEquipment(updateEquipmentInput: UpdateEquipmentInput): Promise<CaseFile> {
    let caseFileOutput: CaseFile;

    let caseFile = await this.findOneByLeadId(updateEquipmentInput.leadIdentifier);

    try {
      await this.prisma.$transaction(async (db) => {
        // we're updating a single equipment record, so only one equipment was provided.
        const equipmentRecord = updateEquipmentInput.equipment[0];
        const equipmentGuid = equipmentRecord.id;
        const existingEquipment = await db.equipment.findUnique({
          where: { equipment_guid: equipmentGuid },
        });

        if (!existingEquipment) {
          throw new Error("Equipment not found");
        }

        const data = {
          equipment_code: equipmentRecord.typeCode,
          equipment_location_desc: equipmentRecord.address,
          active_ind: equipmentRecord.actionEquipmentTypeActiveIndicator,
          was_animal_captured: equipmentRecord.wasAnimalCaptured,
        };

        // Update the equipment record
        await db.equipment.update({
          where: { equipment_guid: equipmentGuid },
          data: data,
        });

        // constructing a geometry type to update the equipment record with
        // prisma doesn't handle geometry types, so we have to create this as a string and insert it
        const xCoordinate = updateEquipmentInput.equipment[0].xCoordinate;
        const yCoordinate = updateEquipmentInput.equipment[0].yCoordinate;
        const pointWKT = xCoordinate && yCoordinate ? `POINT(${xCoordinate} ${yCoordinate})` : null;

        // update the equipment record to set the coordinates
        // using raw query because prisma can't handle the awesomeness
        await this.prisma.$executeRaw`SET search_path TO public, case_management`;
        const geometryUpdateQuery = `
          UPDATE case_management.equipment
          SET equipment_geometry_point = public.ST_GeomFromText($1, 4326)
          WHERE equipment_guid = $2::uuid;
        `;

        // Execute the update with safe parameter binding
        try {
          await db.$executeRawUnsafe(
            geometryUpdateQuery,
            pointWKT, // WKT string for the POINT
            equipmentGuid, // UUID of the equipment
          );
          this.logger.debug(`Updated geometry for equipment GUID: ${equipmentGuid}`);
        } catch (error) {
          this.logger.error("An error occurred during the geometry update:", error);
          throw new Error("Failed to update equipment geometry due to a database error.");
        }

        // Check for updated or added actions
        const actions = equipmentRecord.actions;
        for (const action of actions) {
          if (action.actionGuid) {
            this.logger.debug(`Updating equipment action: ${JSON.stringify(action)}`);
            // If actionGuid exists, it means the action already exists and needs to be updated
            await db.action.update({
              where: { action_guid: action.actionGuid },
              data: {
                action_date: action.date,
                actor_guid: action.actor,
                update_utc_timestamp: new Date(),
              },
            });
          } else {
            // we're adding a new action, so find the action type action xref needed for this
            this.logger.debug(`Creating new equipment action: ${JSON.stringify(action)}`);
            let actionTypeActionXref = await db.action_type_action_xref.findFirstOrThrow({
              where: {
                action_type_code: ACTION_TYPE_CODES.EQUIPMENT,
                action_code: action.actionCode,
              },
              select: {
                action_type_action_xref_guid: true,
              },
            });

            this.logger.debug(`Found action xref`);
            const caseFileGuid = caseFile.caseIdentifier;
            // create the action records (this may either be setting an equipment or removing an equipment)
            const data = {
              case_guid: caseFileGuid,
              action_type_action_xref_guid: actionTypeActionXref.action_type_action_xref_guid,
              actor_guid: action.actor,
              action_date: action.date,
              active_ind: action.activeIndicator,
              create_user_id: updateEquipmentInput.updateUserId,
              create_utc_timestamp: new Date(),
              equipment_guid: equipmentGuid,
            };

            this.logger.debug(`Adding new equipment action as part of an update: ${JSON.stringify(data)}`);

            await db.action.create({
              data: data,
            });
          }
        }
      });

      const caseFileGuid = caseFile.caseIdentifier;
      caseFileOutput = await this.findOne(caseFileGuid);
    } catch (error) {
      this.logger.error("An error occurred during equipment update:", error);
      throw new GraphQLError("An error occurred during equipment update. See server log for details", error);
    }
    return caseFileOutput;
  }

  async deleteEquipment(deleteEquipmentInput: DeleteEquipmentInput): Promise<boolean> {
    try {
      // Find the equipment record by its ID
      const equipment = await this.prisma.equipment.findUnique({
        where: {
          equipment_guid: deleteEquipmentInput.id,
        },
      });

      if (!equipment) {
        throw new Error(`Equipment with ID ${deleteEquipmentInput.id} not found.`);
      }

      // Update the active_ind field to false
      await this.prisma.equipment.update({
        where: {
          equipment_guid: deleteEquipmentInput.id,
        },
        data: {
          active_ind: false,
          update_user_id: deleteEquipmentInput.updateUserId,
          update_utc_timestamp: new Date(),
        },
      });

      this.logger.debug(`Equipment with ID ${deleteEquipmentInput.id} has been updated successfully.`);
      return true;
    } catch (error) {
      this.logger.error("Error deleting equipment:", error);
      return false;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  // find all equipment records, and their respective actions, for a given case
  // Since we want to list the equipment related to a case, rather than the actions for a case, which may contain equipment, let's
  // transform the actions with equipment to equipment with actions.
  private findEquipmentDetails = async (caseIdentifier: string): Promise<Equipment[]> => {
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
    for (const action of actions) {
      const equipment = action.equipment;

      // get the action xref for the action
      let actionData = actionCodes.find(
        (element) => element.action_type_action_xref_guid === action.action_type_action_xref_guid,
      );

      if (equipment && equipment.active_ind) {
        // prisma doesn't support the geometry type, for now, it's just treated as a string
        // Parse the geometry string into a GeoJSON object

        // Correctly setting the search path using Prisma
        await this.prisma.$executeRaw`SET search_path TO public, case_management`;

        // get the latitude and longitude using a raw query
        const result = await this.prisma.$queryRaw<{ longitude: number; latitude: number }[]>`
            SELECT 
              public.st_x(equipment_geometry_point::geometry) AS longitude, 
              public.st_y(equipment_geometry_point::geometry) AS latitude
            FROM 
              ${Prisma.raw("case_management.equipment")}
            WHERE 
              equipment_guid = ${Prisma.raw(`'${equipment.equipment_guid}'::uuid`)}
          `;

        const { longitude, latitude } = result[0];

        const longitudeString = longitude?.toString() ?? null;
        const latitudeString = latitude?.toString() ?? null;
        const create_utc_timestamp = equipment.create_utc_timestamp;

        let equipmentDetail =
          equipmentDetailsMap.get(equipment.equipment_guid) ||
          ({
            id: equipment.equipment_guid,
            typeCode: equipment.equipment_code,
            activeIndicator: equipment.active_ind,
            address: equipment.equipment_location_desc,
            xCoordinate: longitudeString,
            yCoordinate: latitudeString,
            createDate: create_utc_timestamp,
            actions: [],
            wasAnimalCaptured: equipment.was_animal_captured,
          } as Equipment);

        // Append the action to this equipment's list of actions
        equipmentDetail.actions.push({
          actionId: action.action_guid,
          actor: action.actor_guid,
          date: action.action_date,
          activeIndicator: action.active_ind,
          actionCode: actionData.action_code,
        });

        equipmentDetailsMap.set(equipment.equipment_guid, equipmentDetail);
      }
    }
    const equipmentDetails = Array.from(equipmentDetailsMap.values()) as Equipment[];

    // Sort the equipmentDetails by createDate in ascending order
    equipmentDetails.sort((a, b) => {
      return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
    });

    return equipmentDetails;
  };

  //-- get all of the subjects for the case files, this can be wildlife as well
  //-- as people <future state>
  private _getCaseFileSubjects = async (query: SubjectQueryResult): Promise<Wildlife[]> => {
    let result: Array<Wildlife>;

    if (query?.wildlife) {
      const { wildlife } = query;

      result = wildlife
        .sort((a, b) => a.create_utc_timestamp.getTime() - b.create_utc_timestamp.getTime())
        .map((item, idx) => {
          const {
            wildlife_guid: id,
            species_code: species,
            sex_code: sex,
            age_code: age,
            threat_level_code: categoryLevel,
            conflict_history_code: conflictHistory,
            hwcr_outcome_code: outcome,
            ear_tag,
            drug_administered,
            action,
          } = item;

          const tags = ear_tag
            .sort((a, b) => a.create_utc_timestamp.getTime() - b.create_utc_timestamp.getTime())
            .map(({ ear_tag_guid: id, ear_code: ear, ear_tag_identifier: identifier }, idx) => {
              return {
                id,
                ear,
                identifier,
                order: idx + 1,
              };
            });

          const drugs = drug_administered
            .sort((a, b) => a.create_utc_timestamp.getTime() - b.create_utc_timestamp.getTime())
            .map(
              (
                {
                  drug_administered_guid: id,
                  vial_number: vial,
                  drug_code: drug,
                  drug_used_amount: amountUsed,
                  drug_method_code: injectionMethod,
                  adverse_reaction_text: reactions,
                  drug_remaining_outcome_code: remainingUse,
                  drug_discarded_amount: amountDiscarded,
                  discard_method_text: discardMethod,
                },
                idx,
              ) => {
                return {
                  id,
                  vial,
                  drug,
                  amountUsed,
                  injectionMethod,
                  reactions,
                  remainingUse,
                  amountDiscarded,
                  discardMethod,
                  order: idx + 1,
                };
              },
            );

          const actions = action.map(
            ({ action_guid: actionId, actor_guid: actor, action_date: date, action_type_action_xref: xref }) => {
              //-- the xref contains the action code
              const {
                action_code_action_type_action_xref_action_codeToaction_code: {
                  short_description: shortDescription,
                  long_description: longDescription,
                  active_ind: activeIndicator,
                  action_code: actionCode,
                },
              } = xref;
              return {
                actionId,
                actor,
                activeIndicator,
                actionCode,
                date,
                shortDescription,
                longDescription,
              };
            },
          );

          let record: Wildlife = {
            id,
            species,
            sex,
            age,
            categoryLevel,
            conflictHistory,
            outcome,
            order: idx + 1,
          };

          if (tags && tags.length !== 0) {
            record = { ...record, tags };
          }

          if (drugs && drugs.length !== 0) {
            record = { ...record, drugs };
          }

          if (actions && actions.length !== 0) {
            record = { ...record, actions };
          }

          return record;
        });
    }

    return result;
  };

  //----------------------
  //-- animal outcomes
  //----------------------
  createWildlife = async (model: CreateWildlifeInput): Promise<CaseFile> => {
    let caseFileId = "";

    //--
    //-- creates a new wildlife record and returns the wildlife_guid
    //--
    const _addWildlife = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      caseId: string,
      wildlife: WildlifeInput,
      userId: string,
    ): Promise<any> => {
      try {
        const { species } = wildlife;

        let record: any = {
          case_file_guid: caseId,
          species_code: species,
          active_ind: true,
          create_user_id: userId,
          update_user_id: userId,
          create_utc_timestamp: new Date(),
          update_utc_timestamp: new Date(),
        };

        if (wildlife.sex) {
          record = { ...record, sex_code: wildlife.sex };
        }

        if (wildlife.age) {
          record = { ...record, age_code: wildlife.age };
        }

        if (wildlife.categoryLevel) {
          record = { ...record, threat_level_code: wildlife.categoryLevel };
        }

        if (wildlife.conflictHistory) {
          record = { ...record, conflict_history_code: wildlife.conflictHistory };
        }

        if (wildlife.outcome) {
          record = { ...record, hwcr_outcome_code: wildlife.outcome };
        }

        const result = await db.wildlife.create({
          data: record,
        });

        return result?.wildlife_guid;
      } catch (exception) {
        throw new GraphQLError("Exception occurred. See server log for details", exception);
      }
    };

    //--
    //-- creates a new ear-tag record for each item tags collection
    //--
    const _addEarTags = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      wildlifeId: string,
      tags: Array<EarTagInput>,
      userId: string,
    ) => {
      if (tags && tags.length !== 0) {
        try {
          const records = tags.map(({ ear, identifier }) => {
            return {
              wildlife_guid: wildlifeId,
              ear_code: ear,
              ear_tag_identifier: identifier,
              active_ind: true,
              create_user_id: userId,
              update_user_id: userId,
              create_utc_timestamp: new Date(),
              update_utc_timestamp: new Date(),
            };
          });
          let result = await db.ear_tag.createMany({
            data: records,
          });
        } catch (exception) {
          throw new GraphQLError("Exception occurred. See server log for details", exception);
        }
      }
    };

    //--
    //-- creates a new drug-used record for each item in drugs collection
    //--
    const _addDrugsUsed = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      wildlifeId: string,
      drugs: Array<DrugInput>,
      userId: string,
    ) => {
      if (drugs && drugs.length !== 0) {
        try {
          const records = drugs.map(
            ({
              vial: vial_number,
              drug: drug_code,
              amountUsed: drug_used_amount,
              injectionMethod: drug_method_code,
              reactions: adverse_reaction_text,

              remainingUse: drug_remaining_outcome_code,
              amountDiscarded: drug_discarded_amount,
              discardMethod: discard_method_text,
            }) => {
              return {
                wildlife_guid: wildlifeId,
                drug_code,
                drug_method_code,
                drug_remaining_outcome_code,
                vial_number,
                drug_used_amount,
                drug_discarded_amount,
                discard_method_text,
                adverse_reaction_text,
                active_ind: true,
                create_user_id: userId,
                update_user_id: userId,
                create_utc_timestamp: new Date(),
                update_utc_timestamp: new Date(),
              };
            },
          );
          let result = await db.drug_administered.createMany({
            data: records,
          });
        } catch (exception) {
          throw new GraphQLError("Exception occurred. See server log for details", exception);
        }
      }
    };

    //--
    //-- adds new actions for the wildlife record
    //--
    const _applyActions = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      caseId: string,
      wildlifeId: string,
      actions: Array<WildlifeAction>,
      userId: string,
    ) => {
      if (actions && actions.length !== 0) {
        try {
          const xrefs = await db.action_type_action_xref.findMany({
            where: {
              action_type_code: ACTION_TYPE_CODES.WILDLIFE,
            },
            select: {
              action_type_action_xref_guid: true,
              action_code: true,
            },
          });

          const records = actions.map(({ actor: actor_guid, date: action_date, action }) => {
            const xref = xrefs.find((item) => item.action_code === action);

            return {
              case_guid: caseId,
              wildlife_guid: wildlifeId,
              action_type_action_xref_guid: xref.action_type_action_xref_guid,
              actor_guid,
              action_date,
              active_ind: true,
              create_user_id: userId,
              update_user_id: userId,
              create_utc_timestamp: new Date(),
              update_utc_timestamp: new Date(),
            };
          });
          let result = await db.action.createMany({
            data: records,
          });
        } catch (exception) {
          throw new GraphQLError("Exception occurred. See server log for details", exception);
        }
      }
    };

    try {
      let result: CaseFile;

      await this.prisma.$transaction(async (db) => {
        const { leadIdentifier, agencyCode, caseCode, createUserId, wildlife } = model;
        const { tags, drugs, actions } = wildlife;

        const caseFile = await this.findOneByLeadId(leadIdentifier);

        if (caseFile && caseFile?.caseIdentifier) {
          caseFileId = caseFile.caseIdentifier;
        } else {
          const caseInput: CreateCaseInput = { ...model };
          caseFileId = await this.createCase(db, caseInput);
        }

        //-- add wildlife items
        const wildlifeId = await _addWildlife(db, caseFileId, wildlife, createUserId);

        if (wildlifeId) {
          //-- create ear-tags, dru-used and action records
          await _addEarTags(db, wildlifeId, tags, createUserId);
          await _addDrugsUsed(db, wildlifeId, drugs, createUserId);
          await _applyActions(db, caseFileId, wildlifeId, actions, createUserId);
        }
      });

      result = await this.findOne(caseFileId);

      return result;
    } catch (error) {
      console.log("exception: unable to create wildlife ", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };

  updateWildlife = async (model: UpdateWildlifeInput): Promise<CaseFile> => {
    const { caseIdentifier, updateUserId, wildlife } = model;
    const { id: wildlifeId } = wildlife;

    let result: CaseFile;
    const current = new Date();

    //--
    //-- apply updates to the base wildlife record
    //--
    const _updateWildlife = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      input: WildlifeInput,
      userId: string,
      date: Date,
    ) => {
      try {
        const { id, species, sex, age, categoryLevel, conflictHistory, outcome } = input;

        //-- create a new data record to update based on the input provided
        let data = {
          species_code: species,
          sex_code: sex || null,
          age_code: age || null,
          threat_level_code: categoryLevel || null,
          conflict_history_code: conflictHistory || null,
          hwcr_outcome_code: outcome || null,
          update_user_id: userId,
          update_utc_timestamp: date,
        };

        const result = await db.wildlife.update({
          where: { wildlife_guid: id },
          data,
        });

        return result;
      } catch (error) {
        console.log(`exception: unable to update wildlife record: ${wildlifeId}`, error);
        throw new GraphQLError("Exception occurred. See server log for details", {});
      }
    };

    //--
    //-- add, delete and update any ear-tags
    //--
    const _upsertEarTags = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      wildlifeId: string,
      tags: Array<EarTagInput>,
      userId: string,
      date: Date,
    ) => {
      try {
        const current = await db.ear_tag.findMany({
          where: {
            wildlife_guid: wildlifeId,
            active_ind: true,
          },
        });

        //-- if there are no ear-tags add them
        if (!current || (current.length === 0 && tags && tags.length !== 0)) {
          const newTags = tags.map(({ ear: ear_code, identifier: ear_tag_identifier }) => {
            return {
              wildlife_guid: wildlifeId,
              ear_code,
              ear_tag_identifier,
              active_ind: true,
              create_user_id: userId,
              update_user_id: userId,
              create_utc_timestamp: date,
              update_utc_timestamp: date,
            };
          });

          await db.ear_tag.createMany({ data: newTags });
        } else if (current && current.length !== 0 && tags && tags.length !== 0) {
          let updates = [];
          let remove = [];
          let add = [];

          tags.forEach((tag) => {
            const { id } = tag;
            if (current.find((item) => item.ear_tag_guid === id)) {
              updates = [...updates, tag];
            } else if (!current.find((item) => item.ear_tag_guid === id)) {
              add = [...add, tag];
            }
          });

          current.forEach((tag) => {
            const { ear_tag_guid: id } = tag;
            if (!tags.find((item) => item.id === id)) {
              remove = [...remove, tag];
            }
          });

          if (updates.length !== 0) {
            updates.forEach(async ({ id, ear, identifier }) => {
              await db.ear_tag.update({
                where: {
                  ear_tag_guid: id,
                },
                data: {
                  ear_code: ear,
                  ear_tag_identifier: identifier,
                  update_user_id: userId,
                  update_utc_timestamp: date,
                },
              });
            });
          }

          if (remove.length !== 0) {
            remove.forEach(async ({ ear_tag_guid }) => {
              await db.ear_tag.update({
                where: {
                  ear_tag_guid,
                },
                data: {
                  active_ind: false,
                  update_user_id: userId,
                  update_utc_timestamp: date,
                },
              });
            });
          }

          if (add.length !== 0) {
            const newTags = add.map(({ ear: ear_code, identifier: ear_tag_identifier }) => {
              return {
                wildlife_guid: wildlifeId,
                ear_code,
                ear_tag_identifier,
                active_ind: true,
                create_user_id: userId,
                update_user_id: userId,
                create_utc_timestamp: date,
                update_utc_timestamp: date,
              };
            });

            await db.ear_tag.createMany({ data: newTags });
          }
        } else if (current && current.length !== 0 && tags && tags.length === 0) {
          //-- remove any tags that are currently on the wildlife record
          await db.ear_tag.updateMany({
            where: {
              wildlife_guid: wildlifeId,
            },
            data: {
              active_ind: false,
              update_user_id: userId,
              update_utc_timestamp: date,
            },
          });
        }
      } catch (error) {
        console.log(`exception: unable to update ear-tags for wildlife record: ${wildlifeId}`, error);
        throw new GraphQLError("Exception occurred. See server log for details", {});
      }
    };

    //--
    //-- add, delete and update any drugs administered
    //--
    const _upsertDrugs = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      wildlifeId: string,
      drugs: Array<DrugInput>,
      userId: string,
      date: Date,
    ) => {
      try {
        const current = await db.drug_administered.findMany({
          where: {
            wildlife_guid: wildlifeId,
            active_ind: true,
          },
        });

        if (!current || (current.length === 0 && drugs && drugs.length !== 0)) {
          const newDrugs = drugs.map(
            ({
              vial: vial_number,
              drug: drug_code,
              amountUsed: drug_used_amount,
              amountDiscarded: drug_discarded_amount,
              injectionMethod: drug_method_code,
              reactions: adverse_reaction_text,
              remainingUse: drug_remaining_outcome_code,
              discardMethod: discard_method_text,
            }) => {
              return {
                wildlife_guid: wildlifeId,

                vial_number,
                drug_code,
                drug_used_amount,
                drug_method_code,
                adverse_reaction_text,
                drug_remaining_outcome_code,
                drug_discarded_amount,
                discard_method_text,

                active_ind: true,
                create_user_id: userId,
                update_user_id: userId,
                create_utc_timestamp: date,
                update_utc_timestamp: date,
              };
            },
          );

          await db.drug_administered.createMany({ data: newDrugs });
        } else if (current && current.length !== 0 && drugs && drugs.length !== 0) {
          let updates = [];
          let remove = [];
          let add = [];

          //-- get find new, updatebale, and deletable drugs
          drugs.forEach((drug) => {
            const { id } = drug;
            if (current.find((item) => item.drug_administered_guid === id)) {
              updates = [...updates, drug];
            } else if (!current.find((item) => item.drug_administered_guid === id)) {
              add = [...add, drug];
            }
          });

          current.forEach((tag) => {
            const { drug_administered_guid: id } = tag;
            if (!drugs.find((item) => item.id === id)) {
              remove = [...remove, tag];
            }
          });

          //-- apply changes
          if (updates.length !== 0) {
            updates.forEach(
              async ({
                id,
                vial: vial_number,
                drug: drug_code,
                amountUsed: drug_used_amount,
                injectionMethod: drug_method_code,
                discardMethod: discard_method_text,
                reactions: adverse_reaction_text,
                amountDiscarded: drug_discarded_amount,
                remainingUse: drug_remaining_outcome_code,
              }) => {
                await db.drug_administered.update({
                  where: {
                    drug_administered_guid: id,
                  },
                  data: {
                    vial_number,
                    drug_code,
                    drug_method_code,
                    drug_remaining_outcome_code,
                    drug_used_amount,
                    drug_discarded_amount,
                    discard_method_text,
                    adverse_reaction_text,
                    update_user_id: userId,
                    update_utc_timestamp: date,
                  },
                });
              },
            );
          }

          if (remove.length !== 0) {
            remove.forEach(async ({ drug_administered_guid }) => {
              await db.drug_administered.update({
                where: {
                  drug_administered_guid,
                },
                data: {
                  active_ind: false,
                  update_user_id: userId,
                  update_utc_timestamp: date,
                },
              });
            });
          }

          if (add.length !== 0) {
            const newDrugs = add.map(
              ({
                vial: vial_number,
                drug: drug_code,
                amountUsed: drug_used_amount,
                injectionMethod: drug_method_code,
                reactions: adverse_reaction_text,
                remainingUse: drug_remaining_outcome_code,
                amountDiscarded: drug_discarded_amount,
                discardMethod: discard_method_text,
              }) => {
                return {
                  wildlife_guid: wildlifeId,

                  vial_number,
                  drug_code,
                  drug_used_amount,
                  drug_method_code,
                  adverse_reaction_text,
                  drug_remaining_outcome_code,
                  drug_discarded_amount,
                  discard_method_text,

                  active_ind: true,
                  create_user_id: userId,
                  update_user_id: userId,
                  create_utc_timestamp: date,
                  update_utc_timestamp: date,
                };
              },
            );

            await db.drug_administered.createMany({ data: newDrugs });
          }
        } else if (current && current.length !== 0 && drugs && drugs.length === 0) {
          //-- remove any tags that are currently on the wildlife record
          await db.drug_administered.updateMany({
            where: {
              wildlife_guid: wildlifeId,
            },
            data: {
              active_ind: false,
              update_user_id: userId,
              update_utc_timestamp: date,
            },
          });
        }
      } catch (error) {
        console.log(`exception: unable to update drug-used for wildlife record: ${wildlifeId}`, error);
        throw new GraphQLError("Exception occurred. See server log for details", {});
      }
    };

    //--
    //-- update the actions for the seelcted wildlife
    //-- record, depending on the drugs and outcome
    //-- actions may need to be updated, removed, or added
    //--
    const _upsertActions = async (
      db: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
      >,
      caseIdentifier: string,
      wildlifeId: string,
      actions: Array<WildlifeAction>,
      userId: string,
      date: Date,
    ) => {
      try {
        //-- if there are no actions present then remove all
        //-- actions that are associated with the caseIdentifier
        if (!actions || actions?.length === 0) {
          await db.action.updateMany({
            where: {
              case_guid: caseIdentifier,
            },
            data: {
              active_ind: false,
              update_user_id: userId,
              create_utc_timestamp: date,
            },
          });
        } else {
          //-- compare the current actions and the actions provided
          //-- to determine what needs to be removed and added

          //-- get the xrefs for wildlife records
          const xrefs = await db.action_type_action_xref.findMany({
            where: {
              action_type_code: ACTION_TYPE_CODES.WILDLIFE,
            },
            select: {
              action_type_action_xref_guid: true,
              action_code: true,
            },
          });

          //-- get the actions associated with the caseIdentifier
          const current = await db.action.findMany({
            where: {
              wildlife_guid: wildlifeId,
              active_ind: true,
            },
          });

          //-- there are no existing actions,
          if ((!current && actions?.length !== 0) || (current?.length === 0 && actions?.length !== 0)) {
            //-- add new actions

            const items = actions.map(({ actor: actor_guid, date: action_date, action }) => {
              const xref = xrefs.find((item) => item.action_code === action);

              return {
                case_guid: caseIdentifier,
                wildlife_guid: wildlifeId,
                action_type_action_xref_guid: xref.action_type_action_xref_guid,
                actor_guid,
                action_date,
                active_ind: true,
                create_user_id: userId,
                update_user_id: userId,
                create_utc_timestamp: new Date(),
                update_utc_timestamp: new Date(),
              };
            });

            await db.action.createMany({ data: items });
          } else {
            //-- the actions list has been modified
            let add = [];
            let remove = [];

            for (const xref of xrefs) {
              const { action_type_action_xref_guid: id, action_code: actionCode } = xref;
              //-- add new actions
              if (
                !current.find((item) => item.action_type_action_xref_guid === id) &&
                actions.find((item) => item.action === actionCode)
              ) {
                const action = actions.find((item) => item.action === actionCode);

                add = [
                  ...add,
                  {
                    case_guid: caseIdentifier,
                    wildlife_guid: wildlifeId,
                    action_type_action_xref_guid: id,
                    actor_guid: action.actor,
                    action_date: action.date,
                    active_ind: true,
                    create_user_id: userId,
                    update_user_id: userId,
                    create_utc_timestamp: new Date(),
                    update_utc_timestamp: new Date(),
                  },
                ];

                await db.action.create({
                  data: {
                    case_guid: caseIdentifier,
                    wildlife_guid: wildlifeId,
                    action_type_action_xref_guid: id,
                    actor_guid: action.actor,
                    action_date: action.date,
                    active_ind: true,
                    create_user_id: userId,
                    update_user_id: userId,
                    create_utc_timestamp: new Date(),
                    update_utc_timestamp: new Date(),
                  },
                });
              }

              if (
                current.find((item) => item.action_type_action_xref_guid === id) &&
                !actions.find((item) => item.action === actionCode)
              ) {
                const action = current.find((item) => item.action_type_action_xref_guid === id);

                await db.action.update({
                  where: {
                    action_guid: action.action_guid,
                  },
                  data: {
                    active_ind: false,
                    update_user_id: userId,
                    update_utc_timestamp: date,
                  },
                });
              }
            }
          }
        }
      } catch (error) {
        console.log(`exception: unable to update actions for wildlife record: ${wildlifeId}`, error);
        throw new GraphQLError("Exception occurred. See server log for details", {});
      }
    };

    try {
      await this.prisma.$transaction(async (db) => {
        //-- find the wildlife record first, if there is a record,
        //-- apply updates to it
        const source = await db.wildlife.findUnique({
          where: {
            case_file_guid: caseIdentifier,
            wildlife_guid: wildlifeId,
          },
        });

        if (source) {
          //-- apply any changes to the wildlife record first
          let wildlifeUpdate = await _updateWildlife(db, wildlife, updateUserId, current);

          //-- if the wildlife record was updated start applying the remainder of the
          //-- updates, make sure to remove items as needed
          if (wildlifeUpdate) {
            const { tags, drugs, actions } = wildlife;

            const tagsResult = await _upsertEarTags(db, wildlifeId, tags, updateUserId, current);
            const drugsResult = await _upsertDrugs(db, wildlifeId, drugs, updateUserId, current);
            const actionsResult = await _upsertActions(db, caseIdentifier, wildlifeId, actions, updateUserId, current);
          }
        }
      });

      result = await this.findOne(caseIdentifier);

      return result;
    } catch (error) {
      console.log("exception: unable to update wildlife ", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };

  deleteWildlife = async (model: DeleteWildlifeInput): Promise<CaseFile> => {
    const { caseIdentifier, wildlifeId, actor, updateUserId: userId } = model;
    const current = new Date();

    const softDeleteFragment = { active_ind: false, update_user_id: userId, update_utc_timestamp: current };

    try {
      await this.prisma.$transaction(async (db) => {
        //-- find the wildlife entry to delete
        const wildlife = await db.wildlife.findUnique({
          where: {
            case_file_guid: caseIdentifier,
            wildlife_guid: wildlifeId,
          },
        });

        if (!wildlife) {
          throw new Error(`Wildlife with ID ${wildlifeId} not found.`);
        }

        //-- soft delete ear_tags
        const tags = await db.ear_tag.findMany({ where: { wildlife_guid: wildlifeId } });
        if (tags && tags.length !== 0) {
          await db.ear_tag.updateMany({
            where: { wildlife_guid: wildlifeId },
            data: softDeleteFragment,
          });
        }

        //-- soft delete drugs_administered
        const drugs = await db.drug_administered.findMany({ where: { wildlife_guid: wildlifeId } });
        if (drugs && drugs.length !== 0) {
          await db.drug_administered.updateMany({
            where: { wildlife_guid: wildlifeId },
            data: softDeleteFragment,
          });
        }

        //-- soft delete wildlife record
        await db.wildlife.update({ where: { wildlife_guid: wildlifeId }, data: softDeleteFragment });

        //-- if there are actions perform soft delete
        const actions = await db.action.findMany({ where: { case_guid: caseIdentifier, wildlife_guid: wildlifeId } });
        if (actions && actions.length !== 0) {
          await db.wildlife.updateMany({
            where: { wildlife_guid: wildlifeId },
            data: softDeleteFragment,
          });
        }
      });

      return await this.findOne(caseIdentifier);
    } catch (error) {
      console.log("exception: unable to delete wildlife", error);
      throw new GraphQLError("Exception occurred. See server log for details", {});
    }
  };

  //--
  //-- not implemented
  //--
  findAll() {
    return `This action returns all caseFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseFile`;
  }
}
