import { Body, Controller, Post, Req } from '@nestjs/common';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Request } from 'express';
import { BunnyService } from './Service';
import { UserService } from '../prisma/user.service';

export class CreateBunnyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}

export class CreateReceiverDto {
  @IsBoolean()
  isSignedUp: boolean;
}

@Controller('bunny')
export class BunnyController {
  constructor(
    private readonly bunnyService: BunnyService,
    private readonly userService: UserService,
  ) {}

  @Post('add')
  addBunny(@Body() addBunnyDto: CreateBunnyDto, @Req() req: Request) {
    const userId = req.headers.cookie.split('userId=')[1].split(';')[0];

    return this.bunnyService.createBunny(addBunnyDto, userId);
  }

  @Post('add-receiver')
  addReceiver(@Body() addReceiverDto: CreateReceiverDto, @Req() req: Request) {
    const userId = req.headers.cookie.split('userId=')[1].split(';')[0];
    this.userService.updateUser({
      where: { id: parseInt(userId) },
      data: { isReceiver: addReceiverDto.isSignedUp },
    });
  }
}
