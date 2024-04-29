import { Test, TestingModule } from "@nestjs/testing";
import { CaseFileResolver } from "./case_file.resolver";
import { CaseFileService } from "./case_file.service";
import { PrismaModule } from "nestjs-prisma";

describe("CaseFileResolver", () => {
  let resolver: CaseFileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CaseFileResolver, CaseFileService],
    }).compile();

    resolver = module.get<CaseFileResolver>(CaseFileResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
