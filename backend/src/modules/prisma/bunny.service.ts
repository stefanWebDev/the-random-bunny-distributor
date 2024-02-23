import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Bunny, Prisma } from '@prisma/client';

@Injectable()
export class BunnyDbService {
  constructor(private prisma: PrismaService) {}

  async bunny(
    bunnyWhereUniqueInput: Prisma.BunnyWhereUniqueInput,
  ): Promise<Bunny | null> {
    return this.prisma.bunny.findUnique({
      where: bunnyWhereUniqueInput,
    });
  }

  async createBunny(data: Prisma.BunnyCreateInput): Promise<Bunny> {
    return this.prisma.bunny.create({
      data: {
        name: data.name,
        description: data.description,
        email: data.email,
      },
    });
  }

  async deleteBunny(where: Prisma.BunnyWhereUniqueInput): Promise<Bunny> {
    return this.prisma.bunny.delete({
      where,
    });
  }
}
