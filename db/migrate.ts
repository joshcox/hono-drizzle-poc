import { migrate } from 'drizzle-orm/node-postgres/migrator';
import db, { client } from '../src/db/connection';

const main = async () => {
  await migrate(await db, { migrationsFolder: './migrations' });
  await client.end();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

