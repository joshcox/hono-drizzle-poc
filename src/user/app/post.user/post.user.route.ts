import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import postUserCommand from "./post.user.command.js";

const PostUserBodySchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'User name',
        example: 'John Doe',
      }),
  })
  .openapi({
    description: 'User body schema',
    example: {
      name: 'John Doe',
    },
  });

export default (app: OpenAPIHono) => app.openapi(
  createRoute({
    path: '/user',
    method: 'post',
    request: {
      body: {
        content: {
          "application/json": {
            schema: PostUserBodySchema,
          }
        },
      },
    },
    responses: {
      200: {
        description: 'User',
        content: {
          'application/json': {
            schema: z.object({
              name: z.string(),
            })
          },
        },
      },
    },
  }),
  (c) => c.json(postUserCommand(c.req.valid('json')))
);
