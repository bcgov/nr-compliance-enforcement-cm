import { Module } from "@nestjs/common";
import { TempPocService } from "./temp_poc.service";
import { TempPocResolver } from "./temp_poc.resolver";
import { PrismaModuleInvestigation } from "../../prisma/inv/prisma.inv.module";

@Module({
  imports: [PrismaModuleInvestigation],
  providers: [TempPocResolver, TempPocService],
})
export class TempPocModule {}
