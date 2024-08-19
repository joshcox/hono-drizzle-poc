import { serve } from "@hono/node-server";
import exerciseManagement from "./app/exercise-management";
import factory from "./app/factory";
import web from "./app/web";

const app = factory.createApp()
  .route("/todo", web)
  .route("/", exerciseManagement);

const server = serve({
  fetch: (request: Request) => app.fetch(request),
  port: parseInt(process.env.PORT ?? "3000", 10),
});

process.on("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully...");
  server.close(() => {
    console.log("Server has been gracefully shut down.");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully...");
  server.close(() => {
    console.log("Server has been gracefully shut down.");
    process.exit(0);
  });
});
