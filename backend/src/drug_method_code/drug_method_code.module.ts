import { Module } from '@nestjs/common';
import { DrugMethodCodeService } from './drug_method_code.service';
import { DrugMethodCodeResolver } from './drug_method_code.resolver';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [DrugMethodCodeResolver, DrugMethodCodeService],
})
export class DrugMethodCodeModule {}
