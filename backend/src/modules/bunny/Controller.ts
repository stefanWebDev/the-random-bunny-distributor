import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { BunnyDbService } from '../prisma/bunny.service';

export class CreateBunnyDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}

@Controller('bunny')
export class BunnyController {
  constructor(private readonly bunnyService: BunnyDbService) {}

  @Post('add')
  addBunny(@Body() addBunnyDto: CreateBunnyDto) {
    return this.bunnyService.createBunny(addBunnyDto);
  }
}
