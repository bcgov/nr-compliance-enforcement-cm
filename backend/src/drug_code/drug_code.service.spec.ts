import { Test, TestingModule } from "@nestjs/testing";
import { DrugCodeService } from "./drug_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("DrugCodeService", () => {
  let service: DrugCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [DrugCodeService],
    }).compile();

    service = module.get<DrugCodeService>(DrugCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
