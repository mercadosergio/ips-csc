import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './app/clients/clients.module';
import { OrdersModule } from './app/orders/orders.module';

@Module({
  imports: [ClientsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
