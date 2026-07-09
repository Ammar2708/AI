import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiSend,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { useQuoteModal } from "../QuoteModalContext";

const serviceCards = [
  {
    icon: FiTarget,
    title: "Campaign landing pages",
    to: "/services/landing-page-development",
    text: "Focused pages for paid ads, lead magnets, launches, events, and single-offer campaigns.",
  },
  {
    icon: FiGrid,
    title: "Conversion structure",
    to: "/services/conversion-marketing",
    text: "Hero, proof, benefits, objections, forms, and FAQs arranged around one clear visitor action.",
  },
  {
    icon: FiTrendingUp,
    title: "Tracking-ready builds",
    to: "/services/conversion-marketing",
    text: "Analytics events, pixels, form paths, and handoff points planned around campaign measurement.",
  },
  {
    icon: FiZap,
    title: "Fast responsive pages",
    to: "/services/website-development",
    text: "Lightweight layouts, optimized media, clear states, and mobile-first checks for smoother launches.",
  },
];

const benefits = [
  {
    icon: FiTarget,
    title: "Campaign-first strategy",
    to: "/services/conversion-marketing",
    text: "We align the audience, offer, traffic source, page message, and CTA before visual design starts.",
  },
  {
    icon: FiLayers,
    title: "Focused page sections",
    to: "/services/landing-page-development",
    text: "Every section has a job, so visitors can understand the offer quickly and move toward action.",
  },
  {
    icon: FiCode,
    title: "Clean front-end build",
    to: "/services/website-development",
    text: "Reusable sections, responsive spacing, and practical code keep the page easier to change after launch.",
  },
  {
    icon: FiBarChart2,
    title: "Built for iteration",
    to: "/services/conversion-marketing",
    text: "Headlines, CTAs, proof points, imagery, and form details can be adjusted as campaigns evolve.",
  },
];

const process = [
  {
    title: "Campaign discovery",
    text: "We review the offer, audience, ad promise, traffic source, competitors, and what counts as a successful conversion.",
  },
  {
    title: "Messaging and wireframe",
    text: "The page is shaped around one primary action, with proof, objections, FAQs, and supporting details placed where visitors need them.",
  },
  {
    title: "Visual design",
    text: "We design a polished page that fits your brand while still feeling campaign-specific, sharp, and easy to act on.",
  },
  {
    title: "Responsive development",
    text: "The page is built with clean sections, fast media, working forms, clear states, and mobile-first checks.",
  },
  {
    title: "Launch and iteration",
    text: "After QA, analytics, and handover, the page can be refined with new headlines, offers, proof points, or campaign variants.",
  },
];

const faqs = [
  {
    question: "What is a landing page best used for?",
    answer:
      "Landing pages work best for paid ads, email campaigns, product launches, lead magnets, event promotions, and focused offers where visitors should take one clear action.",
  },
  {
    question: "Can you build a landing page that matches our existing site?",
    answer:
      "Yes. We can use your existing brand, typography, content style, and technical setup while making the page more campaign-focused than a standard website page.",
  },
  {
    question: "Do you support forms, tracking, and CRM handoff?",
    answer:
      "Yes. We can connect forms, analytics events, pixels, and lead routing when the required tools and access are available.",
  },
  {
    question: "Can the page be updated after launch?",
    answer:
      "Yes. We build sections with future testing in mind, so headlines, CTAs, testimonials, imagery, and offer details can be changed without rebuilding from scratch.",
  },
];

const relatedServices = [
  { icon: FiMonitor, title: "Website development", to: "/services/website-development" },
  { icon: FiLayers, title: "Web applications development", to: "/services/web-application-development" },
  { icon: FiCode, title: "WordPress development", to: "/services/wordpress-development" },
  { icon: FiBarChart2, title: "Conversion marketing", to: "/services/conversion-marketing" },
];

const Badge = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
    <span className="size-2 rounded-full bg-[#6654ff]" />
    {children}
  </div>
);

const GradientText = ({ children }) => (
  <span className="bg-[linear-gradient(90deg,#8b5cf6_0%,#d946ef_45%,#ff2d78_100%)] bg-clip-text text-transparent">
    {children}
  </span>
);

