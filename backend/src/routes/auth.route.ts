import { Router } from 'express';
import { AuthController } from '@/controllers/auth.controller';
import { Routes } from '@/interfaces/routes.interface';

export class AuthRoute implements Routes {
    public router = Router();
    public auth = new AuthController();

    constructor() {
        this.iniaializeRoutes();
    }

    private iniaializeRoutes() {
        this.router.post('/signup', this.auth.signUp);
    }
}
