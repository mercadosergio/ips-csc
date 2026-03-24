import { Controller, Get, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll() {
    const clients = this.clientsService.findAll();
    return { clientes: clients };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }
}
