import React from "react";
import {
  FiArrowDown,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiEdit3,
  FiLayers,
  FiLock,
  FiMonitor,
  FiRefreshCw,
  FiSearch,
  FiShoppingBag,
  FiZap,
} from "react-icons/fi";

const serviceCards = [
  {
    icon: FiMonitor,
    title: "Business websites",
    text: "Corporate sites, service pages, landing pages, and resource hubs built around clear user journeys.",
  },
  {
    icon: FiShoppingBag,
    title: "WooCommerce stores",
    text: "Product pages, checkout flows, and store foundations that are easier to manage after launch.",
  },
  {
    icon: FiEdit3,
    title: "Editable content systems",
    text: "Reusable sections and content models so your team can publish without fighting the layout.",
  },
  {
    icon: FiSearch,
    title: "Technical SEO setup",
    text: "Clean markup, sensible page structure, performance basics, and launch checks that support visibility.",
  },
];

const benefits = [
  {
    icon: FiLayers,
    title: "Structured for growth",
    text: "We plan pages, templates, and reusable blocks before code begins, so new content does not become a maintenance burden.",
  },
  {
    icon: FiCode,
    title: "Clean WordPress code",
    text: "Custom theme work, careful plugin choices, and front-end execution that keeps the site lighter and easier to extend.",
  },
  {
    icon: FiZap,
    title: "Performance foundations",
    text: "Caching, image handling, lean components, and responsive layouts are treated as core build requirements.",
  },
  {
    icon: FiLock,
    title: "Security and reliability",
    text: "Update routines, access control, backups, and sensible hardening help reduce avoidable risk after launch.",
  },
];

const process = [
  {
    title: "Discovery and scope",
    text: "We define goals, users, content needs, integrations, timeline, and the level of editing control your team needs.",
  },
  {
    title: "UX and content structure",
    text: "We map pages and reusable sections around what visitors need to understand and what your team needs to manage.",
  },
  {
    title: "Design system and UI",
    text: "Visual direction, responsive layouts, and component states are shaped before the build moves into production.",
  },
  {
    title: "Development and QA",
    text: "We build the theme, configure WordPress, test forms and templates, and check performance across device sizes.",
  },
  {
    title: "Launch and support",
    text: "After launch, we can keep improving pages, integrations, speed, and content workflows as the site evolves.",
  },
];

const faqs = [
  {
    question: "Can you redesign my existing WordPress website?",
    answer:
      "Yes. We can redesign the front end, rebuild templates, improve editing workflows, clean up plugin bloat, or migrate content into a better structure.",
  },
  {
    question: "Do you build custom themes or use page builders?",
    answer:
      "We choose the stack around the project. For long-term control, we prefer custom theme work and reusable content blocks. Builders can still make sense for some teams and budgets.",
  },
  {
    question: "Can you help after the website launches?",
    answer:
      "Yes. We can support fixes, new sections, performance improvements, security updates, integrations, and ongoing content changes.",
  },
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
  <div className="relative mx-auto max-w-[460px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(102,84,255,0.2)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="h-28 rounded-xl bg-[radial-gradient(circle_at_22%_28%,rgba(255,45,120,0.42),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(15,194,255,0.32),transparent_34%),linear-gradient(135deg,#060714,#151927)] p-5 md:h-32">
        <div className="h-5 w-44 rounded-full bg-white/85" />
        <div className="mt-4 h-3 w-64 max-w-full rounded-full bg-white/30" />
        <div className="mt-2 h-3 w-48 rounded-full bg-white/20" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Pages", "Blocks", "SEO"].map((item) => (
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

const WordPressDevelopment = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>WordPress Development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              WordPress websites built to grow, edit, and perform.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We plan, design, and build WordPress websites with clean structure,
              flexible content editing, reliable performance, and support after
              launch.
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
                href="#services"
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
              WordPress <GradientText>development services</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              From first page structure to post-launch care, every decision is
              made so your team can keep the site useful without rebuilding it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(card.icon)}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="benefits" dark>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Benefits of our <GradientText>WordPress development</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              A good WordPress project should give your team a site that is
              easier to manage, extend, secure, and improve after launch.
            </p>
          </div>
          <div className="grid gap-5">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-xl border border-white/10 bg-black/40 p-5 md:grid-cols-[auto_1fr] md:p-6"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white text-lg text-black">
                  {React.createElement(item.icon)}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>WordPress projects</GradientText> run
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

      <SectionShell sideLabel="technical" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_60_opai-36.jpg"
              alt=""
              aria-hidden="true"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>Technical foundations</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built for speed, SEO, and maintenance.
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              WordPress can stay flexible without becoming fragile. We pay
              attention to hosting setup, caching, image handling, plugin
              selection, schema-ready layouts, and admin workflows so the site
              remains stable as content grows.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Fast loading pages", "Reusable content blocks", "Backup planning", "Editor friendly CMS"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70">
                  <FiCheckCircle className="text-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            WordPress development <GradientText>FAQ</GradientText>
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

      <section className="px-4 pb-20 md:px-8 lg:px-9 lg:pb-24">
        <div className="mx-auto max-w-[1180px] rounded-xl border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(102,84,255,0.24),transparent_34%),radial-gradient(circle_at_78%_32%,rgba(255,45,120,0.18),transparent_30%),#121720] px-6 py-10 text-center md:px-10 md:py-12">
          <FiRefreshCw className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>WordPress project</GradientText> with us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your current site, goals, and content needs. We will help map
            the right WordPress structure and development plan.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Get in touch
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default WordPressDevelopment;
