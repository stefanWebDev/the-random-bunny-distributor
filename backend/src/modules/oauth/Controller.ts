import { Controller, Get } from '@nestjs/common';
import { OAuthService } from './Service';

@Controller('oauth')
export class OAuthController {
  constructor(private oauthService: OAuthService) {}

  @Get('test')
  findAll() {
    return this.oauthService.test();
  }
}
