import { Module } from '@nestjs/common';
import { OAuthController } from './Controller';
import { OAuthService } from './Service';
import { PrismaModule } from '../prisma/Module';
import { UserService } from '../prisma/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [OAuthController],
  providers: [OAuthService, UserService, PrismaService],
})
export class OAuthModule {}
