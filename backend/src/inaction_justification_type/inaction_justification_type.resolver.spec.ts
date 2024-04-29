import { Test, TestingModule } from "@nestjs/testing";
import { InactionJustificationTypeResolver } from "./inaction_justification_type.resolver";
import { InactionJustificationTypeService } from "./inaction_justification_type.service";

import { PrismaModule } from "nestjs-prisma";

describe("InactionJustificationTypeResolver", () => {
  let resolver: InactionJustificationTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [InactionJustificationTypeResolver, InactionJustificationTypeService],
    }).compile();

    resolver = module.get<InactionJustificationTypeResolver>(InactionJustificationTypeService);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
