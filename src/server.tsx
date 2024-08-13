import { serve } from "@hono/node-server";
import { zValidator } from "@hono/zod-validator";
import { Context, Hono, Next } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { logger } from "hono/logger";
import { z } from "zod";
import Application from "./application";
import Database from "./database";
import "./middleware";
import Main from "./ui/Main";

export const EnvironmentSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().default("postgres://user:password@localhost:5432/bluffcountrybeef"),
});

export interface AppContext extends Context {
  Bindings: z.infer<typeof EnvironmentSchema>;
  Variables: {
    command: Application['command'];
    query: Application['query'];
  };
}

const UserDTO = z.object({
  uuid: z.string(),
  email: z.string(),
  name: z.string(),
});

const PostUserBody = z.object({
  email: z.string(),
  name: z.string(),
});

class App {
  private env = EnvironmentSchema.parse(process.env);

  private app = new Hono<AppContext>()
    .use(logger())
    .use(async (context: Context, next: Next) => {
      using database = await Database.connect();
      context.env = this.env;
      const { command, query } = new Application(database);
      context.set('command', command);
      context.set('query', query);
      await next();
    })
    .use('/app/*', jsxRenderer(({ children }) => (
      <html>
        <body>
          <h1>Bluff Country Beef 2</h1>
          <>{children}</>
        </body>
      </html>
    )))
    .route(
      '/app',
      new Hono<AppContext>().get('/', (c) => c.render(<Main />))
    )
    .route(
      "/users",
      new Hono<AppContext>()
        .get("/:id", (c) =>
          c.json(
            UserDTO.parse(
              c.get('query').getUser(c.req.param("id"))
            )
          )
        )
        .post("/", zValidator("json", PostUserBody), async (c) =>
          c.json(
            c.get('command').createUser(await c.req.json())
          )
        )
    );

  fetch = (request: Request) => this.app.fetch(request);
  port = this.env.PORT;
}

const server = serve(new App());

process.on("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully...");
  server.close(() => {
    console.log("Server has been gracefully shut down.");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully...");
  server.close(() => {
    console.log("Server has been gracefully shut down.");
    process.exit(0);
  });
});
