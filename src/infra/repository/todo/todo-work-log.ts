import { desc, eq } from "drizzle-orm";
import { v4 } from "uuid";
import { Todo } from "../../../domain";
import DatabaseManager, { DB } from "../../database";

export const startWork = (db: DB) => async (todo: Todo, start: Date) => {
  const workLog = await db
    .insert(DatabaseManager.schema.todo_work_log)
    .values({
      uuid: v4(),
      todo_uuid: todo.uuid,
      start: start.toISOString(),
      end: null,
    })
    .returning()
    .get();

  if (!workLog) {
    throw new Error("Work log not found");
  }

  return workLog;
};

export const stopWork = (db: DB) => async (todo: Todo, end: Date) => {
  const workLog = await db
    .update(DatabaseManager.schema.todo_work_log)
    .set({ end: end.toISOString() })
    .where(eq(DatabaseManager.schema.todo_work_log.todo_uuid, todo.uuid))
    .returning()
    .get();

  if (!workLog) {
    throw new Error("Work log not found");
  }

  return workLog;
};

export const getWorkLog = (db: DB) => async (todo: Todo) => {
  return db
    .select()
    .from(DatabaseManager.schema.todo_work_log)
    .where(eq(DatabaseManager.schema.todo_work_log.todo_uuid, todo.uuid))
    .orderBy(desc(DatabaseManager.schema.todo_work_log.start));
};