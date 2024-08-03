import Router from "koa-router";
import postUser from "./user/post.user.controller";
import validateBody from "../middleware/validate-body";

const root = new Router();

const user = new Router({ prefix: '/user' });
user.post('/', validateBody(postUser.dto), postUser.controller);

export default root
  .use(user.routes(), user.allowedMethods());

