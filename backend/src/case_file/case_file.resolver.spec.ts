import { Test, TestingModule } from "@nestjs/testing";
import { CaseFileResolver } from "./case_file.resolver";
import { CaseFileService } from "./case_file.service";
import { PrismaModule } from "nestjs-prisma";
import { CaseFileActionService } from "../case_file_action/case_file_action.service";

describe("CaseFileResolver", () => {
  let resolver: CaseFileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        CaseFileResolver,
        CaseFileService,
        {
          provide: CaseFileActionService,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<CaseFileResolver>(CaseFileResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
