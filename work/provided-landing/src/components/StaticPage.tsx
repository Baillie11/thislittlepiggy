import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, PiggyBank } from "lucide-react";

type Section = {
  title: string;
  body: string[];
};

type StaticPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function StaticPage({
  eyebrow,
  title,
  intro,
  sections,
  ctaLabel = "Join Early Access",
  ctaHref = "/#early-access"
}: StaticPageProps) {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="px-5 py-5 sm:px-8 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Main navigation">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-piggy-orange text-lg font-black text-white">
              <PiggyBank aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-base font-black tracking-tight text-piggy-ink">
              This Little Piggy
            </span>
          </Link>
          <Link
            href={ctaHref}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-piggy-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
          >
            {ctaLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <section className="px-5 pb-14 pt-10 sm:px-8 sm:pt-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-piggy-ink shadow-soft transition hover:-translate-y-0.5 hover:text-piggy-orange"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back home
          </Link>
          <p className="mt-10 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-piggy-orange shadow-soft">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-piggy-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/68 sm:text-xl">
            {intro}
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl font-black tracking-normal text-piggy-ink">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-4 text-base leading-7 text-black/68 sm:text-lg sm:leading-8">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-piggy-ink px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-normal">Need anything else?</h2>
              <p className="mt-2 font-semibold text-white/70">We would love to hear from you.</p>
            </div>
            <a
              href="mailto:hello@thislittlepiggymarketplace.com"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-piggy-gold px-6 py-3 text-base font-black text-piggy-ink transition hover:-translate-y-0.5"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
              Email us
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-black/10 pt-7 text-sm font-semibold text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright This Little Piggy</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="focus-ring rounded-full hover:text-piggy-orange">About</Link>
            <Link href="/contact" className="focus-ring rounded-full hover:text-piggy-orange">Contact</Link>
            <Link href="/privacy-policy" className="focus-ring rounded-full hover:text-piggy-orange">Privacy Policy</Link>
            <Link href="/terms" className="focus-ring rounded-full hover:text-piggy-orange">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
