import { Injectable } from '@nestjs/common';
import { PrismaMssql } from '@prisma/adapter-mssql';
import { PrismaClient } from 'prisma/generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMssql({
      server: process.env.DB_HOST || 'localhost',
      port: 1433,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    });

    super({
      adapter,
    });
  }
}
