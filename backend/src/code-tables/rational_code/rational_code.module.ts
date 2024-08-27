import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { RationalCodeService } from "./rational_code.service";
import { RationalCodeResolver } from "./rational_code.resolver";

@Module({
  imports: [PrismaModule],
  providers: [RationalCodeResolver, RationalCodeService],
})
export class RationalCodeModule {}
