import { Body, Controller, Get, Logger, Post, Req } from '@nestjs/common';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Request } from 'express';
import { BunnyService } from './Service';
import { UserService } from '../prisma/user.service';
import { Cron } from '@nestjs/schedule';
import { BunnyDbService } from '../prisma/bunny.service';

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
  private readonly logger = new Logger('asdf');

  constructor(
    private readonly bunnyService: BunnyService,
    private readonly userService: UserService,
    private readonly bunnyDbService: BunnyDbService,
  ) {}

  @Cron('0 0 0 * * *')
  async handleCron() {
    const allBunnies = await this.bunnyDbService.getAllBunnies();
    const receivers = await this.userService.users({
      where: { isReceiver: true },
    });

    if (allBunnies.length === 0) {
      this.logger.log('No bunnies to send');
      return;
    }

    if (receivers.length === 0) {
      this.logger.log('No more receivers left');
      return;
    }

    const randomBunny = this.getRandomElement(allBunnies);
    const randomReceiver = this.getRandomElement(receivers);

    this.userService.updateUser({
      where: { id: randomReceiver.id },
      data: { donorMail: randomBunny.email },
    });
  }

  @Get('winner')
  async getWinner(@Req() req: Request) {
    const userId = req.headers.cookie.split('userId=')[1].split(';')[0];
    const user = await this.userService.user({ id: parseInt(userId) });

    if (user.donorMail) {
      return { email: user.donorMail };
    } else {
      return { error: 'No bunny for you' };
    }
  }

  getRandomElement<T>(items: T[]): T {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

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
