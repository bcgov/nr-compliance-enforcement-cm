import { createMap, forMember, mapFrom, Mapper, mapWithArguments } from "@automapper/core";

import { investigation } from "../../../../prisma/investigation/generated/investigation";
import { InvestigationStatusCode } from "../../../investigation/investigation_status_code/dto/investigation_status_code";

export class Investigation {
  investigationGuid: string;
  description?: string;
  leadAgency: string;
  investigationStatus: InvestigationStatusCode;
  openedTimestamp: Date;
}

export const mapPrismaInvestigationToInvestigation = (mapper: Mapper) => {
  createMap<investigation, Investigation>(
    mapper,
    "investigation",
    "Investigation",
    forMember(
      (dest) => dest.investigationGuid,
      mapFrom((src) => src.investigation_guid),
    ),
    forMember(
      (dest) => dest.description,
      mapFrom((src) => src.investigation_description),
    ),
    forMember(
      (dest) => dest.leadAgency,
      mapFrom((src) => src.owned_by_agency_ref),
    ),
    forMember(
      (dest) => dest.investigationStatus,
      mapFrom((src) =>
        mapper.map(src.investigation_status_code, "investigation_status_code", "InvestigationStatusCode"),
      ),
    ),
    forMember(
      (dest) => dest.openedTimestamp,
      mapFrom((src) => src.investigation_opened_utc_timestamp),
    ),
  );
};
