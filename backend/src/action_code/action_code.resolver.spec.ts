import { Test, TestingModule } from '@nestjs/testing';
import { ActionCodeResolver } from './action_code.resolver';
import { ActionCodeService } from './action_code.service';
import { PrismaModule } from 'nestjs-prisma';

describe('ActionCodeResolver', () => {
  let resolver: ActionCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ActionCodeResolver, ActionCodeService],
    }).compile();

    resolver = module.get<ActionCodeResolver>(ActionCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});