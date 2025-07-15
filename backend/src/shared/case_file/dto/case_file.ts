import { createMap, forMember, mapFrom, Mapper, mapWithArguments } from "@automapper/core";
import { AgencyCode } from "../../agency_code/dto/agency_code";
import { CaseActivity } from "../../case_activity/dto/case_activity";
import { CaseStatusCode } from "../../case_status_code/dto/case_status_code";
import { case_file } from "../../../../prisma/shared/generated/case_file";

export class CaseFile {
  caseIdentifier: string;
  caseOpenedTimestamp: Date;
  leadAgency: AgencyCode;
  caseStatus: CaseStatusCode;
  caseActivities: CaseActivity[];
}

export const mapPrismaCaseFileToCaseFile = (mapper: Mapper) => {
  createMap<case_file, CaseFile>(
    mapper,
    "case_file",
    "CaseFile",
    forMember(
      (dest) => dest.caseIdentifier,
      mapFrom((src) => src.case_file_guid),
    ),
    forMember(
      (dest) => dest.caseOpenedTimestamp,
      mapFrom((src) => src.case_opened_utc_timestamp),
    ),
    forMember(
      (dest) => dest.leadAgency,
      mapFrom((src) => mapper.map(src.agency_code, "agency_code", "AgencyCode")),
    ),
    forMember(
      (dest) => dest.caseStatus,
      mapFrom((src) => mapper.map(src.case_status_code, "case_status_code", "CaseStatusCode")),
    ),
    forMember(
      (dest) => dest.caseActivities,
      mapWithArguments((src) => mapper.mapArray(src.case_activity ?? [], "case_activity", "CaseActivity")),
    ),
  );
};
