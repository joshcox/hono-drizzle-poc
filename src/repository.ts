import { eq } from "drizzle-orm";
import { v4 } from "uuid";
import Database from "./database";
import { User } from "./domain";

export default class Repository {
  constructor(private database: Database) {}

  user = {
    create: async (user: Omit<User, "uuid">) => {
      const result = await this.database.client
        .insert(Database.schema.user)
        .values({ ...user, uuid: v4() })
        .returning();
  
      const createdUser = result.shift();
  
      if (!createdUser) {
        throw new Error("User not created");
      }
  
      return createdUser;
    },

    readOne: async (uuid: string) =>
      this.database.client.query.user.findFirst({
        where: eq(Database.schema.user.uuid, uuid),
      })
    }
}
