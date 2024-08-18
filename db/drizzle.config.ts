import type { Config } from 'drizzle-kit';

export default {
  schema: './src/infra/database.schema.ts',
  out: './db/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './database.sqlite',
  },
} satisfies Config;