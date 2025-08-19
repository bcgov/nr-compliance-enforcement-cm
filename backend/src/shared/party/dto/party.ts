import { createMap, forMember, mapFrom, Mapper } from "@automapper/core";
import { party } from "../../../../prisma/shared/generated/party";
import { person } from "../../../../prisma/shared/generated/person";
import { business } from "../../../../prisma/shared/generated/business";
import { Person } from "src/shared/person/dto/person";
import { Business } from "src/shared/business/dto/business";

export class Party {
  partyIdentifier: String;
  partyTypeCode: String;
  longDescription: String;
  shortDescription: String;
  createdDateTime: Date;
  person: Person;
  business: Business;
}

export const mapPrismaPartyToParty = (mapper: Mapper) => {
  createMap<party, Party>(
    mapper,
    "party",
    "Party",

    forMember(
      (dest) => dest.partyIdentifier,
      mapFrom((src) => src.party_guid),
    ),

    forMember(
      (dest) => dest.partyTypeCode,
      mapFrom((src) => src.party_type),
    ),

    forMember(
      (dest) => dest.shortDescription,
      mapFrom((src) => src.party_type_code.short_description),
    ),

    forMember(
      (dest) => dest.longDescription,
      mapFrom((src) => src.party_type_code.long_description),
    ),

    forMember(
      (dest) => dest.createdDateTime,
      mapFrom((src) => src.create_utc_timestamp),
    ),

    forMember(
      (dest) => dest.person,
      mapFrom((src) => mapper.map<person, Person>(src.person, "person", "Person")),
    ),

    forMember(
      (dest) => dest.business,
      mapFrom((src) => mapper.map<business, Business>(src.business, "business", "Business")),
    ),
  );
};
