import { OpenAPIHono } from '@hono/zod-openapi';
import postUserRoute from './post.user/post.user.route';
import getUserRoute from './get.user.route';

export default (app: OpenAPIHono) => {
  app.route('/', postUserRoute(app));
  app.route('/', getUserRoute(app));
  return app;
}
