import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentCodeResolver } from './equipment_code.resolver';
import { ActionCodeService } from '../action_code/action_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe("EquipmentCodeResolver", () => {
  let resolver: EquipmentCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [EquipmentCodeResolver, ActionCodeService],
    }).compile();

    resolver = module.get<EquipmentCodeResolver>(EquipmentCodeResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
