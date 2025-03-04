import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateUserInput, UpdateUserInput } from '@repo/schemas';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.create({
      data: {
        email: createUserInput.email,
        passwordHash: createUserInput.password,
      },
    });

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const { email, password } = updateUserInput;

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...(email ? { email: email } : {}),
        ...(password ? { passwordHash: password } : {}),
      },
    });

    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.user.delete({
      where: { id },
    });

    return user;
  }
}
