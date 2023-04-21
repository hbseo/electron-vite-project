import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { BusRoute } from '@routes/bus.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new AuthRoute(), new BusRoute()]);

app.listen();
