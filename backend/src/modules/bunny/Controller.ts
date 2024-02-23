import { Body, Controller, Post } from '@nestjs/common';

interface AddBunnyDto {
  name: string;
  description: string;
  email: string;
}

@Controller('bunny')
export class BunnyController {
  @Post('add')
  addBunny(@Body() addBunnyDto: AddBunnyDto) {
    console.log(addBunnyDto);
    return {
      message: 'Bunny added',
    };
  }
}
