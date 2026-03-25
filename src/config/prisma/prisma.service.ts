import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaMssql } from '@prisma/adapter-mssql';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaMssql({
      server: process.env.DB_HOST || 'localhost',
      port: 1433,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    super({
      adapter,
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      Logger.log('Connected to the database successfully', 'PrismaService');
    } catch (error) {
      Logger.log('Failed to connect to the database', 'PrismaService', error);
    }
  }
}
