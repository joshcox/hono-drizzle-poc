import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';

export const client = new Client({
  connectionString: "postgres://user:password@db:5432/bluffcountrybeef"
});

export default new Promise<NodePgDatabase<typeof schema>>(async (res) => {
  await client.connect();
  res(drizzle(client, { schema }));
});
