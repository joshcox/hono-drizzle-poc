import { FC, PropsWithChildren } from "hono/jsx";

type EmailProps = { mailto: string };
export const Email: FC<EmailProps> = ({ mailto }) => (
  <a href={`mailto:${mailto}`} class="hover:underline text-primary">
    {mailto}
  </a>
);

type PairProps = { left: string; right: string };
export const Pair: FC<PairProps> = ({ left, right }) => (
  <div class="mb-4">
    <dt class="font-semibold text-lg">{left}</dt>
    <dd class="ml-4 text-gray-600">{right}</dd>
  </div>
);

type SectionProps = PropsWithChildren<{ title: string }>;
export const Section: FC<SectionProps> = ({ title, children }) => (
  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-primary">{title}</h2>
    {children}
  </section>
);

type CardProps = PropsWithChildren<{ title: string }>;
export const Card: FC<CardProps> = ({ title, children }) => (
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h3 class="card-title text-2xl mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

type ButtonProps = PropsWithChildren<{ href: string; variant?: 'primary' | 'secondary' | 'accent' }>;
export const Button: FC<ButtonProps> = ({ href, children, variant = 'primary' }) => (
  <a href={href} class={`btn btn-${variant}`}>
    {children}
  </a>
);

type GridProps = PropsWithChildren<{ cols?: number }>;
export const Grid: FC<GridProps> = ({ children, cols = 3 }) => (
  <div class={`grid grid-cols-1 md:grid-cols-${cols} gap-6`}>
    {children}
  </div>
);