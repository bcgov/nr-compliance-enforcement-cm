import { Injectable, Logger } from "@nestjs/common";
import { Park } from "./dto/park";
import { ParkArgs, ParkInput } from "./dto/park.input";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { park } from "prisma/shared/generated/park";
import { park_area_xref } from "prisma/shared/generated/park_area_xref";

@Injectable()
export class ParkService {
  constructor(
    private readonly prisma: SharedPrismaService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private readonly logger = new Logger(ParkService.name);

  async find(args: ParkArgs) {
    const query = {
      select: {
        park_guid: true,
        external_id: true,
        name: true,
        legal_name: true,
        park_area_xref: {
          select: {
            park_area: {
              select: {
                park_area_guid: true,
                name: true,
                region_name: true,
              },
            },
          },
        },
      },
      skip: args.skip,
      take: args.take,
      where: {},
    };

    args.search && (query.where = { name: { contains: args.search, mode: "insensitive" } });

    const prismaPark = await this.prisma.park.findMany(query);

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
      this.logger.error("Error mapping park", error);
    }
  }

  async findOneByExternalId(id: string) {
    const prismaPark = await this.prisma.park.findFirst({
      where: {
        external_id: id,
      },
    });

    try {
      return this.mapper.map<park, Park>(prismaPark as park, "park", "Park");
    } catch (error) {
      this.logger.error("Error mapping park", error);
    }
  }

  async create(input: ParkInput): Promise<Park> {
    const prismaPark = await this.prisma.park.create({
      data: {
        external_id: input.externalId,
        name: input.name,
        legal_name: input.legalName,
        park_area_xref: {
          create: input.parkAreas
            ? input.parkAreas.map((parkArea) => ({
                park_area_guid: parkArea.parkAreaGuid,
                create_user_id: "system",
              }))
            : [],
        },
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
        park_area_xref: {
          deleteMany: {}, // Delete all existing park area mappings
          create: input.parkAreas
            ? input.parkAreas.map((parkArea) => ({
                park_area_guid: parkArea.parkAreaGuid,
                create_user_id: "system",
              }))
            : [],
        },
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
