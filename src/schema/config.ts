import { configData } from "../config/config";
import { DbConfigInterface } from "../interfaces/DbConfig.interface";

export const dbConfig: DbConfigInterface = {
    port: configData.DB_PORT ? +configData.DB_PORT : 5432,
    password: '1234',
    username: configData.DB_USER,
    host: configData.DB_HOST,
    database: configData.DB_NAME,
    reconnect: true,
    dialect: 'postgres',
    dialectOptions: {
        requestTimeout: 3000,
    },
    pool: {
        max: 6000,
        min: 0,
        acquire: 60000,
        idle: 5000,
    },
    migrationStorageTableName: '_migrations',
};
