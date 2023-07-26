import { dbConfig } from './schema/config';
import { operatorsAliases } from './schema/sequelize-operators-aliases';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    operatorsAliases,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
    pool:dbConfig.pool,
});

