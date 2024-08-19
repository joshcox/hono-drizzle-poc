import { Context as BaseContext } from "hono";
import { createFactory } from 'hono/factory';
import { logger } from "hono/logger";
import { z } from "zod";
import Application, { ExerciseManagement } from "../application";
import environmentSchema from "../environment.schema";
import Database from "../infra/database";

export interface Context extends BaseContext {
  Bindings: z.infer<typeof environmentSchema>;
  Variables: {
    command: Application['command'];
    query: Application['query'];
    exerciseManagement: ExerciseManagement;
  };
}

const factory = createFactory<Context>({
  initApp(app) {
    app.use(logger());
    app.use(environment);
    app.use(application);
  }
});

const environment = factory.createMiddleware(async (c, n) => {
  c.env = environmentSchema.parse(process.env);
  await n();
});

const application = factory.createMiddleware(async (c, n) => {
  const database = await Database.connect();
  const { command, query } = new Application(database);
  c.set('command', command);
  c.set('query', query);
  c.set('exerciseManagement', new ExerciseManagement(database));
  await n();
});

export default factory;