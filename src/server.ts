import { serve } from "@hono/node-server";
import app from "./app";
import './middleware';

const server = serve({
  async fetch(request: Request) {
    console.log(request.url);
    return app.fetch(request);
  },
  port: 3000,
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');
  server.close(() => {
    console.log('Server has been gracefully shut down.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Shutting down gracefully...');
  server.close(() => {
    console.log('Server has been gracefully shut down.');
    process.exit(0);
  });
});
