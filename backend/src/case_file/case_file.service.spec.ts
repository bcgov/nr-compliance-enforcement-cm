import { Test, TestingModule } from "@nestjs/testing";
import { CaseFileService } from "./case_file.service";
import { PrismaModule } from "nestjs-prisma";
import { CaseFileActionService } from "../case_file_action/case_file_action.service";

describe("CaseFileService", () => {
  let service: CaseFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        CaseFileService,
        {
          provide: CaseFileActionService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CaseFileService>(CaseFileService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
