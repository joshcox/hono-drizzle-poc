import { PropsWithChildren } from "hono/jsx";

export default function Footer({ children }: PropsWithChildren) {
  return (
    <footer class="footer footer-center text-base-content p-4">
      <div class="container mx-auto px-4">
        <p class="text-center">
          {children}
        </p>
      </div>
    </footer>
  );
}
