import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { SessionService } from './session.service';

@Module({
  controllers: [],
  providers: [PrismaService, UserService, SessionService],
  exports: [PrismaService, UserService, SessionService],
})
export class PrismaModule {}
