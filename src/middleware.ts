import { swaggerUI } from "@hono/swagger-ui";
import { logger } from "hono/logger";
import app from "./app";

import "./user/app/get.user/get.user.route";
import "./user/app/post.user/post.user.route";

app.use(logger());

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Bluff Country Beef API",
  },
});

app.get("/ui", swaggerUI({ url: "/doc" }));
