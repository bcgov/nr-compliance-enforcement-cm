import { Test, TestingModule } from "@nestjs/testing";
import { IpmAuthCategoryCodeResolver } from "./ipm_auth_category_code.resolver";
import { IpmAuthCategoryCodeService } from "./ipm_auth_category_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("IpmAuthCategoryCodeResolver", () => {
  let resolver: IpmAuthCategoryCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [IpmAuthCategoryCodeResolver, IpmAuthCategoryCodeService],
    }).compile();

    resolver = module.get<IpmAuthCategoryCodeResolver>(IpmAuthCategoryCodeResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
