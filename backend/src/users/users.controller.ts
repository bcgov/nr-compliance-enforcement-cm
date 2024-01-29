import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto'; // Define this DTO as needed
import { ApiTags } from '@nestjs/swagger';

@ApiTags("users")
@Controller({path: "users", version: "1"})
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
