import { Module } from "@nestjs/common";
import { InvestigationPrismaService } from "./prisma.inv.service";
import { PrismaClient } from "../../../prisma/investigation/generated";

@Module({
  providers: [
    {
      provide: InvestigationPrismaService,
      useValue: new PrismaClient(), // Initialize the Prisma client for case management
    },
  ],
  exports: [InvestigationPrismaService],
})
export class PrismaModuleInvestigation {}
