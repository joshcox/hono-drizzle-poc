import { zValidator } from "@hono/zod-validator";
import { jsxRenderer } from "hono/jsx-renderer";
import { z } from "zod";
import { TodoRow, Todos } from "../ui/todo";
import factory from "./factory";

export default factory
  .createApp()
  .use((c, next) => {
    if (!c.req.header("hx-request")) {
      return jsxRenderer(({ children }) => (
        <html>
          <head>
            <script src="https://unpkg.com/htmx.org@1.9.6"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            ></link>
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
              rel="stylesheet"
            ></link>
            <link
              href="https://cdn.jsdelivr.net/npm/skeleton-css@2.0.4/css/normalize.min.css"
              rel="stylesheet"
            ></link>
            <link
              href="https://cdn.jsdelivr.net/npm/skeleton-css@2.0.4/css/skeleton.min.css"
              rel="stylesheet"
            ></link>
            <title>Todo App</title>
          </head>
          <body>{children}</body>
        </html>
      ))(c, next);
    }
    return next();
  })
  .get("/", async (c) =>
    c.render(<Todos todos={await c.var.query.getAllTodos()} />)
  )
  .get("/todos/:uuid", async (c) =>
    c.render(<TodoRow todo={await c.var.query.getTodo(c.req.param("uuid"))} />)
  )
  .put("/todos/:uuid/start", async (c) =>
    c.render(
      <TodoRow todo={await c.var.command.startWork(c.req.param("uuid"))} />
    )
  )
  .put("/todos/:uuid/stop", async (c) =>
    c.render(
      <TodoRow todo={await c.var.command.stopWork(c.req.param("uuid"))} />
    )
  )
  .post(
    "/todos",
    zValidator(
      "form",
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    async (c) =>
      c.render(
        <TodoRow
          todo={await c.var.command.createTodo({
            ...c.req.valid("form"),
            createdAt: new Date(),
            updatedAt: new Date(),
            working: false,
            archived: false,
          })}
        />
      )
  )
  .delete("/todos/:uuid", async (c) => {
    await c.var.command.removeTodo(c.req.param("uuid"));
    return c.body(null, 200);
  });
