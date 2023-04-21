import { BusRoute } from '@/routes/bus.route';
import { App } from '@/app';
import request from 'supertest';

describe('Testing Bus', () => {
    describe('[GET] /getStationByUid', () => {
        it('response Bus Data', async () => {
            const busRoute = new BusRoute();
            const app = new App([busRoute]);

            return request(app.getServer()).get(`${busRoute.path}/getStationByUid?arsId=19001`).expect(200);
        });
    });
});
