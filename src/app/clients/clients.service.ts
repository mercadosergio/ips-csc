import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.client.findMany({
      include: { Order: true },
    });
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({
      where: { id },
    });
  }
}
