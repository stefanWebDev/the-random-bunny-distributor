import { Module } from '@nestjs/common';
import { BunnyService } from './Service';
import { BunnyController } from './Controller';
import { BunnyDbService } from '../prisma/bunny.service';
import { PrismaModule } from '../prisma/Module';

@Module({
  imports: [PrismaModule],
  controllers: [BunnyController],
  providers: [BunnyService, BunnyDbService],
})
export class BunnyModule {}
