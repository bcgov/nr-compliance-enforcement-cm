import { Mapper } from "@automapper/core";
import { mapPrismaContactMethodToContactMethod } from "../shared/contact_method/dto/contact_method";
import { mapPrismaPersonToPerson } from "../shared/person/dto/person";
import { mapPrismaParkToPark } from "../shared/park/dto/park";

export const initializeMappings = (mapper: Mapper) => {
  mapPrismaContactMethodToContactMethod(mapper);
  mapPrismaPersonToPerson(mapper);
  mapPrismaParkToPark(mapper);
};
