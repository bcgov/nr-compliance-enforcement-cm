import { Test, TestingModule } from '@nestjs/testing';
import { DrugCodeResolver } from './drug_code.resolver';
import { DrugCodeService } from './drug_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe('DrugCodeResolver', () => {
  let resolver: DrugCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [DrugCodeResolver, DrugCodeService],
    }).compile();

    resolver = module.get<DrugCodeResolver>(DrugCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
