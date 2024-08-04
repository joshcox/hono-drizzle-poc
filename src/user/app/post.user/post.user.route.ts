import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import postUserCommand from "./post.user.command";

const PostUserBodySchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'User name',
        example: 'John Doe',
      }),
    email: z
      .string()
      .openapi({
        description: 'User email',
        example: 'john.doe@example.com',
      }),
  })
  .openapi({
    description: 'User body schema',
    example: {
      name: 'John Doe',
      email: 'john.doe@example.com',
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
              uuid: z.string(),
              name: z.string(),
              email: z.string(),
            })
          },
        },
      },
    },
  }),
  async (c) => c.json(await postUserCommand(c.req.valid('json')))
);
