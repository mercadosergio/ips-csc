import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './app/clients/clients.module';
import { OrdersModule } from './app/orders/orders.module';
import { PrismaModule } from './config/prisma/prisma.module';

@Module({
  imports: [ClientsModule, OrdersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
