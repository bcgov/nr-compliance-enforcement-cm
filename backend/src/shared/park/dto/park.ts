import { Mapper, createMap, forMember, mapFrom } from "@automapper/core";
import { park } from "../../../../prisma/shared/generated/park";

export class Park {
  parkGuid: string;
  externalId: string;
  name: string;
  legalName?: string;
  geoOrganizationUnitCode?: string;
}

export const mapPrismaParkToPark = (mapper: Mapper) => {
  createMap<park, Park>(
    mapper,
    "park",
    "Park",
    forMember(
      (dest) => dest.parkGuid,
      mapFrom((src) => src.park_guid),
    ),
    forMember(
      (dest) => dest.externalId,
      mapFrom((src) => src.external_id),
    ),
    forMember(
      (dest) => dest.name,
      mapFrom((src) => src.name),
    ),
    forMember(
      (dest) => dest.legalName,
      mapFrom((src) => src.legal_name),
    ),
    forMember(
      (dest) => dest.geoOrganizationUnitCode,
      mapFrom((src) => src.geo_organization_unit_code),
    ),
  );
};
