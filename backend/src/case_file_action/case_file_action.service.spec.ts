import { Test, TestingModule } from '@nestjs/testing';
import { CaseFileActionService } from './case_file_action.service';

import { PrismaModule } from 'nestjs-prisma';

describe('HWCRAssessmentActionService', () => {
  let service: CaseFileActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CaseFileActionService],
    }).compile();

    service = module.get<CaseFileActionService>(CaseFileActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
