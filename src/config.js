import { config } from 'dotenv';
config();
export const PORT = process.env.PORT || 3000;
export const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
export const HOST = `http://localhost:${PORT}`;