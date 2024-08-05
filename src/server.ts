import { serve } from "@hono/node-server";
import app from "./app";

serve({
  async fetch(request: Request) {
    console.log(request.url);
    return app.fetch(request);
  },
  port: 3000,
});
