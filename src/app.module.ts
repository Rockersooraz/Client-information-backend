import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientDetailsModule } from './client-details/client-details.module';

@Module({
  imports: [ClientDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
