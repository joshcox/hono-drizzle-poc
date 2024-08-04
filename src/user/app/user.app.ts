import { OpenAPIHono } from '@hono/zod-openapi';
import postUserRoute from './post.user/post.user.route.js';
import getUserRoute from './get.user.route.js';

export default (app: OpenAPIHono) => {
  app.route('/', postUserRoute(app));
  app.route('/', getUserRoute(app));
  return app;
}
