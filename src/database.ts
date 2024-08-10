import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { Pool, PoolClient } from 'pg';
import Repository from './repository';

const user = pgTable('user', {
  uuid: uuid('uuid').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
});

export default class Database implements Disposable {
  static pool = new Pool({
    connectionString: "postgres://user:password@db:5432/bluffcountrybeef",
    max: 20, // Maximum number of connections in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
  });

  static schema = { user };

  private constructor(
    private poolClient: PoolClient,
    public client: NodePgDatabase<typeof Database.schema>
  ) { }

  static async connect() {
    const poolClient = await Database.pool.connect();
    const client = drizzle(poolClient, { schema: Database.schema });
    return new Database(poolClient, client);
  }

  repository = new Repository(this);

  [Symbol.dispose]() {
    this.poolClient?.release();
  }
}
