import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  findAll() {
    return [];
  }

  findOne(id: number) {
    return { id, name: `Client #${id}` };
  }
}
