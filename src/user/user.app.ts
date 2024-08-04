import { OpenAPIHono } from '@hono/zod-openapi';
import postUserRoute from './app/post.user/post.user.route';
import getUserRoute from './app/get.user.route';

export default (app: OpenAPIHono) => {
  app.route('/', postUserRoute(app));
  app.route('/', getUserRoute(app));
  return app;
}
