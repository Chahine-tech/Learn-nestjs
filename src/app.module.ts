import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EstimatesModule } from './estimates/estimates.module';
import { InvoicesModule } from './invoices/invoices.module';
import { LoggingMiddleware } from "./common/middlewares/logging.middleware";
import { AuthenticationModule } from './authentication/authentication.module';
import {AuthenticationMiddleware } from './authentication/middlewares/authentication.middleware'

@Module({
  imports: [UsersModule, EstimatesModule, InvoicesModule, AuthenticationModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('*');
  }
}