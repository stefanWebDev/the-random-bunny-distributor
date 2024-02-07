import { Module } from '@nestjs/common';
import { OAuthController } from './Controller';
import { OAuthService } from './Service';

@Module({
  controllers: [OAuthController],
  providers: [OAuthService],
})
export class OAuthModule {}
