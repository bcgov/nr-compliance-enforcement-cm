import { Test, TestingModule } from '@nestjs/testing';
import { ActionTypeActionXrefResolver } from './action_type_action_xref.resolver';
import { ActionTypeActionXrefService } from './action_type_action_xref.service';
import { PrismaModule } from 'nestjs-prisma';

describe('ActionTypeActionXrefResolver', () => {
  let resolver: ActionTypeActionXrefResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ActionTypeActionXrefResolver, ActionTypeActionXrefService],
    }).compile();

    resolver = module.get<ActionTypeActionXrefResolver>(ActionTypeActionXrefResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
