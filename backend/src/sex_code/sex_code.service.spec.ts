import { Test, TestingModule } from "@nestjs/testing";
import { SexCodeService } from "./sex_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("SexCodeService", () => {
  let service: SexCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [SexCodeService],
    }).compile();

    service = module.get<SexCodeService>(SexCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
