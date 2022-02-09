import { Module } from '@nestjs/common';
import { EstimatesService } from './estimates.service';
import { EstimatesController } from './estimates.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EstimatesController],
  providers: [EstimatesService]
})
export class EstimatesModule {}
