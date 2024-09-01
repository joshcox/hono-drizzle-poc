import { PropsWithChildren } from "hono/jsx";
import Footer from "../components/footer";

type LayoutProps = PropsWithChildren<{
  title: string;
}>;

export default function Layout({ children, title }: LayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" class="h-full bg-green-50">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link href="/styles/tailwind.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Merriweather&display=swap"
          rel="stylesheet"
        />
      </head>
      <body class="flex flex-col min-h-screen font-serif text-gray-800 leading-relaxed">
        <header class="sticky top-0 bg-white shadow-md z-10">
          <div class="navbar bg-base-100">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabIndex={0} class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/our-cattle">Our Cattle</a></li>
                  <li><a href="/purchasing-guide">Purchasing Guide</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <a href="/" class="btn btn-ghost normal-case text-xl">Bluff Country Beef</a>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/our-cattle">Our Cattle</a></li>
                <li><a href="/purchasing-guide">Purchasing Guide</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div class="navbar-end">
              <a href="/contact" class="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </header>
        <main class="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer copyrightYear={currentYear} />
      </body>
    </html>
  );
}
