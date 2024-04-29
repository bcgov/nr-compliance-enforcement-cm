import { Test, TestingModule } from "@nestjs/testing";
import { EquipmentCodeService } from "./equipment_code.service";
import { PrismaModule } from "nestjs-prisma";

describe("EquipmentCodeService", () => {
  let service: EquipmentCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [EquipmentCodeService],
    }).compile();

    service = module.get<EquipmentCodeService>(EquipmentCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
