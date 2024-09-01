import Sqlite from 'better-sqlite3';
import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';

/**
 * A singleton class that manages SQLite database connections.
 * 
 * This class ensures that only one connection is created per database file,
 * preventing unnecessary overhead and potential conflicts from multiple
 * connections to the same database.
 * 
 * The singleton pattern is implemented using a class with a private constructor
 * and a public static method to access the single instance.
 * 
 * @class
 * @property {Map<string, Sqlite.Database>} dbs - A map to store database connections,
 *                                                keyed by filename.
 * @method ensure - Ensures a database connection exists for the given filename,
 *                  creating one if it doesn't exist.
 * 
 * Usage:
 * ```ts
 * const db = databaseStore.get('path/to/database.sqlite');
 * ```
 * 
 * This approach allows for efficient management of database connections
 * across the application, ensuring that each database file is only opened once,
 * even if requested from multiple parts of the codebase.
 */

const databaseStore = new class {
  private dbs: Map<string, Sqlite.Database> = new Map();
  public get = (filename: string) => {
    if (!this.dbs.get(filename)) {
      this.dbs.set(filename, new Sqlite(filename));
    }
    const db = this.dbs.get(filename);
    if (!db) {
      throw new Error(`Database not found: ${filename}`);
    }
    return db;
  }
};

type DatabaseOptions<Schema extends Record<string, unknown>, Repository> = {
  filename: string;
  schema: Schema;
  createRepository: (client: BetterSQLite3Database<Schema>) => Repository;
};
/**
 * A generic database class that provides a unified interface for database operations.
 * 
 * This class encapsulates the database connection, schema, and repository creation,
 * providing a consistent way to interact with the database across the application.
 * 
 * It uses the singleton databaseStore to manage SQLite connections efficiently,
 * ensuring only one connection per database file.
 * 
 * @template Schema - The type representing the database schema
 * @template Repository - The type representing the repository interface
 * 
 * @property {BetterSQLite3Database<Schema>} client - The database client
 * @property {Function} createRepository - A function to create the repository
 * @property {Repository} repository - The repository instance for database operations
 * 
 * @method constructor - Private constructor to enforce singleton pattern
 * @method use - Executes a function with access to the database client and repository
 * @method transaction - Executes a function within a database transaction
 * 
 * Usage:
 * ```ts
 * const db = new Database({
 *   filename: 'path/to/database.sqlite',
 *   schema: mySchema,
 *   createRepository: (client) => new MyRepository(client)
 * });
 * 
 * await db.use(async (client, repo) => {
 *   // Perform database operations
 * });
 * 
 * await db.transaction(async (tx, repo) => {
 *   // Perform transactional operations
 * });
 * ```
 * 
 * This class provides a robust and type-safe way to interact with the database,
 * supporting both regular queries and transactions, while maintaining a clean
 * separation of concerns between the database connection, schema, and repository logic.
 */

export default class Database<Schema extends Record<string, unknown>, Repository> {
  private client: BetterSQLite3Database<Schema>;
  private createRepository: (client: BetterSQLite3Database<Schema>) => Repository;
  public repository: Repository;

  constructor({ filename, schema, createRepository }: DatabaseOptions<Schema, Repository>) {
    this.createRepository = createRepository;
    this.client = drizzle(databaseStore.get(filename), { schema });
    this.repository = createRepository(this.client);
  }

  async use<T>(fn: (client: BetterSQLite3Database<Schema>, repository: Repository) => Promise<T>): Promise<T> {
    return fn(this.client, this.repository);
  }

  async transaction<T>(fn: (tx: BetterSQLite3Database<Schema>, repository: Repository) => Promise<T>): Promise<T> {
    return this.client.transaction(async (tx) => fn(tx, this.createRepository(tx)));
  }
}