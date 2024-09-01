import { FC, PropsWithChildren } from "hono/jsx";

type LayoutProps = PropsWithChildren<{ title: string }>;

const Layout: FC<LayoutProps> = ({ title, children }) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link href="/styles/tailwind.css" rel="stylesheet" />
    </head>
    <body class="bg-green-50">
      <header class="bg-green-800 text-white p-4">
        <nav class="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" class="text-2xl font-bold">Bluff Country Beef</a>
          <ul class="flex space-x-4">
            <li><a href="/about" class="hover:underline">About</a></li>
            <li><a href="/our-cattle" class="hover:underline">Our Cattle</a></li>
            <li><a href="/purchasing-guide" class="hover:underline">Purchasing</a></li>
            <li><a href="/faq" class="hover:underline">FAQ</a></li>
            <li><a href="/contact" class="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main class="max-w-4xl mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8 text-center text-green-900">{title}</h1>
        {children}
      </main>
      <footer class="bg-green-800 text-white p-4 mt-8">
        <div class="max-w-4xl mx-auto text-center">
          <p>&copy; 2023 Bluff Country Beef. All rights reserved.</p>
        </div>
      </footer>
    </body>
  </html>
);

export default Layout;