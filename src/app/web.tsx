import { readFile } from "fs/promises";
import { serveStatic } from 'hono/serve-static';
import AboutPage from "../ui/bluff-country-beef/about";
import ContactPage from "../ui/bluff-country-beef/contact";
import FAQPage from "../ui/bluff-country-beef/faq";
import HomePage from "../ui/bluff-country-beef/index";
import OurCattlePage from "../ui/bluff-country-beef/our-cattle";
import PurchasingGuidePage from "../ui/bluff-country-beef/purchasing-guide";
import factory from "./factory";

const app = factory.createApp();

app.use('/styles/*', serveStatic({
  root: './public',
  getContent: (path: string) => readFile(path, 'utf-8')
}));

app.use('/images/*', serveStatic({
  root: './public',
  getContent: (path: string) => {
    return readFile(path);
  }
}));

app.get('/', (c) => c.html(<HomePage />));
app.get('/about', (c) => c.html(<AboutPage />));
app.get('/our-cattle', (c) => c.html(<OurCattlePage />));
app.get('/purchasing-guide', (c) => c.html(<PurchasingGuidePage />));
app.get('/faq', (c) => c.html(<FAQPage />));
app.get('/contact', (c) => c.html(<ContactPage />));

export default app;
