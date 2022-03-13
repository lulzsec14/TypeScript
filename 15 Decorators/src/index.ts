import express from 'express';
import { router } from './Routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dasfasdfasd'] }));

app.use(router);

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});

// 223
