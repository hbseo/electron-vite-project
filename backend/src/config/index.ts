import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const appRootPath = process.cwd();
export const { NODE_ENV, PORT, ORIGIN } = process.env;
export const { API_KEY, END_POINT } = process.env;
export const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
