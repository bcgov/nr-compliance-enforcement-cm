import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return "Hello from Emerald!";
  }

  async getDBHealthCheck(): Promise<string> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return "Success";
    } catch (error) {
      return "Failure";
    }
  }
}
