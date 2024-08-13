import { ExtractTablesWithRelations } from "drizzle-orm";
import { drizzle, NodePgDatabase, NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { pgTable, PgTransaction, text, uuid } from "drizzle-orm/pg-core";
import { Pool, PoolClient } from "pg";
import Repository from "./repository";

const user = pgTable("user", {
  uuid: uuid("uuid").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use environment variable for security
  max: 20, // Maximum number of connections in the pool, balances resource usage and performance
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds to free up resources
  connectionTimeoutMillis: 5000, // Return an error after 5 seconds if connection could not be established
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // Use SSL in production for security
  statement_timeout: 10000, // Terminate any query that takes more than 10 seconds
  query_timeout: 5000, // Terminate any query that takes more than 5 seconds to execute
  application_name: 'bluffcountrybeef', // Helps identify the application in database logs
  keepAlive: true, // Helps prevent connection timeouts
  keepAliveInitialDelayMillis: 10000, // Wait 10 seconds before sending the first keepalive probe
});

const schema = { user };
type Schema = typeof schema;
type DatabaseT = NodePgDatabase<Schema>;
type TransactionT = PgTransaction<NodePgQueryResultHKT, Schema, ExtractTablesWithRelations<Schema>>;
type TransactionFn<T> = (tx: TransactionT) => Promise<T>;

export default class Database implements Disposable {
  public client: DatabaseT;
  private constructor(
    private poolClient: PoolClient,
  ) {
    this.client = drizzle(poolClient, { schema: Database.schema });
  }

  static async connect() {
    return new Database(await pool.connect());
  }

  static async transaction<T>(fn: TransactionFn<T>): Promise<T> {
    using database = await Database.connect();
    return database.client.transaction( fn);
  }

  static schema = schema;

  public repository = new Repository(this);

  [Symbol.dispose]() {
    this.poolClient?.release();
  }
}