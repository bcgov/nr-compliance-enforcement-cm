import { Module } from "@nestjs/common";
import { InvestigationPrismaService } from "./prisma.inv.service";
//Ignoring Sonar Warning on the line below since we control the prisma client.
import { PrismaClient } from "../../../node_modules/.prisma/investigation"; // NOSONAR

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
