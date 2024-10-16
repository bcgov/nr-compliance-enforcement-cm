import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GraphQLError } from "graphql";
import { ACTION_TYPE_CODES } from "../common/action_type_codes";
import { ACTION_CODES } from "../common/action_codes";

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

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
}
