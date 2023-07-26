import { Dialect, PoolOptions } from "sequelize";

export interface DbConfigInterface {
    port: number | undefined,
    password: string,
    username: string,
    host: string,
    database: string,
    reconnect: boolean,
    dialect: Dialect,
    dialectOptions: {
        requestTimeout: number,
    },
    pool: PoolOptions,
    migrationStorageTableName: '_migrations',
};
