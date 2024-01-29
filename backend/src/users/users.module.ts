import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [PrismaModule], // Import AppModule
  providers: [UsersService, UsersResolver],
  controllers: [UsersController],
})
export class UsersModule {}
