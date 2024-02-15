import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { OAuthService } from './Service';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserService } from '../prisma/user.service';
import * as bcrypt from 'bcrypt';
import { SessionService } from '../prisma/session.service';

class UserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

@Controller('oauth')
export class OAuthController {
  private readonly logger = new Logger('AuthController');

  constructor(
    private oauthService: OAuthService,
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  @Get('test')
  findAll() {
    return this.oauthService.test();
  }

  @Post('register')
  async create(@Body() userData: UserDto) {
    try {
      await this.userService.createUser(userData);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() userData: UserDto) {
    try {
      const user = await this.userService.user({ email: userData.email });
      if (!user) {
        new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      }
      const isMatch = bcrypt.compare(userData.password, user.password);

      if (!isMatch) {
        new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      }

      const session = await this.sessionService.createSession({
        user: {
          connect: {
            id: user.id,
          },
        },
      });

      return {
        cookie: session.sessionId,
      };
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }
}
