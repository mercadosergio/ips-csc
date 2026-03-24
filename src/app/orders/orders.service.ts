import { Injectable } from '@nestjs/common';
@Injectable()
export class OrdersService {
  findAll() {
    return [];
  }

  findOne(id: number) {
    return { id, name: `Order #${id}` };
  }
}
