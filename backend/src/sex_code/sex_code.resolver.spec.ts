import { Test, TestingModule } from '@nestjs/testing';
import { SexCodeResolver } from './sex_code.resolver';
import { SexCodeService } from './sex_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe('SexCodeResolver', () => {
  let resolver: SexCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [SexCodeResolver, SexCodeService],
    }).compile();

    resolver = module.get<SexCodeResolver>(SexCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
