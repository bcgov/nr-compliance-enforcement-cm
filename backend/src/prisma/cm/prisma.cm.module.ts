import { Module } from "@nestjs/common";
import { CaseManagementPrismaService } from "./prisma.cm.service";
//Ignoring Sonar Warning on the line below since we control the prisma client.
import { PrismaClient } from "../../../node_modules/.prisma/case_management"; // NOSONAR

@Module({
  providers: [
    {
      provide: CaseManagementPrismaService,
      useValue: new PrismaClient(), // Initialize the Prisma client for case management
    },
  ],
  exports: [CaseManagementPrismaService],
})
export class PrismaModuleCaseManagement {}
