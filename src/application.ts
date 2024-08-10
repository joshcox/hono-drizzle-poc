import { DatabasePort, User } from "./domain";

export default class Application {
  constructor(private database: DatabasePort) {
  }

  query = {
    getUser: async (uuid: string) =>
      this.database.repository.user.readOne(uuid),
  };

  command = {
    createUser: async (user: Omit<User, "uuid">) =>
      this.database.repository.user.create(user),
  };
}
