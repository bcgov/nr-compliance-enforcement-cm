import { Test, TestingModule } from "@nestjs/testing";
import { AgeCodeService } from "./age_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("AgeCodeService", () => {
  let service: AgeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [AgeCodeService],
    }).compile();

    service = module.get<AgeCodeService>(AgeCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
