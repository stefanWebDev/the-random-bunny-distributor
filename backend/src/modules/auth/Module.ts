import { Module } from '@nestjs/common';
import { OAuthController } from './Controller';
import { OAuthService } from './Service';
import { PrismaModule } from '../prisma/Module';
import { UserService } from '../prisma/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { SessionService } from '../prisma/session.service';

@Module({
  imports: [PrismaModule],
  controllers: [OAuthController],
  providers: [OAuthService, UserService, PrismaService, SessionService],
})
export class OAuthModule {}
