import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { SectorCodeService } from "./sector_code.service";
import { SectorCodeResolver } from "./sector_code.resolver";

@Module({
  imports: [PrismaModule],
  providers: [SectorCodeResolver, SectorCodeService],
})
export class SectorCodeModule {}
