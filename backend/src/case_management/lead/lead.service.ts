import { Injectable } from "@nestjs/common";
import { CaseManagementPrismaService } from "../../prisma/cm/prisma.cm.service";
import { ACTION_TYPE_CODES } from "../../common/action_type_codes";
import { ACTION_CODES } from "../../common/action_codes";

@Injectable()
export class LeadService {
  constructor(private readonly prisma: CaseManagementPrismaService) {}

  async getLeadsByActionTaken(actionCode: string): Promise<string[]> {
    /**
     * Provided an action taken, returns the lead_identifier for each lead whose case_file has had that action taken
     * on it.
     * actionCode: the action_code to filter actions by
     */
    const actionCodeXrefContext = this.prisma.action_type_action_xref;
    const xrefResult = await actionCodeXrefContext.findFirst({
      where: {
        action_code: actionCode,
        // Filtering by action taken is currently exclusive to CEEB which allows us to filter on CEEBACTION type
        action_type_code: ACTION_TYPE_CODES.CEEBACTION,
      },
      select: {
        action_type_action_xref_guid: true,
      },
    });

    const actionResults = await this.prisma.action.findMany({
      where: {
        action_type_action_xref_guid: xrefResult.action_type_action_xref_guid,
      },
      select: {
        case_guid: true,
      },
    });

    const caseGuids: string[] = [];
    for (let action of actionResults) {
      caseGuids.push(action.case_guid);
    }

    const leadResults = await this.prisma.lead.findMany({
      where: {
        case_identifier: {
          in: caseGuids,
        },
      },
      select: {
        lead_identifier: true,
      },
    });
    const leadIdentifiers: string[] = [];
    for (let leadId of leadResults) {
      leadIdentifiers.push(leadId.lead_identifier);
    }
    return leadIdentifiers;
  }

  async getLeadsByOutcomeAnimal(outcomeAnimalCode, startDate, endDate): Promise<string[]> {
    let outcomeResultByCode;
    let outcomeResultByDate;
    let caseGuids: string[] = [];

    //Check if filter Outcome Animal by code is on
    if (outcomeAnimalCode !== "undefined") {
      outcomeResultByCode = await this.prisma.wildlife.findMany({
        where: {
          hwcr_outcome_code: outcomeAnimalCode,
        },
        select: {
          case_file_guid: true,
        },
      });
      for (let outcome of outcomeResultByCode) {
        caseGuids.push(outcome.case_file_guid);
      }
    }

    //Check if filter Outcome Animal date range is on
    if (startDate !== "undefined") {
      //Find action_type_action_xref_guid that represents outcome animal action
      const xrefResult = await this.prisma.action_type_action_xref.findFirst({
        where: {
          action_code: ACTION_CODES.RECOUTCOME,
        },
        select: {
          action_type_action_xref_guid: true,
        },
      });
      outcomeResultByDate = await this.prisma.action.findMany({
        where: {
          action_type_action_xref_guid: xrefResult.action_type_action_xref_guid,
          action_date: {
            gte: new Date(startDate),
            lte: endDate !== "undefined" ? new Date(endDate) : new Date().toISOString(), //utc time,
          },
        },
        select: {
          case_guid: true,
        },
      });

      for (let outcome of outcomeResultByDate) {
        caseGuids.push(outcome.case_guid);
      }
    }

    //if 2 filters are on, get the mutual case_guid
    if (outcomeAnimalCode !== "undefined" && startDate !== "undefined") {
      const duplicates = caseGuids.filter((item, index) => caseGuids.indexOf(item) !== index);
      caseGuids = Array.from(new Set(duplicates));
    }

    const leadResults = await this.prisma.lead.findMany({
      where: {
        case_identifier: {
          in: caseGuids,
        },
      },
      select: {
        lead_identifier: true,
      },
    });

    const leadIdentifiers: string[] = [];
    for (let leadId of leadResults) {
      leadIdentifiers.push(leadId.lead_identifier);
    }

    return leadIdentifiers;
  }

  async getLeadsByEquipment(equipmentCode: string): Promise<string[]> {
    console.log(equipmentCode);
    const equipmentResults = await this.prisma.equipment.findMany({
      where: {
        equipment_code: equipmentCode,
      },
      select: {
        equipment_guid: true,
      },
    });
    console.log(equipmentResults);

    const caseGuids: string[] = [];
    for (let equipment of equipmentResults) {
      const actionResults = await this.prisma.action.findFirst({
        where: {
          equipment_guid: equipment.equipment_guid,
        },
        select: {
          case_guid: true,
        },
      });
      caseGuids.push(actionResults.case_guid);
    }
    console.log(caseGuids);
    const leadResults = await this.prisma.lead.findMany({
      where: {
        case_identifier: {
          in: caseGuids,
        },
      },
      select: {
        lead_identifier: true,
      },
    });
    console.log(leadResults);

    const leadIdentifiers: string[] = [];
    for (let leadId of leadResults) {
      leadIdentifiers.push(leadId.lead_identifier);
    }

    return leadIdentifiers;
  }
}
