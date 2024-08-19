/**
 * This module is responsible for aggregating the various modules that interact with the database
 * together into a single interface, the repository.
 * 
 * A repository can be instantiated by calling the default export with a database or transaction
 * client. 
 * 
 * @TODO Consider adding lazy loading to each repository function.
 */

import { DatabaseError } from "../error";
import { DB } from "./database";
import * as exercisedb from "./repository/exercisedb";
import * as todo from "./repository/todo/todo";
import * as todoWork from "./repository/todo/todo-work-log";

/**
 * A constructor function that takes a database or transaction client and returns a function that
 * interacts with that database or transaction client.
 */
type UnconnectedFn = (db: DB) => (...args: any) => any;

/**
 * Extract the inner function type of an UnconnectedFn.
 */
type ExtractInnerUnconnectedFn<T> = T extends (db: DB) => infer U ? U : never;

/**
 * An arbitrarily deep object where the leaf values are UnconnectedFns. 
 * This defines the shape of the repository.
 */
type UnconnectedRepo = { [name: string]: UnconnectedFn | UnconnectedRepo };

/**
 * Get the shape of a connected repository given a RepoConfiguration.
 */
type ConnectedRepo<T extends UnconnectedRepo> = {
  [K in keyof T]: T[K] extends UnconnectedFn
  ? ExtractInnerUnconnectedFn<T[K]>
  : T[K] extends UnconnectedRepo
  ? ConnectedRepo<T[K]>
  : never;
};

/**
 * Wraps a connected function with a try/catch that normalizes any thrown values into a DatabaseError and rethrows.
 */
const withDatabaseError = <T extends (...args: any) => any>(fn: T): T => {
  return (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      return await fn(...args);
    } catch (error) {
      throw new DatabaseError(error instanceof Error ? error.message : String(error), { cause: error});
    }
  }) as T;
};


/**
 * Connects all repositories in a deep object to a database or transaction client.
 * The RepoConfiguration is a deep object of 
 */
const connect = <T extends UnconnectedRepo>(db: DB, unconnectedRepo: T): ConnectedRepo<T> =>
  <ConnectedRepo<T>>Object.fromEntries(
    Object.entries(unconnectedRepo).map(([k, v]) => [
      k,
      typeof v === 'function' ? withDatabaseError(v(db)) : connect(db, v)
    ])
  );

/**
 * Injects a database or transaction client into each repository function. To be eligible for
 * usage in this repository, a module must export named functions of the following signature:
 * 
 * ```ts
 * type RepositoryFn = (db: DB) => (...args: any) => any;
 * ```
 * 
 * @example
 * ```ts
 * import repository from '.../repository.ts';
 * const repo = repository(db);
 * await repo.user.create({ name: 'John Doe' });
 * ```
 */
export default (db: DB) => connect(db, {
  todo,
  todoWork,
  exercisedb
});