import { jsxRenderer } from "hono/jsx-renderer";
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
  .get("/exercisedbs", async (c) =>
    c.render(
      <table>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {(await c.var.exerciseManagement.query.getAllExerciseDBs()).map(
            (exerciseDB) => (
              <tr key={exerciseDB.filename}>
                <td>{exerciseDB.filename}</td>
                <td>{exerciseDB.createdAt}</td>
                <td>{exerciseDB.updatedAt}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    )
  )
  .get("/exercisedbs/util/getExerciseServiceCollections", async (c) => {
    const collections = await c.var.exerciseManagement.query.getExerciseServiceCollections();
    return c.json(collections);
  });
