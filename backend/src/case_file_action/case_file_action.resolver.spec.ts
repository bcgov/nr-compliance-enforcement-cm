import { Test, TestingModule } from '@nestjs/testing';
import { CaseFileActionResolver } from './case_file_action.resolver';
import { CaseFileActionService } from './case_file_action.service';
import { PrismaModule } from 'nestjs-prisma';

describe('ActionTypeActionXrefResolver', () => {
  let resolver: CaseFileActionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CaseFileActionResolver, CaseFileActionService],
    }).compile();

    resolver = module.get<CaseFileActionResolver>(CaseFileActionService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
