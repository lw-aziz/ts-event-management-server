import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { sequelize } from './sequelize-client';
import { configData } from './config/config';
import { initUser } from './schema/models/User.model';



dotenv.config();

const app: Express = express();
const httpServer = http.createServer(app);

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Server running OK');
});


async function sequelizeSync() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        initUser(sequelize);

        // Define any other models and associations here if needed

        // Synchronize all defined models to the database
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        // Close the Sequelize connection after synchronization
        await sequelize.close();
    }
}

//sequelize.sync().then(async () => {
httpServer.listen(port, async () => {
    console.log(`🚀 Server ready at http://localhost:${configData.API_PORT}`);
    await sequelizeSync();
});