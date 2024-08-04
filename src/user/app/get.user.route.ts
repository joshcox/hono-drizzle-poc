import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";

type User = {
  name: string;
};

const getUser = (): User => {
  return {
    name: 'Josh',
  }
};

export default (app: OpenAPIHono) => app.openapi(
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
