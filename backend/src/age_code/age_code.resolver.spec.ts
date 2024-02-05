import { Test, TestingModule } from '@nestjs/testing';
import { AgeCodeResolver } from './age_code.resolver';
import { AgeCodeService } from './age_code.service';

describe('AgeCodeResolver', () => {
  let resolver: AgeCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgeCodeResolver, AgeCodeService],
    }).compile();

    resolver = module.get<AgeCodeResolver>(AgeCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
