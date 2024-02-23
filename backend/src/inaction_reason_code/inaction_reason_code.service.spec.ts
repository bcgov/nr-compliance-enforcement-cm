import { Test, TestingModule } from '@nestjs/testing';
import { InactionReasonCodeService } from './inaction_reason_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe('InactionReasonCodeService', () => {
  let service: InactionReasonCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [InactionReasonCodeService],
    }).compile();

    service = module.get<InactionReasonCodeService>(InactionReasonCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
