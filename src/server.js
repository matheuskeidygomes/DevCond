import dotenv from 'dotenv';
import server from './app.js';

dotenv.config();

server.listen(process.env.PORT);