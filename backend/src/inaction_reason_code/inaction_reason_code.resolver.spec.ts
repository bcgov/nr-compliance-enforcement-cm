import { Test, TestingModule } from '@nestjs/testing';
import { InactionReasonCodeResolver } from './inaction_reason_code.resolver';
import { InactionReasonCodeService } from './inaction_reason_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe('InactionReasonCodeResolver', () => {
  let resolver: InactionReasonCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [InactionReasonCodeResolver, InactionReasonCodeService],
    }).compile();

    resolver = module.get<InactionReasonCodeResolver>(InactionReasonCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
