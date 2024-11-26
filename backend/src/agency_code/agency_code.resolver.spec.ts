import { Test, TestingModule } from "@nestjs/testing";
import { AgencyCodeResolver } from "./agency_code.resolver";
import { AgencyCodeService } from "./agency_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("AgencyCodeResolver", () => {
  let resolver: AgencyCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [AgencyCodeResolver, AgencyCodeService],
    }).compile();

    resolver = module.get<AgencyCodeResolver>(AgencyCodeResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
