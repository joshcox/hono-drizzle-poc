import { createRoute, z } from "@hono/zod-openapi";
import getUserQuery from "./get.user.query";
import app from "../../../app";
import UserSchema from "../../domain/user";

export default app.openapi(
  createRoute({
    path: '/user',
    method: 'get',
    responses: {
      200: {
        description: 'User',
        content: {
          'application/json': {
            schema: UserSchema,
          },
          'text/html': {
            schema: z.string(),
          },
        },
      },
    },
  }),
  async (c) => {
    const user = await getUserQuery();
    const acceptHeader = c.req.header('Accept');

    if (acceptHeader && acceptHeader.includes('text/html')) {
      return c.html(`<h1>User</h1><p>Name: ${user.name}</p>`) as any;
    } else {
      return c.json(user);
    }
  }
);