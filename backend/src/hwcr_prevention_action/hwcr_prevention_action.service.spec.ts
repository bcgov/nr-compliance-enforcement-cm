import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from 'nestjs-prisma';
import { HWCRPreventionActionService } from './hwcr_prevention_action.service';

describe('HWCRPreventionActionService', () => {
  let service: HWCRPreventionActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [HWCRPreventionActionService],
    }).compile();

    service = module.get<HWCRPreventionActionService>(HWCRPreventionActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