const SectionShell = ({ sideLabel, dark = false, children, className = "" }) => (
  <section
    className={`relative overflow-hidden px-4 py-16 md:px-8 lg:px-9 lg:py-20 ${className} ${
      dark ? "bg-[#050816] text-white" : "bg-black text-white"
    }`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_30%,rgba(102,84,255,0.22),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(15,194,255,0.16),transparent_32%),radial-gradient(circle_at_52%_80%,rgba(255,45,120,0.14),transparent_30%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-xs font-bold uppercase tracking-[0.32em] text-white/18 lg:block">
      {sideLabel}
    </p>
    <div className="relative mx-auto max-w-[1180px]">{children}</div>
  </section>
);

const BrowserMock = () => (
  <div className="relative mx-auto max-w-[500px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(255,45,120,0.18)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#050816]">
        <img
          src="/imgi_105_landing-page-conversion-structure-workspace-1-768x432.jpg.webp"
          alt="Landing page campaign workspace"
          className="h-[270px] w-full object-cover opacity-85 md:h-[330px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.76))]" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
            campaign flow
          </p>
          <p className="mt-2 max-w-sm text-2xl font-semibold text-white">
            One page, one message, one action
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Offer", "Proof", "Lead"].map((item) => (
          <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 md:p-4">
            <div className="mb-4 grid size-9 place-items-center rounded-lg bg-white text-black">
              <FiCheckCircle />
            </div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Landing = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Landing Page Development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Landing pages built to focus, persuade, and convert.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We plan, design, and develop focused landing pages for paid ads,
              product launches, lead generation, email flows, and promo
              campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Hire us
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="/services"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </a>
            </div>
          </div>
          <BrowserMock />
        </div>
      </section>

      <SectionShell id="services" sideLabel="services" className="pt-10">
        <div id="services" className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Badge>What we build</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Landing page <GradientText>development services</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              From campaign message to launch checks, every decision is made so
              visitors understand the offer quickly and know what to do next.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(card.icon)}
                </span>
                <h3 className="mt-6 flex items-center justify-between gap-4 text-xl font-semibold">
                  <span>{card.title}</span>
                  <FiArrowUpRight className="shrink-0 text-white/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="benefits" dark>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Benefits of our <GradientText>landing page development</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              A good landing page should be focused enough to convert, fast
              enough to support paid traffic, and simple enough to improve
              after launch.
            </p>
          </div>
          <div className="grid gap-5">
            {benefits.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group grid gap-5 rounded-xl border border-white/10 bg-black/40 p-5 transition hover:-translate-y-1 hover:border-[#6654ff]/50 md:grid-cols-[auto_1fr] md:p-6"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white text-lg text-black">
                  {React.createElement(item.icon)}
                </span>
                <div>
                  <h3 className="flex items-center justify-between gap-4 text-lg font-semibold leading-tight">
                    <span>{item.title}</span>
                    <FiArrowUpRight className="shrink-0 text-white/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="campaign" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_142_landing-page-campaign-workflow-hologram-225x300.jpg.webp"
              alt="Landing page campaign workflow"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>Campaign foundations</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built around one audience, one offer, and one action.
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              Landing pages should not feel like generic website pages. We
              match the message to the traffic source, reduce distractions, and
              make the next step clear across desktop and mobile.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Ad message match", "Clear lead forms", "Fast mobile layouts", "Analytics planning"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70"
                >
                  <FiCheckCircle className="text-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>landing page projects</GradientText> run
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {process.map((item, index) => (
              <details key={item.title} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold md:text-xl">
                  <span>
                    <span className="mr-4 font-mono text-sm text-white/35">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.title}
                  </span>
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-3xl pl-0 text-sm font-semibold leading-7 text-white/45 md:pl-12 md:text-base">
                  {item.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="iteration" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge>Prepared for testing</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Launch once, then keep improving the offer.
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              We build sections and components with future changes in mind, so
              headlines, CTAs, proof points, imagery, and form details can be
              tested without rebuilding the whole page.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_143_landing-page-product-hero-layout-225x300.jpg.webp"
              alt="Landing page product hero layout"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Landing page development <GradientText>FAQ</GradientText>
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, index) => (
              <details key={item.question} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold leading-tight md:text-xl">
                  {item.question}
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-white/45 md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="services">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
          Related services for <GradientText>campaign pages</GradientText>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {relatedServices.map(({ icon: ServiceIcon, title, to }) => (
            <Link
              key={title}
              to={to}
              className="group flex min-h-[170px] flex-col justify-between rounded-xl border border-white/10 bg-[#121720] p-5 transition hover:-translate-y-1 hover:border-[#6654ff]/50"
            >
              {React.createElement(ServiceIcon, {
                className: "text-3xl text-white/85",
              })}
              <span className="flex items-center justify-between gap-4 text-lg font-semibold text-white">
                {title}
                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </SectionShell>

      <section className="px-4 pb-20 md:px-8 lg:px-9 lg:pb-24">
        <div className="mx-auto max-w-[1180px] rounded-xl border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(102,84,255,0.24),transparent_34%),radial-gradient(circle_at_78%_32%,rgba(255,45,120,0.18),transparent_30%),#121720] px-6 py-10 text-center md:px-10 md:py-12">
          <FiSend className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>landing page project</GradientText> with us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your offer, audience, traffic source, and campaign goal. We
            will help map the right landing page structure and development plan.
          </p>
          <button
            type="button"
            onClick={openQuoteModal}
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Get in touch
            <FiArrowDown className="-rotate-90" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
