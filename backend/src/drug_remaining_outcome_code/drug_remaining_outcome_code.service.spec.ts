import { Test, TestingModule } from "@nestjs/testing";
import { DrugRemainingOutcomeCodeService } from "./drug_remaining_outcome_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("DrugRemainingOutcomeCodeService", () => {
  let service: DrugRemainingOutcomeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [DrugRemainingOutcomeCodeService],
    }).compile();

    service = module.get<DrugRemainingOutcomeCodeService>(DrugRemainingOutcomeCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
