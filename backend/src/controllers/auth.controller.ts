import { Request, Response, NextFunction } from 'express';
import { User } from '@/interfaces/users.interface';

export class AuthController {
    public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userData: User = req.body;
            res.status(201).json({ data: userData, message: 'signup' });
        } catch (error) {
            next(error);
        }
    };
}
