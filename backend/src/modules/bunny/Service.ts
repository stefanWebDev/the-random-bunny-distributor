import { Injectable } from '@nestjs/common';
import { BunnyDbService } from '../prisma/bunny.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BunnyService {
  constructor(private readonly bunnyDbService: BunnyDbService) {}

  createBunny(data: Prisma.BunnyCreateInput) {
    try {
      this.bunnyDbService.createBunny(data);
      console.log('bunny created');
    } catch (e) {
      console.log(e);
    }
  }
}
