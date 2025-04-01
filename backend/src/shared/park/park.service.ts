import { Injectable } from "@nestjs/common";
import { Park } from "./dto/park";
import { ParkInput } from "./dto/park.input";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { park } from "prisma/shared/generated/park";

@Injectable()
export class ParkService {
  constructor(
    private readonly prisma: SharedPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async findAll() {
    const prismaPark = await this.prisma.park.findMany({
      select: {
        park_guid: true,
        external_id: true,
        name: true,
        legal_name: true,
        geo_organization_unit_code: true,
      },
    });

    return this.mapper.mapArray<park, Park>(prismaPark as Array<park>, "park", "Park");
  }

  async findOne(id: string) {
    const prismaPark = await this.prisma.park.findUnique({
      where: {
        park_guid: id,
      },
    });

    try {
      return this.mapper.map<park, Park>(prismaPark as park, "park", "Park");
    } catch (error) {
      console.log(error);
    }
  }

  async create(input: ParkInput): Promise<Park> {
    const prismaPark = await this.prisma.park.create({
      data: {
        external_id: input.externalId,
        name: input.name,
        legal_name: input.legalName,
        geo_organization_unit_code: input.geoOrganizationUnitCode,
        create_user_id: "system",
      },
    });
    return this.mapper.map<park, Park>(prismaPark as park, "park", "Park");
  }

  async update(parkGuid: string, input: ParkInput): Promise<Park> {
    const existingPark = await this.prisma.park.findUnique({
      where: { park_guid: parkGuid },
    });
    if (!existingPark) throw new Error("Park not found");

    const prismaPark = await this.prisma.park.update({
      where: { park_guid: parkGuid },
      data: {
        external_id: input.externalId,
        name: input.name,
        legal_name: input.legalName,
        geo_organization_unit_code: input.geoOrganizationUnitCode,
      },
    });
    return this.mapper.map<park, Park>(prismaPark as park, "park", "Park");
  }

  async delete(parkGuid: string): Promise<Park> {
    const existingPark = await this.prisma.park.findUnique({
      where: { park_guid: parkGuid },
    });
    if (!existingPark) throw new Error("Park not found");

    const prismaPark = await this.prisma.park.delete({
      where: { park_guid: parkGuid },
    });
    return this.mapper.map<park, Park>(prismaPark as park, "park", "Park");
  }
}
