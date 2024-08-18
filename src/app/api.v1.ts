import { zValidator } from "@hono/zod-validator";
import { Handler, MiddlewareHandler } from "hono";
import { z } from "zod";
import factory, { Context } from "./factory";

const UserDTO = z.object({
  uuid: z.string(),
  email: z.string(),
  name: z.string(),
});

const PostUserBody = z.object({
  email: z.string(),
  name: z.string(),
});

interface Route {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  path: string;
  handlers: (Handler | MiddlewareHandler<Context>)[]
}

const routes: Route[] = [
  {
    method: 'get',
    path: '/users/:uuid',
    handlers: factory.createHandlers(
      async c => c.json(UserDTO.parse(await c.var.query.getUser(c.req.param("uuid"))))
    )
  },
  {
    method: 'post',
    path: '/users',
    handlers: factory.createHandlers(
      zValidator('json', PostUserBody),
      async c => c.json(c.var.command.createUser(await c.req.json()))
    )
  }
];

const app = factory.createApp();
routes.map((route) => app.on(route.method, route.path, ...route.handlers));
export default app;