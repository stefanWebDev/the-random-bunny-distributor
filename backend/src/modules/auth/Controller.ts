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
    console.log(userData);
    try {
      const user = await this.userService.user({ email: userData.email });
      if (!user) {
        new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      }
      const isMatch = bcrypt.compare(userData.password, user.password);

      if (!isMatch) {
        new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      }
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }
}
