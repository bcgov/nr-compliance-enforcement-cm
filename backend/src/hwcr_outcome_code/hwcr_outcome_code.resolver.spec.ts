import { Test, TestingModule } from '@nestjs/testing';
import { HwcrOutcomeCodeResolver } from './hwcr_outcome_code.resolver';
import { HwcrOutcomeCodeService } from './hwcr_outcome_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe('HwcrOutcomeCodeResolver', () => {
  let resolver: HwcrOutcomeCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HwcrOutcomeCodeResolver, HwcrOutcomeCodeService],
    }).compile();

    resolver = module.get<HwcrOutcomeCodeResolver>(HwcrOutcomeCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
