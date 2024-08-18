import { eq } from "drizzle-orm";
import { v4 } from "uuid";
import { Todo } from "../../domain";
import { DatabaseError } from "../../error";
import DatabaseManager, { DB } from "../database";

export const create = (db: DB) => async (todo: Omit<Todo, "uuid">) => {
  const result = await db.insert(DatabaseManager.schema.todo)
    .values({
      ...todo,
      uuid: v4(),
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString()
    })
    .returning()
    .get();

  if (!result) {
    throw new DatabaseError("Todo not created");
  }

  return result;
};

export const updateStatus = (db: DB) => async (uuid: string, status: Todo["status"]) => {
  const result = await db.update(DatabaseManager.schema.todo).set({ status }).where(eq(DatabaseManager.schema.todo.uuid, uuid)).returning().get();

  if (!result) {
    throw new DatabaseError("Todo status not updated");
  }

  return result;
};

export const remove = (db: DB) => async (uuid: string) => {
  const result = await db.delete(DatabaseManager.schema.todo).where(eq(DatabaseManager.schema.todo.uuid, uuid)).returning().get();

  if (!result) {
    throw new DatabaseError("Todo not deleted");
  }

  return result;
};
