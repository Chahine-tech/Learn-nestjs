import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';
import { AuthenticationMiddleware } from 'src/authentication/middlewares/authentication.middleware';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [InvoicesController],
  providers: [InvoicesService]
})
export class InvoicesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.
        apply(AuthenticationMiddleware)
        .forRoutes(InvoicesController);
  }
}
