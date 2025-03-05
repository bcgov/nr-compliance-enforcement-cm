import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
//Ignoring Sonar Warning on the line below since we control the prisma client.
import { PrismaClient } from "../../../node_modules/.prisma/case_management"; // NOSONAR

@Injectable()
export class CaseManagementPrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
