import { Test, TestingModule } from "@nestjs/testing";
import { EquipmentCodeResolver } from "./equipment_code.resolver";
import { PrismaModule } from "nestjs-prisma";
import { EquipmentCodeService } from "./equipment_code.service";

describe("EquipmentCodeResolver", () => {
  let resolver: EquipmentCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [EquipmentCodeResolver, EquipmentCodeService],
    }).compile();

    resolver = module.get<EquipmentCodeResolver>(EquipmentCodeResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
