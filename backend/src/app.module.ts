import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RouterModule } from '@nestjs/core';
import { OAuthModule } from './modules/oauth/Module';
import { AppController } from './app.controller';
import { PrismaModule } from './modules/prisma/Module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist'),
    }),
    RouterModule.register([
      {
        path: 'api',
        module: OAuthModule,
      },
    ]),
    OAuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
