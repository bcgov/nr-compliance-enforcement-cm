import { Injectable } from "@nestjs/common";
import { TempPoc } from "./entities/temp_poc.entity";
import { SharedPrismaService } from "../../prisma/shared/prisma.shared.service";

@Injectable()
export class TempPocService {
  constructor(private readonly prisma: SharedPrismaService) {}

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
