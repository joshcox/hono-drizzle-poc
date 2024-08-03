import Router from "koa-router";
import postUser from "./user/post.user.controller";
import validateBody from "../middleware/validate-body";

const root = new Router();

const user = new Router({ prefix: '/user' });
user
  .post('/', validateBody(postUser.dto), postUser.controller)
  .get('/', (ctx) => {
    console.log('Hello World');
    ctx.type = 'text/html';
    ctx.body = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World 4</h1>
      </body>
      </html>
    `;
  })

export default root
  .use(user.routes(), user.allowedMethods());

