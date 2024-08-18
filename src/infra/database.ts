import Database from 'better-sqlite3';
import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './database.schema';
import repository from "./repository";

type Schema = typeof schema;
type Repository = ReturnType<typeof repository>;

export type DatabaseT = BetterSQLite3Database<Schema>;
export type DB = DatabaseT;
export type TransactionFn<T> = (tx: DatabaseT, repository: Repository) => Promise<T>;

export default class DatabaseManager implements Disposable {
  public client: DatabaseT;
  public repository: Repository;

  private constructor(private sqliteDb: Database.Database) {
    this.client = drizzle(sqliteDb, { schema });
    this.repository = repository(this.client);
  }

  static schema = schema;

  static connect = () => {
    const sqliteDb = new Database(process.env.DATABASE_PATH);
    return new DatabaseManager(sqliteDb);
  }

  static async transaction<T>(fn: TransactionFn<T>): Promise<T> {
    const database = DatabaseManager.connect();
    try {
      return await database.client.transaction(async (tx) => fn(tx, repository(tx)));
    } finally {
      database[Symbol.dispose]();
    }
  }

  [Symbol.dispose]() {
    this.sqliteDb.close();
  }
}