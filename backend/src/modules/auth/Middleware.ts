import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { SessionService } from '../prisma/session.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @Inject(SessionService) private readonly sessionService: SessionService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (req.headers.accept.includes('text/html')) {
      const sessionId = req.headers.cookie.split('sessionId=')[1].split(';')[0];
      const userId = req.headers.cookie.split('userId=')[1].split(';')[0];

      const session = await this.sessionService.session({
        userId: parseInt(userId),
        sessionId: {
          equals: sessionId,
        },
      });

      const givenDate = new Date(session.createdAt);
      const currentDate = new Date();

      const diffInHours =
        (currentDate.getTime() - givenDate.getTime()) / 1000 / 60 / 60;

      const isYoungerThan24Hours = diffInHours < 24;

      if (isYoungerThan24Hours) {
        next();
      } else {
        res.redirect('/login');
      }
    } else {
      next();
    }
  }
}
