import { DatabasePort, Todo } from "./domain";
import Database from "./infra/database";
import { getExerciseCollections } from "./infra/filesystem/exercise-service";

export class ExerciseManagement {
  constructor(private database: DatabasePort) { }

  query = {
    getAllExerciseDBs: async () => this.database.repository.exercisedb.readAll(),
    getExerciseServiceCollections: async () => getExerciseCollections(`/home/nerd/exercise-service`)
  };

  command = {

  }
}

export default class Application {
  constructor(private database: DatabasePort) {
  }

  query = {
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
      return await Database.transaction(async (_, repository) => {
        const todo = await repository.todo.setWorking(uuid, true);
        await repository.todoWork.startWork(todo, new Date());
        return todo;
      })
    },
    stopWork: async (uuid: string) => {
      return await Database.transaction(async (_, repository) => {
        const todo = await repository.todo.setWorking(uuid, false);
        await repository.todoWork.stopWork(todo, new Date());
        return todo;
      });
    },
  };
}
