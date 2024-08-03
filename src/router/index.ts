import Router from "koa-router";
import postUser from "./user/post.user.controller";
import validateBody from "../middleware/validate-body";

const root = new Router();

const user = new Router({ prefix: '/user' });
user.post('/', validateBody(postUser.dto), postUser.controller)
.get('/', (ctx) => {
  ctx.body = '<i>Hello World</i>';
})

export default root
  .use(user.routes(), user.allowedMethods());

