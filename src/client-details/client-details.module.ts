import { Module } from '@nestjs/common';
import { ClientDetailsController } from './client-details.controller';
import { ClientDetailsService } from './client-details.service';

@Module({
  controllers: [ClientDetailsController],
  providers: [ClientDetailsService],
})
export class ClientDetailsModule {}
