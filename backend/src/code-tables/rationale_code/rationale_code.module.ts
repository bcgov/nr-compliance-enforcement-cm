import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { RationaleCodeService } from "./rationale_code.service";
import { RationaleCodeResolver } from "./rationale_code.resolver";

@Module({
  imports: [PrismaModule],
  providers: [RationaleCodeResolver, RationaleCodeService],
})
export class RationaleCodeModule {}
