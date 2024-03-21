import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationResolver } from './configuration.resolver';
import { ConfigurationService } from './configuration.service';
import { PrismaModule } from 'nestjs-prisma';

describe('ConfigurationResolver', () => {
  let resolver: ConfigurationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ConfigurationResolver, ConfigurationService],
    }).compile();

    resolver = module.get<ConfigurationResolver>(ConfigurationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
