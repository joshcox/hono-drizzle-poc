import { createRoute, z } from "@hono/zod-openapi";
import getUserQuery from "./get.user.query";
import app from "../../../app";

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
  (c) => c.json(getUserQuery())
);
