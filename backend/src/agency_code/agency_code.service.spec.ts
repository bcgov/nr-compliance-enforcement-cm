import { Test, TestingModule } from "@nestjs/testing";
import { AgencyCodeService } from "./agency_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("AgencyCodeService", () => {
  let service: AgencyCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [AgencyCodeService],
    }).compile();

    service = module.get<AgencyCodeService>(AgencyCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
