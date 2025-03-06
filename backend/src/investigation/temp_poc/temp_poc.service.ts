import { Injectable } from "@nestjs/common";
import { TempPoc } from "./entities/temp_poc.entity";
import { InvestigationPrismaService } from "../../prisma/inv/prisma.inv.service";

@Injectable()
export class TempPocService {
  constructor(private readonly prisma: InvestigationPrismaService) {}

  async findAll() {
    const prismaTempPoc = await this.prisma.temp_poc.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
      },
    });

    const tempPoc: TempPoc[] = prismaTempPoc.map((prismaTempPoc) => ({
      id: prismaTempPoc.id,
      first_name: prismaTempPoc.first_name,
      last_name: prismaTempPoc.last_name,
    }));

    return tempPoc;
  }

  findOne(id: string) {
    return this.prisma.temp_poc.findUnique({
      where: {
        id: id,
      },
    });
  }
}
