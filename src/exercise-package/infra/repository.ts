import { eq } from "drizzle-orm";
import { v4 } from "uuid";
import { ExerciseDB } from "../../domain";
import { DatabaseError } from "../../error";
import Database, { DB } from "../../infra/database";

type ExerciseDBRecord = typeof Database.schema.exercise_package.$inferSelect;

const toDomain = (exerciseDB: ExerciseDBRecord): ExerciseDB => {
  return {
    ...exerciseDB,
    createdAt: new Date(exerciseDB.createdAt),
    updatedAt: new Date(exerciseDB.updatedAt),
  };
};

const toPersistence = (exerciseDB: ExerciseDB): ExerciseDBRecord => {
  return {
    ...exerciseDB,
    createdAt: exerciseDB.createdAt.toISOString(),
    updatedAt: exerciseDB.updatedAt.toISOString(),
  };
};

export const create = (db: DB) => async (exerciseDB: Omit<ExerciseDB, "uuid">): Promise<ExerciseDB> => {
  const result = await db.insert(Database.schema.exercise_package)
    .values(toPersistence({ ...exerciseDB, uuid: v4() }))
    .returning()
    .get();

  if (!result) {
    throw new DatabaseError("ExerciseDB not created");
  }

  return toDomain(result);
};

export const readOne = (db: DB) => async (uuid: string): Promise<ExerciseDB> => {
  const result = await db
    .select()
    .from(Database.schema.exercise_package)
    .where(eq(Database.schema.exercise_package.uuid, uuid))
    .get();

  if (!result) {
    throw new DatabaseError("ExerciseDB not found");
  }

  return toDomain(result);
};

export const readAll = (db: DB) => async (): Promise<ExerciseDB[]> => {
  const result = await db.select().from(Database.schema.exercise_package).all();

  if (!result) {
    throw new DatabaseError("ExerciseDBs not found");
  }

  return result.map(toDomain);
};

export const remove = (db: DB) => async (uuid: string): Promise<void> => {
  const result = await db
    .delete(Database.schema.exercise_package)
    .where(eq(Database.schema.exercise_package.uuid, uuid));

  if (!result) {
    throw new DatabaseError("ExerciseDB not deleted");
  }
};