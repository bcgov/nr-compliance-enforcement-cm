import { Test, TestingModule } from '@nestjs/testing';
import { InvestigationService } from './investigation.service';

describe('InvestigationService', () => {
  let service: InvestigationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestigationService],
    }).compile();

    service = module.get<InvestigationService>(InvestigationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
