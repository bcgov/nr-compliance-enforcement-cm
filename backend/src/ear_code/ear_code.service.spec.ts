import { Test, TestingModule } from "@nestjs/testing";
import { EarCodeService } from "./ear_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("EarCodeService", () => {
  let service: EarCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [EarCodeService],
    }).compile();

    service = module.get<EarCodeService>(EarCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
