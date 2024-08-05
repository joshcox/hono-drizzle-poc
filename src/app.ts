import { OpenAPIHono } from "@hono/zod-openapi";
import { postUser, getUser } from "./user/user.app";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();

app.route('/', postUser);
app.route('/', getUser);

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Bluff Country Beef API',
  },
});

app.get('/ui', swaggerUI({ url: '/doc' }));

export default app;
