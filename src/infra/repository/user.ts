import { eq } from "drizzle-orm";
import { v4 } from "uuid";
import { User } from "../../domain";
import Database, { DB } from "../database";

export const create = (db: DB) => async (user: Omit<User, "uuid">) => {
  const result = await db.insert(Database.schema.user).values({ ...user, uuid: v4() }).returning();
  const createdUser = result.shift();

  if (!createdUser) {
    throw new Error("User not created");
  }

  return createdUser;
};

export const readOne = (db: DB) => async (uuid: string) => {
  const result = await db.query.user.findFirst({
    where: eq(Database.schema.user.uuid, uuid),
  });

  if (!result) {
    throw new Error("User not found");
  }

  return result;
};