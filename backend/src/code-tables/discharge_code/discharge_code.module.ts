import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { DischargeCodeService } from "./discharge_code.service";
import { DischargeCodeResolver } from "./discharge_code.resolver";

@Module({
  imports: [PrismaModule],
  providers: [DischargeCodeResolver, DischargeCodeService],
})
export class DischargeCodeModule {}
