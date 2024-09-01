import { readFile } from "fs/promises";
import { jsxRenderer } from "hono/jsx-renderer";
import { serveStatic } from 'hono/serve-static';
import BluffCountryBeef from "../ui/bluff-country-beef";
import factory from "./factory";

export default factory
  .createApp()
  .use('/styles/*', serveStatic({
    root: './public',
    getContent: (path: string) => readFile(path, 'utf-8')
  }))
  .use('*', jsxRenderer(({ children }) => (
    <html>
      <head>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <link href="/styles/tailwind.css" rel="stylesheet" />
        <title>Bluff Country Beef</title>
      </head>
      <body>{children}</body>
    </html>
  )))
  .get('/', async (c) => {
    const html = <BluffCountryBeef />;
    console.log(html);
    return c.render(html);
  });
