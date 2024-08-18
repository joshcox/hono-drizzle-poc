import { eq } from "drizzle-orm";
import { v4 } from "uuid";
import { User } from "../../domain";
import { DatabaseError } from "../../error";
import DatabaseManager, { DB } from "../database";

export const create = (db: DB) => async (user: Omit<User, "uuid">) => {
  const result = await db.insert(DatabaseManager.schema.user).values({ ...user, uuid: v4() }).returning().get();

  if (!result) {
    throw new DatabaseError("User not created");
  }

  return result;
};

export const readOne = (db: DB) => async (uuid: string) => {
  const result = await db.select().from(DatabaseManager.schema.user).where(eq(DatabaseManager.schema.user.uuid, uuid)).get();

  if (!result) {
    throw new DatabaseError("User not found");
  }

  return result;
};