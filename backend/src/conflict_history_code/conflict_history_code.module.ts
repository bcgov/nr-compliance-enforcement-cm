import { Module } from "@nestjs/common";
import { ConflictHistoryCodeService } from "./conflict_history_code.service";
import { ConflictHistoryCodeResolver } from "./conflict_history_code.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [ConflictHistoryCodeResolver, ConflictHistoryCodeService],
})
export class ConflictHistoryCodeModule {}
