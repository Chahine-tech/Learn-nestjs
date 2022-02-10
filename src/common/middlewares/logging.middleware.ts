import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(request, response, next) {
    console.log('> ', request.method);
    next();
  }
}