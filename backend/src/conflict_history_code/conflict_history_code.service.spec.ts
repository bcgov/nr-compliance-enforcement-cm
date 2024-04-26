import { Test, TestingModule } from "@nestjs/testing";
import { ConflictHistoryCodeService } from "./conflict_history_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("ConflictHistoryCodeService", () => {
  let service: ConflictHistoryCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ConflictHistoryCodeService],
    }).compile();

    service = module.get<ConflictHistoryCodeService>(ConflictHistoryCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
