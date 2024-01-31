import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { PrismaService } from "nestjs-prisma";
import { Prisma } from "@prisma/client";

describe("UserService", () => {
  let service: UsersService;
  let prisma: PrismaService;

  const savedUser1 = {
    id: new Prisma.Decimal(1),
    name: "Test Numone",
    email: "numone@test.com"
  };
  const savedUser2 = {
    id: new Prisma.Decimal(2),
    name: "Test Numtwo",
    email: "numtwo@test.com"
  };
  const oneUser = {
    id: 1,
    name: "Test Numone",
    email: "numone@test.com"
  };
  const updateUser = {
    id: 1,
    name: "Test Numone update",
    email: "numoneupdate@test.com"
  };
  const updatedUser = {
    id: new Prisma.Decimal(1),
    name: "Test Numone update",
    email: "numoneupdate@test.com"
  };

  const twoUser = {
    id: 2,
    name: "Test Numtwo",
    email: "numtwo@test.com"
  };

  const threeUser = {
    id: 3,
    name: "Test Numthree",
    email: "numthree@test.com"
  };

  const userArray = [oneUser, twoUser];
  const savedUserArray = [savedUser1, savedUser2];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            users: {
              findMany: jest.fn().mockResolvedValue(savedUserArray),
              findUnique: jest.fn().mockResolvedValue(savedUser1),
              create: jest.fn().mockResolvedValue(savedUser1),
              update: jest.fn().mockResolvedValue(updatedUser),
              delete: jest.fn().mockResolvedValue(true),
              count: jest.fn()
            }
          }
        }
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

});
