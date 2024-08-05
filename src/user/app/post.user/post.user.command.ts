import { v4 } from "uuid";
import Database from "../../../db/Database";
import { user } from "../../user.db.schema";
import { User } from "../../domain/user";

export default async (params: Pick<User, 'name'>): Promise<User> => {
  await using db = await Database.connect();

  const [result] = await db.client.insert(user).values({
    uuid: v4(),
    name: params.name,
    email: 'test@test.com',
  }).returning();

  return result;
};
