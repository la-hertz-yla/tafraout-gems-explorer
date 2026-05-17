import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-background" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
        <p className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium tracking-widest uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl font-semibold text-cream text-balance max-w-3xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-cream/90 text-balance">{subtitle}</p>
      </div>
    </section>
  );
}
