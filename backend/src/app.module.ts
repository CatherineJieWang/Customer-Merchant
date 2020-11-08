import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CustomerModule} from './customers/customers.module'
import {MerchantsModule} from './merchants/merchants.module'

@Module({
  imports: [CustomerModule,MerchantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}