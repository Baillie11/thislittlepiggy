"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Bot,
  ChartNoAxesCombined,
  CircleDollarSign,
  Compass,
  Flag,
  History,
  House,
  PiggyBank,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  UploadCloud,
  UsersRound
} from "lucide-react";
import { SignupForm } from "@/components/SignupForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const launchCards = [
  {
    title: "Launching 2026",
    label: "Trade-up marketplace",
    href: undefined
  },
  {
    title: "Register for early access today",
    label: "Join the first waitlist",
    href: "#early-access"
  }
];

const steps = [
  {
    icon: UploadCloud,
    number: "1",
    title: "List Your Item",
    body: "Upload photos and describe what you want to trade."
  },
  {
    icon: Flag,
    number: "2",
    title: "Set Your Goal",
    body: "Choose a car, caravan, boat, tiny home, house, or anything else."
  },
  {
    icon: Search,
    number: "3",
    title: "Get Trade Suggestions",
    body: "Our AI searches for potential upgrades and opportunities."
  },
  {
    icon: Trophy,
    number: "4",
    title: "Keep Trading Up",
    body: "Track your journey and celebrate milestones along the way."
  }
];

const features = [
  {
    icon: Sparkles,
    title: "Smart Trade Suggestions",
    body: "AI analyses listings and suggests potential upgrades."
  },
  {
    icon: ChartNoAxesCombined,
    title: "Goal Tracking",
    body: "Visual progress from your first item to your dream item."
  },
  {
    icon: CircleDollarSign,
    title: "Trade Value Insights",
    body: "Estimate fair value and identify possible gains."
  },
  {
    icon: Compass,
    title: "Marketplace Integration",
    body: "Find opportunities from multiple marketplaces in one place."
  },
  {
    icon: UsersRound,
    title: "Community Trading",
    body: "Connect with other traders looking to upgrade."
  },
  {
    icon: BadgeCheck,
    title: "Achievement Badges",
    body: "Unlock milestones and showcase your journey."
  },
  {
    icon: History,
    title: "Trade History",
    body: "Document every step of your story."
  },
  {
    icon: ShieldCheck,
    title: "Safety Tools",
    body: "Profile verification and trade reputation systems."
  }
];

const journeys = [
  "Paperclip to Caravan Challenge",
  "Bicycle to Car Challenge",
  "Furniture to Tiny Home Challenge"
];

const faqs = [
  ["Is this free?", "Yes, early access will be free."],
  ["Do I need valuable items?", "No. Many successful trade journeys started with almost nothing."],
  ["How does the AI work?", "It analyses listings and identifies potential upgrade opportunities."],
  ["Can I list my own trades?", "Yes. The platform will support both internal listings and marketplace opportunities."],
  ["Is it available worldwide?", "The long-term goal is global availability."]
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" }
];

