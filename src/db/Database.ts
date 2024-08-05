import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool, PoolClient } from 'pg';
import * as schema from './db.schema';

export default class Database implements Disposable {
  static pool = new Pool({
    connectionString: "postgres://user:password@db:5432/bluffcountrybeef",
    max: 20, // Maximum number of connections in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
  });

  private constructor(
    private poolClient: PoolClient,
    public client: NodePgDatabase<typeof schema>
  ) { }

  static async connect() {
    const poolClient = await Database.pool.connect();
    const client = drizzle(poolClient, { schema });
    return new Database(poolClient, client);
  }

  [Symbol.dispose]() {
    this.poolClient?.release();
  }
}
