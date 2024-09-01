import { PropsWithChildren } from "hono/jsx";
import Footer from "../components/footer";

type LayoutProps = PropsWithChildren<{
  title: string;
}>;

export default function Layout({ children, title }: LayoutProps) {
  return (
    <html lang="en" class="h-full bg-green-50">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link href="/styles/tailwind.css" rel="stylesheet" />
        {/* Add Google Fonts for improved typography */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Merriweather&display=swap"
          rel="stylesheet"
        />
      </head>
      <body class="flex flex-col min-h-screen font-serif text-gray-800 leading-relaxed">
        {/* Make header sticky and add box shadow */}
        <header class="sticky top-0 bg-white shadow-md z-10">
          <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" class="text-2xl font-bold text-green-800 font-sans">
              Bluff Country Beef
            </a>
            <ul class="flex space-x-4">
              {/* Add hover effects to nav links */}
              <li>
                <a
                  href="/"
                  class="hover:text-green-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="hover:text-green-600 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/our-cattle"
                  class="hover:text-green-600 transition-colors duration-200"
                >
                  Our Cattle
                </a>
              </li>
              <li>
                <a
                  href="/purchasing-guide"
                  class="hover:text-green-600 transition-colors duration-200"
                >
                  Purchasing Guide
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  class="hover:text-green-600 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="hover:text-green-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="flex-grow container mx-auto px-4 py-8">{children}</main>

        <Footer>&copy; 2023 Bluff Country Beef. All rights reserved.</Footer>
      </body>
    </html>
  );
}
