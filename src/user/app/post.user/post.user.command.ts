import { v4 } from "uuid";
import connection from "../../../db/connection";
import { user } from "../../user.db.schema";
import { User } from "../../domain/user";

type Params = {
  name: string;
}

export default async (params: Params): Promise<User> => {
  const db = await connection;

  const [result] = await db.insert(user).values({
    uuid: v4(),
    name: params.name,
    email: 'test@test.com',
  }).returning();

  return result;
};
