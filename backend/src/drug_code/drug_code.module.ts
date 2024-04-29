import { Module } from "@nestjs/common";
import { DrugCodeService } from "./drug_code.service";
import { DrugCodeResolver } from "./drug_code.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [DrugCodeResolver, DrugCodeService],
})
export class DrugCodeModule {}
