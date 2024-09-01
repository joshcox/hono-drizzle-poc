import { FC, PropsWithChildren } from "hono/jsx";

type EmailProps = { mailto: string };
export const Email: FC<EmailProps> = ({ mailto }) => (
  <a href={`mailto:${mailto}`} class="hover:underline">
    {mailto}
  </a>
);

type PairProps = { left: string; right: string };
export const Pair: FC<PairProps> = ({ left, right }) => (
  <div class="mb-2">
    <dt class="font-semibold">{left}</dt>
    <dd class="ml-4">{right}</dd>
  </div>
);

type SectionProps = PropsWithChildren<{ title: string }>;
export const Section: FC<SectionProps> = ({ title, children }) => (
  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);