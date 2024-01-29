import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Import AppModule
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
