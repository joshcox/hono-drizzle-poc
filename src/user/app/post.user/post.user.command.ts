import { v4 } from "uuid";
import connection from "../../../db/db.connection";
import { user } from "../../user.db.schema";
import { User } from "../../domain/user";

export default async (params: Pick<User, 'name'>): Promise<User> => {
  const db = await connection;

  const [result] = await db.insert(user).values({
    uuid: v4(),
    name: params.name,
    email: 'test@test.com',
  }).returning();

  return result;
};
