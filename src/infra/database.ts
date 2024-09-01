import Sqlite from 'better-sqlite3';
import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './database.schema';
import repository from "./repository";

type Schema = typeof schema;
type Repository = ReturnType<typeof repository>;

export type DatabaseT = BetterSQLite3Database<Schema>;
export type DB = DatabaseT;
export type TransactionFn<T> = (tx: DatabaseT, repository: Repository) => Promise<T>;

export default class Database {
  public client: DatabaseT;
  public repository: Repository;

  private constructor(sqliteDb: Sqlite.Database) {
    this.client = drizzle(sqliteDb, { schema });
    this.repository = repository(this.client);
  }

  private static db: Sqlite.Database | null = null;

  static schema = schema;

  static connect = () => {
    this.db = new Sqlite(process.env.DATABASE_PATH);
    return new Database(this.db);
  }

  static async transaction<T>(fn: TransactionFn<T>): Promise<T> {
    return Database
      .connect()
      .client
      .transaction(async (tx) => fn(tx, repository(tx)));
  }
}