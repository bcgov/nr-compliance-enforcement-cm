import { Test, TestingModule } from '@nestjs/testing';
import { InvestigationResolver } from './investigation.resolver';
import { InvestigationService } from './investigation.service';

describe('InvestigationResolver', () => {
  let resolver: InvestigationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestigationResolver, InvestigationService],
    }).compile();

    resolver = module.get<InvestigationResolver>(InvestigationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
