import { jsxRenderer } from "hono/jsx-renderer";
import factory from "./factory";
import Main from "../ui/Main";

export default factory.createApp()
  .use(jsxRenderer(({ children }) => (
    <html>
      <body>
        <h1>Bluff Country Beef 2</h1>
        <>{children}</>
      </body>
    </html>
  )))
  .get('/', (c) => c.render(<Main />))