function Section({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function MotionBlock({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function LandingPage() {
  return (
    <main className="overflow-hidden">
      <a
        href="#early-access"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-black focus:text-piggy-ink focus:shadow-soft"
      >
        Skip to early access form
      </a>
      <header className="px-5 py-5 sm:px-8 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Main navigation">
          <a href="#" className="focus-ring flex items-center gap-3 rounded-full">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-piggy-orange text-lg font-black text-white">
              <PiggyBank aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-base font-black tracking-tight text-piggy-ink">
              This Little Piggy
            </span>
          </a>
          <a
            href="#early-access"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-piggy-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
          >
            Join Early Access
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <Section className="pb-12 pt-8 sm:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionBlock>
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-piggy-orange shadow-soft">
                Trade Up. Dream Bigger.
              </p>
              <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-normal text-piggy-ink sm:text-6xl lg:text-7xl">
                Trade a Paperclip Into a House
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black/70 sm:text-xl">
                This Little Piggy helps you trade everyday items into bigger and better ones. Set a goal, track your progress, discover opportunities, and let AI help you find your next trade.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#early-access"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-piggy-orange px-7 py-3 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ea7000]"
                >
                  Join Early Access
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href="#how-it-works"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 text-base font-bold text-piggy-ink transition hover:-translate-y-0.5 hover:border-piggy-orange/40"
                >
                  See How It Works
                  <Compass aria-hidden="true" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </MotionBlock>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-6 rounded-[3rem] bg-piggy-gold/35 blur-3xl" />
            <Image
              priority
              src="/images/trade-ladder-hero.png"
              alt="A visual trade ladder from a paperclip to a house"
              width={1400}
              height={1050}
              className="relative h-auto w-full rounded-[2rem] shadow-glow"
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
          </motion.div>
        </div>
      </Section>

      <Section>
        <MotionBlock>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-normal text-piggy-ink sm:text-5xl">
                The Idea Has Already Worked
              </h2>
              <p className="mt-4 text-lg leading-8 text-black/68">
                Kyle MacDonald famously traded a paperclip into a house. Since then, thousands of others have followed in his footsteps and traded up from small items to kayaks, boats, cars, and even houses. This Little Piggy honours those trades and makes it easier than ever to chase the same dream.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {launchCards.map(({ title, label, href }) => {
                const content = (
                  <>
                  <div className="flex items-center gap-2 text-3xl font-black text-piggy-orange">
                    {title}
                    {href ? <ArrowRight aria-hidden="true" className="h-6 w-6 shrink-0" /> : null}
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-black/50">{label}</div>
                  </>
                );

                return href ? (
                  <a
                    key={title}
                    href={href}
                    className="focus-ring rounded-3xl border border-black/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-piggy-orange/30"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </MotionBlock>
      </Section>

      <Section id="how-it-works" className="bg-piggy-ink text-white">
        <MotionBlock>
          <div className="mb-9 max-w-2xl">
            <h2 className="text-4xl font-black tracking-normal sm:text-5xl">Start With What You Have</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, number, title, body }) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-piggy-gold text-piggy-ink">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-piggy-gold">Step {number}</p>
                <h3 className="mt-2 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </MotionBlock>
      </Section>

      <Section>
        <MotionBlock>
          <div className="mb-9 max-w-3xl">
            <h2 className="text-4xl font-black tracking-normal text-piggy-ink sm:text-5xl">
              Your Personal Trade-Up Assistant
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-3xl border border-black/6 bg-white p-5 shadow-soft transition hover:-translate-y-1">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-piggy-cream text-piggy-orange">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black text-piggy-ink">{title}</h3>
                <p className="mt-3 leading-7 text-black/65">{body}</p>
              </article>
            ))}
          </div>
        </MotionBlock>
      </Section>

      <Section className="bg-gradient-to-br from-piggy-cream via-white to-piggy-blush">
        <MotionBlock>
          <div className="grid gap-9 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-normal text-piggy-ink sm:text-5xl">
                Let AI Find Opportunities For You
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/68">
                Our AI continuously searches listings and identifies possible trades that move you closer to your goal.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-soft">
              {["You have a bicycle worth $300.", "Trade for camping gear worth $450", "Trade camping gear for a kayak worth $700", "Trade kayak for a trailer worth $1,200"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="mb-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm last:mb-0"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-piggy-orange text-sm font-black text-white">
                    {index === 0 ? (
                      <Bike aria-hidden="true" className="h-4 w-4" />
                    ) : index === 3 ? (
                      <House aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <Bot aria-hidden="true" className="h-4 w-4" />
                    )}
                  </span>
                  <span className="font-bold text-piggy-ink">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionBlock>
      </Section>

      <Section>
        <MotionBlock>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-normal text-piggy-ink sm:text-5xl">
                Follow Amazing Trade Journeys
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/68">
                Follow real challenges, learn from other traders, and build momentum with a community chasing bigger goals together.
              </p>
            </div>
            <div className="grid gap-4">
              {journeys.map((journey) => (
                <article key={journey} className="flex items-center justify-between gap-4 rounded-3xl border border-black/6 bg-white p-5 shadow-soft">
                  <h3 className="text-lg font-black text-piggy-ink">{journey}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-piggy-cream px-4 py-2 text-sm font-black text-piggy-orange">
                    Follow
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </MotionBlock>
      </Section>

      <Section id="early-access" className="bg-piggy-orange">
        <MotionBlock>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="text-white">
              <h2 className="text-4xl font-black tracking-normal sm:text-5xl">Be First In Line</h2>
              <p className="mt-5 text-lg leading-8 text-white/84">
                Join the waiting list and help shape the future of trading.
              </p>
            </div>
            <SignupForm />
          </div>
        </MotionBlock>
      </Section>

      <Section>
        <MotionBlock>
          <h2 className="mb-8 text-4xl font-black tracking-normal text-piggy-ink sm:text-5xl">FAQ</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-3xl border border-black/6 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-black text-piggy-ink">
                  {question}
                </summary>
                <p className="mt-3 leading-7 text-black/65">{answer}</p>
              </details>
            ))}
          </div>
        </MotionBlock>
      </Section>

      <Section className="pb-8">
        <div className="rounded-[2rem] bg-piggy-ink px-6 py-12 text-center text-white sm:px-10">
          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-normal sm:text-5xl">
            Your Dream Item Might Be Closer Than You Think
          </h2>
          <a
            href="#early-access"
            className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-piggy-gold px-7 py-3 text-base font-black text-piggy-ink transition hover:-translate-y-0.5"
          >
            Join Early Access
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
          <p className="mt-4 font-semibold text-white/70">Start with what you have today.</p>
        </div>
      </Section>

      <footer className="px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-black/10 pt-7 text-sm font-semibold text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright This Little Piggy{" "}
            <span className="text-black/35">|</span>{" "}
            Powered by:{" "}
            <a
              href="https://www.clickecommerce.com.au"
              className="focus-ring rounded-full hover:text-piggy-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click eCommerce
            </a>
          </p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="focus-ring rounded-full hover:text-piggy-orange">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
