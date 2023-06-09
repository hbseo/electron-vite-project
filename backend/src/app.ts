import express from 'express';
import cors from 'cors';
import { Routes } from '@interfaces/routes.interface';
import { NODE_ENV, PORT, ORIGIN } from '@config';
import { DataSource } from 'typeorm';
import { dbConnection } from '@database';

export class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        // this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`=================================`);
            console.log(`======= ENV: ${this.env} =======`);
            console.log(`🚀 App listening on the port ${this.port}`);
            console.log(`=================================`);
        });
    }

    public getServer() {
        return this.app;
    }

    private async connectToDatabase() {
        const appDataSource = new DataSource(dbConnection);
        await appDataSource.initialize().then(() => {
            console.log('=================================');
            console.log('=======   DB CONNECTED!   =======');
            console.log('=================================');
        });
    }

    private initializeMiddlewares() {
        this.app.use(cors({ origin: ORIGIN }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
}
