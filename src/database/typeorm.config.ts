import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true
}

