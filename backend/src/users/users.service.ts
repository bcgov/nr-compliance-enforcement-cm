import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Adjust the path as per your project structure
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Create a new user
  async createUser(userData: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: userData,
    });
  }

  // Get all users
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Get a single user by ID
  async findUserById(userId: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  // Update a user
  async updateUser(userId: number, userData: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: userData,
    });
  }

  // Delete a user
  async deleteUser(userId: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id: userId },
    });
  }
}
