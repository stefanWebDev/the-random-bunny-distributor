import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { SessionService } from './session.service';
import { BunnyDbService } from './bunny.service';

@Module({
  controllers: [],
  providers: [PrismaService, UserService, SessionService, BunnyDbService],
  exports: [PrismaService, UserService, SessionService, BunnyDbService],
})
export class PrismaModule {}
