import { Injectable } from '@nestjs/common';

@Injectable()
export class OAuthService {
  test() {
    return { test: 'test' };
  }
}
