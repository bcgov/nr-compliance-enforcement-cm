import { Module } from "@nestjs/common";
import { TempPocService } from "./temp_poc.service";
import { TempPocResolver } from "./temp_poc.resolver";
import { PrismaModuleShared } from "../../prisma/shared/prisma.shared.module";

@Module({
  imports: [PrismaModuleShared],
  providers: [TempPocResolver, TempPocService],
})
export class TempPocModule {}
