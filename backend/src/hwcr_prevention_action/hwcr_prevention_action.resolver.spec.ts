import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from 'nestjs-prisma';
import { HWCRPreventionActionResolver } from './hwcr_prevention_action.resolver';
import { HWCRPreventionActionService } from './hwcr_prevention_action.service';

describe('ActionTypeActionXrefResolver', () => {
  let resolver: HWCRPreventionActionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HWCRPreventionActionResolver, HWCRPreventionActionService],
    }).compile();

    resolver = module.get<HWCRPreventionActionResolver>(HWCRPreventionActionService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
