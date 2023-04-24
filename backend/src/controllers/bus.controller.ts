import { BusService } from '@/services/bus.service';
import { Response, Request, NextFunction } from 'express';
export class BusController {
    public bus = new BusService();

    public getStationByUid = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { arsId } = req.query;
            const station = await this.bus.getStationByUid(arsId as string);
            return res.status(200).json({ data: station, message: 'getStationByUid' });
        } catch (error) {
            next(error);
        }
    };

    public getStationByName = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        try {
            const { stSrch } = req.query;
            const station = await this.bus.getStationByNameList(stSrch as string);
            return res.status(200).json({ data: station, message: 'getStationByName' });
        } catch (error) {
            next(error);
        }
    };
}
