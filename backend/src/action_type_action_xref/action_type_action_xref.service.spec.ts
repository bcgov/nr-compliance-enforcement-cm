import { Test, TestingModule } from '@nestjs/testing';
import { ActionTypeActionXrefService } from './action_type_action_xref.service';
import { PrismaModule } from 'nestjs-prisma';

describe('ActionTypeActionXrefService', () => {
  let service: ActionTypeActionXrefService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ActionTypeActionXrefService],
    }).compile();

    service = module.get<ActionTypeActionXrefService>(ActionTypeActionXrefService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
