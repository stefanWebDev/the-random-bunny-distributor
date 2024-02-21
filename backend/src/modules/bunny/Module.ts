import { Module } from '@nestjs/common';
import { BunnyService } from './Service';
import { BunnyController } from './Controller';

@Module({
  controllers: [BunnyController],
  providers: [BunnyService],
})
export class BunnyModule {}
