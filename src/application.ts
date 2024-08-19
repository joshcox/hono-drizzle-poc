import { DatabasePort, Todo, User } from "./domain";
import DatabaseManager from "./infra/database";

export default class Application {
  constructor(private database: DatabasePort) {
  }

  query = {
    getUser: async (uuid: string) =>
      this.database.repository.user.readOne(uuid),
    getTodo: async (uuid: string) =>
      this.database.repository.todo.readOne(uuid),
    getAllTodos: async () =>
      this.database.repository.todo.readAll(),
  };

  command = {
    createTodo: async (todo: Omit<Todo, "uuid">) =>
      this.database.repository.todo.create(todo),
    archiveTodo: async (uuid: string) =>
      this.database.repository.todo.archive(uuid),

    removeTodo: async (uuid: string) =>
      this.database.repository.todo.remove(uuid),
    startWork: async (uuid: string) => {
      return await DatabaseManager.transaction(async (_, repository) => {
        const todo = await repository.todo.setWorking(uuid, true);
        await repository.todoWork.startWork(todo, new Date());
        return todo;
      })
    },
    stopWork: async (uuid: string) => {
      return await DatabaseManager.transaction(async (_, repository) => {
        const todo = await repository.todo.setWorking(uuid, false);
        await repository.todoWork.stopWork(todo, new Date());
        return todo;
      });
    },
    createUser: async (user: Omit<User, "uuid">) =>
      this.database.repository.user.create(user),
  };
}
