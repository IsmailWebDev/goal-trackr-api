import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { PlayerRoute } from './routes/players.route';
import { GoalRoute } from './routes/goals.route';
ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new PlayerRoute(), new GoalRoute()]);

app.listen();
