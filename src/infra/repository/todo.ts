import { eq } from "drizzle-orm";
import { v4 } from "uuid";
import { Todo } from "../../domain";
import { DatabaseError } from "../../error";
import DatabaseManager, { DB } from "../database";

type TodoRecord = typeof DatabaseManager.schema.todo.$inferSelect
const toDomain = (todo: TodoRecord): Todo => {
  return {
    ...todo,
    createdAt: new Date(todo.createdAt),
    updatedAt: new Date(todo.updatedAt),
  };
};

const toPersistence = (todo: Todo): TodoRecord => {
  return {
    ...todo,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  };
};

export const readOne = (db: DB) => async (uuid: string): Promise<Todo> => {
  const result = await db
    .select()
    .from(DatabaseManager.schema.todo)
    .where(eq(DatabaseManager.schema.todo.uuid, uuid))
    .get();

  if (!result) {
    throw new DatabaseError("Todo not found");
  }

  return toDomain(result);
};

export const readAll = (db: DB) => async (): Promise<Todo[]> => {
  const result = await db.select().from(DatabaseManager.schema.todo).all();

  if (!result) {
    throw new DatabaseError("Todos not found");
  }

  return result.map(toDomain);
};

export const archive = (db: DB) => async (uuid: string): Promise<Todo> => {
  const result = await db
    .update(DatabaseManager.schema.todo)
    .set({ archived: true })
    .where(eq(DatabaseManager.schema.todo.uuid, uuid))
    .returning()
    .get();

  if (!result) {
    throw new DatabaseError("Todo not archived");
  }

  return toDomain(result);
};


export const create = (db: DB) => async (todo: Omit<Todo, "uuid">): Promise<Todo> => {
  const result = await db.insert(DatabaseManager.schema.todo)
    .values(toPersistence({ ...todo, uuid: v4() }))
    .returning()
    .get();

  if (!result) {
    throw new DatabaseError("Todo not created");
  }

  return toDomain(result);
};

export const remove = (db: DB) => async (uuid: string): Promise<void> => {
  const result = await db
    .delete(DatabaseManager.schema.todo)
    .where(eq(DatabaseManager.schema.todo.uuid, uuid));

  if (!result) {
    throw new DatabaseError("Todo not deleted");
  }
};

export const setWorking = (db: DB) => async (uuid: string, working: boolean): Promise<Todo> => {
  const result = await db
    .update(DatabaseManager.schema.todo)
    .set({ working })
    .where(eq(DatabaseManager.schema.todo.uuid, uuid))
    .returning()
    .get();

  if (!result) {
    throw new DatabaseError("Todo not updated");
  }

  return toDomain(result);
};
