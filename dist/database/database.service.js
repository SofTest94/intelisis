"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const sql = require("mssql");
let DatabaseService = class DatabaseService {
    pool;
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
        }
        catch (error) {
            console.error('❌ Error conectando a SQL Server:', error);
        }
    }
    getConnection() {
        return this.pool;
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map