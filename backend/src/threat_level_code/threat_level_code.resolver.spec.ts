import { Test, TestingModule } from '@nestjs/testing';
import { ThreatLevelCodeResolver } from './threat_level_code.resolver';
import { ThreatLevelCodeService } from './threat_level_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe('ThreatLevelCodeResolver', () => {
  let resolver: ThreatLevelCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ThreatLevelCodeResolver, ThreatLevelCodeService],
    }).compile();

    resolver = module.get<ThreatLevelCodeResolver>(ThreatLevelCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
