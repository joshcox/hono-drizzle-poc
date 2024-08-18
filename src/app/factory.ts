import { Context as BaseContext } from "hono";
import { createFactory } from 'hono/factory';
import { logger } from "hono/logger";
import { z } from "zod";
import Application from "../application";
import environmentSchema from "../environment.schema";
import Database from "../infra/database";

export interface Context extends BaseContext {
  Bindings: z.infer<typeof environmentSchema>;
  Variables: {
    command: Application['command'];
    query: Application['query'];
  };
}

const ContextSchema = z.object({
  command: z.object({
    createUser: z.function()
  }),
  query: z.object({
    getUser: z.function()
  }),
});

const factory = createFactory<Context>({
  initApp(app) {
    app.use(logger());
    app.use(environment);
    app.use(application);
    app.use(validateContext);
  }
});

const environment = factory.createMiddleware(async (c, n) => {
  c.env = environmentSchema.parse(process.env);
  await n();
});

const application = factory.createMiddleware(async (c, n) => {
  const { command, query } = new Application(await Database.connect());
  c.set('command', command);
  c.set('query', query);
  await n();
});

const validateContext = factory.createMiddleware(async (c, n) => {
  ContextSchema.parse(c.var);
  await n();
});

export default factory;