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

class CreateUserDto {
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
  async create(@Body() userData: CreateUserDto) {
    try {
      await this.userService.createUser(userData);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }
}
