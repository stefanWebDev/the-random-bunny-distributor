import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BunnyDbService } from '../prisma/bunny.service';
import { UserService } from '../prisma/user.service';

interface CreateBunnyInput {
  name: string;
  description: string;
}

@Injectable()
export class BunnyService {
  constructor(
    private readonly bunnyDbService: BunnyDbService,
    private readonly userService: UserService,
  ) {}

  async createBunny(data: CreateBunnyInput, userId: string) {
    try {
      const user = await this.userService.user({ id: parseInt(userId) });
      if (!user) {
        new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      }

      const bunnyData = { ...data, email: user.email };
      await this.bunnyDbService.createBunny(bunnyData);
    } catch (e) {
      new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
  }
}
