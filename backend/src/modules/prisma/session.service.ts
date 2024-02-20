import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, Session } from '@prisma/client';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async session(
    sessionWhereUniqueInput: Prisma.SessionWhereUniqueInput,
  ): Promise<Session | null> {
    return this.prisma.session.findUnique({
      where: sessionWhereUniqueInput,
    });
  }

  async createSession(data: Prisma.SessionCreateInput): Promise<Session> {
    return this.prisma.session.create({
      data: {
        user: data.user,
      },
    });
  }

  async deleteSession(where: Prisma.SessionWhereUniqueInput): Promise<Session> {
    return this.prisma.session.delete({
      where,
    });
  }
}
