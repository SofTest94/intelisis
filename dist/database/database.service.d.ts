import { OnModuleInit } from '@nestjs/common';
import * as sql from 'mssql';
export declare class DatabaseService implements OnModuleInit {
    private pool;
    onModuleInit(): Promise<void>;
    getConnection(): sql.ConnectionPool;
}
