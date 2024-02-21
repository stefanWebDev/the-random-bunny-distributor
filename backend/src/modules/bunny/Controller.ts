import { Body, Controller, Post } from '@nestjs/common';

interface AddBunnyDto {}

@Controller('bunny')
export class BunnyController {
  @Post('add')
  addBunny(@Body() addBunnyDto: any) {
    return {
      message: 'Bunny added',
    };
  }
}
