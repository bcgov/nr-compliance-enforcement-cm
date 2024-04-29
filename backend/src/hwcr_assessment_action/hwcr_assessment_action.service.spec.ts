import { Test, TestingModule } from "@nestjs/testing";
import { HWCRAssessmentActionService } from "./hwcr_assessment_action.service";

import { PrismaModule } from "nestjs-prisma";

describe("HWCRAssessmentActionService", () => {
  let service: HWCRAssessmentActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HWCRAssessmentActionService],
    }).compile();

    service = module.get<HWCRAssessmentActionService>(HWCRAssessmentActionService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
