import { Router } from 'express';
import { BusController } from '@/controllers/bus.controller';
import { Routes } from '@/interfaces/routes.interface';

export class BusRoute implements Routes {
    public router = Router();
    public bus = new BusController();

    constructor() {
        this.iniaializeRoutes();
    }

    private iniaializeRoutes() {
        this.router.get('/getStationByUid', this.bus.getStationByUid);
    }
}
