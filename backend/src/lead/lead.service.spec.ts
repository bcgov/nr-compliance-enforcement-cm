import { Test, TestingModule } from "@nestjs/testing";
import { LeadService } from "./lead.service";
import { PrismaModule } from "nestjs-prisma";

describe("LeadService", () => {
  let service: LeadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [LeadService],
    }).compile();

    service = module.get<LeadService>(LeadService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
