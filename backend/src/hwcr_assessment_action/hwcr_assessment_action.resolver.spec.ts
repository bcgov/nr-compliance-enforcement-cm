import { Test, TestingModule } from '@nestjs/testing';
import { HWCRAssessmentActionResolver } from './hwcr_assessment_action.resolver';
import { HWCRAssessmentActionService } from './hwcr_assessment_action.service';
import { PrismaModule } from 'nestjs-prisma';

describe('ActionTypeActionXrefResolver', () => {
  let resolver: HWCRAssessmentActionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HWCRAssessmentActionResolver, HWCRAssessmentActionService],
    }).compile();

    resolver = module.get<HWCRAssessmentActionResolver>(HWCRAssessmentActionService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
