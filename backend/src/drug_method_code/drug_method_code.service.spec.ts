import { Test, TestingModule } from "@nestjs/testing";
import { DrugMethodCodeService } from "./drug_method_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("DrugMethodCodeService", () => {
  let service: DrugMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [DrugMethodCodeService],
    }).compile();

    service = module.get<DrugMethodCodeService>(DrugMethodCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
