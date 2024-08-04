import { serve } from "@hono/node-server";
import { OpenAPIHono } from "@hono/zod-openapi";
import userApp from "./user/user.app";

const app = new OpenAPIHono();

app.route('/', userApp(app));

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Bluff Country Beef API',
  },
})

serve({
  async fetch(request: Request) {
    console.log(request.url);
    return app.fetch(request);
  },
  port: 3000,
});
