import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EstimatesModule } from './estimates/estimates.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [UsersModule, EstimatesModule, InvoicesModule],
})
export class AppModule {}
