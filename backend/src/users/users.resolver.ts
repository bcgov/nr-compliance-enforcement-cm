import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../models/user.model'; // You need to define this GraphQL model
import { CreateUserInput } from './dto/create-user.input'; // Define GraphQL input types

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => [User])
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(returns => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }

  // Add more queries and mutations as needed
}
