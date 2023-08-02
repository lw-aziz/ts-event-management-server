import express, { NextFunction, Request, Response, Express } from 'express';
import dotenv from 'dotenv';
import { configData } from './config/config';
import routes from './api/routes'
import sequelizeConnection from './schema/config';


dotenv.config();
const port = configData.API_PORT;

export const getApp = () => {
    const app: Express = express()

    // Body parsing Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
    })

    app.use('/api/v1', routes);

    return app
}
export const startServer = () => {
    const app = getApp()
    try {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

sequelizeConnection.sync().then(async () => {
    startServer();
});