import z from "zod";
import { Context } from "koa";

const PostUserBodyDTO = z.object({
  name: z.string(),
});

type Override = { request: { body: z.infer<typeof PostUserBodyDTO> } };

const postUserController = (ctx: Context & Override) => {
  ctx.body = 'Welcome to Bluff Country Beef';
};

export default {
  dto: PostUserBodyDTO,
  controller: postUserController
}

