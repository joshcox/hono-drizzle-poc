import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  verbose: true,
  dbCredentials: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'bluffcountrybeef',
    ssl: false
  },
} satisfies Config;
