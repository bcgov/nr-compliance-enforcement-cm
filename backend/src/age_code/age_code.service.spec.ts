import { Test, TestingModule } from '@nestjs/testing';
import { AgeCodeService } from './age_code.service';

describe('AgeCodeService', () => {
  let service: AgeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgeCodeService],
    }).compile();

    service = module.get<AgeCodeService>(AgeCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
