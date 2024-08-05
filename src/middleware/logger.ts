import { Context, Next } from "hono";

export default async (ctx: Context, next: Next) => {
  const start = Date.now();
  const { method, url } = ctx.req;
  await next();
  const end = Date.now();
  const duration = end - start;
  console.log(`[${new Date().toISOString()}] ${method} ${url} (${ctx.status} ${duration}ms)`);
}
