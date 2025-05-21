import { Injectable, OnModuleInit } from '@nestjs/common';
import * as sql from 'mssql';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: sql.ConnectionPool;

  async onModuleInit() {
    try {
      this.pool = await sql.connect({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
        options: {
          encrypt: false,
          trustServerCertificate: true,
        },
      });

      console.log('✅ Conectado a SQL Server');
    } catch (error) {
      console.error('❌ Error conectando a SQL Server:', error);
    }
  }

  getConnection(): sql.ConnectionPool {
    return this.pool;
  }
}
