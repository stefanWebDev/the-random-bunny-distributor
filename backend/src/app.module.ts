import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RouterModule } from '@nestjs/core';
import { OAuthModule } from './modules/auth/Module';
import { AppController } from './app.controller';
import { PrismaModule } from './modules/prisma/Module';
import { AuthMiddleware } from './modules/auth/Middleware';
import { BunnyModule } from './modules/bunny/Module';
import { ScheduleModule } from '@nestjs/schedule';

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
      {
        path: 'api',
        module: BunnyModule,
      },
    ]),
    OAuthModule,
    PrismaModule,
    BunnyModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'login', method: RequestMethod.GET },
        { path: 'register', method: RequestMethod.GET },
      )
      .forRoutes('*');
  }
}
