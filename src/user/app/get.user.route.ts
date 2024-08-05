import { createRoute, z } from "@hono/zod-openapi";
import app from "../../app";
import { User } from "../domain/user";

const getUser = (): User => {
  return {
    uuid: '123',
    name: 'Josh',
    email: 'josh@example.com',
  }
};

export default app.openapi(
  createRoute({
    path: '/user',
    method: 'get',
    responses: {
      200: {
        description: 'User',
        content: {
          'application/json': {
            schema: z.object({
              name: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => c.json(getUser())
);
