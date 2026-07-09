import React from "react";
import {
  FiArrowDown,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiCode,
  FiEdit3,
  FiFileText,
  FiImage,
  FiLink,
  FiSearch,
  FiShield,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const auditItems = [
  "Search intent mapping",
  "Title tags and meta descriptions",
  "Headings and page structure",
  "Internal links",
  "Image alt text",
  "Schema opportunities",
];

const services = [
  {
    icon: FiTarget,
    title: "Intent-led page mapping",
    text: "We connect priority keywords to the right pages so each URL has one clear job and avoids competing with another page.",
  },
  {
    icon: FiEdit3,
    title: "Sharper titles and snippets",
    text: "We rewrite page titles, meta descriptions, headings, and opening copy so the page is easier to understand and click.",
  },
  {
    icon: FiLink,
    title: "Cleaner internal linking",
    text: "We improve crawl paths and visitor journeys with links that support important pages instead of leaving them isolated.",
  },
  {
    icon: FiCode,
    title: "CMS-ready implementation",
    text: "You get practical changes, clear notes, and support for rolling them into WordPress, ecommerce, or custom websites.",
  },
];

const gains = [
  {
    icon: FiSearch,
    title: "Pages aligned to search",
    text: "Priority pages are reviewed around search intent, content depth, headings, metadata, and supporting page signals.",
  },
  {
    icon: FiFileText,
    title: "Content with better structure",
    text: "We make pages easier to scan with useful sections, stronger hierarchy, and clearer reasons for visitors to continue.",
  },
  {
    icon: FiImage,
    title: "Better supporting signals",
    text: "Images, alt text, schema ideas, FAQs, and related links are checked so the page gives search engines more context.",
  },
  {
    icon: FiTrendingUp,
    title: "Changes you can track",
    text: "Recommendations are prioritized by impact and effort, then organized so your team can review progress after rollout.",
  },
];

const process = [
  {
    title: "Discovery and goals",
    text: "We clarify your key services, target audience, existing rankings, and the pages that matter most to leads or sales.",
  },
  {
    title: "Page audit",
    text: "We review metadata, headings, copy, internal links, media, indexable content, and search intent across priority URLs.",
  },
  {
    title: "Mapping and plan",
    text: "We group keywords by intent, choose target pages, identify gaps, and decide what should be improved first.",
  },
  {
    title: "Implementation",
    text: "We prepare CMS-ready edits or work with your team so changes are added cleanly without disrupting the page design.",
  },
  {
    title: "Monitor and refine",
    text: "After launch, we review visibility, rankings, engagement, and conversions so pages can keep improving over time.",
  },
];

const faqs = [
  {
    question: "What is included in your on-page SEO work?",
    answer:
      "A focused audit of priority pages, search intent mapping, metadata improvements, heading structure, body content recommendations, internal linking, image optimization, schema ideas, and implementation notes.",
  },
  {
    question: "Can you work with our developers or content team?",
    answer:
      "Yes. We can hand over clear briefs, support your CMS workflow, review staging changes, or collaborate directly with in-house developers and editors.",
  },
  {
    question: "Is on-page SEO different from technical SEO?",
    answer:
      "Technical SEO focuses more on crawlability, speed, indexing, and site architecture. On-page SEO focuses on what each page says, how it is structured, and whether it matches the intent behind a search.",
  },
  {
    question: "Where should we start?",
    answer:
      "Start with the pages that already have value: service pages, landing pages, product pages, and pages that get impressions but do not convert well enough.",
  },
];

const relatedServices = [
  { title: "Content marketing", icon: FiClipboard, href: "/services/content-marketing" },
  { title: "Web design services", icon: FiShield, href: "/services/web-design-service" },
  { title: "Website development", icon: FiCode, href: "/services/website-development" },
  { title: "Conversion marketing", icon: FiBarChart2, href: "/services/conversion-marketing" },
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

const SectionShell = ({ id, sideLabel, dark = false, children, className = "" }) => (
  <section
    id={id}
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

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[460px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(102,84,255,0.2)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="overflow-hidden rounded-xl bg-[#050816]">
      <img
        src="/imgi_92_content-marketing-performance-dashboard-workspace-1536x864.jpg.webp"
        alt="On-page SEO dashboard review"
          className="h-48 w-full object-cover opacity-80 md:h-56"
      />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Intent", "Metadata", "Links", "Schema"].map((item) => (
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

const OnSeo = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>On-page SEO services</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              <a href="/services" className="transition hover:opacity-80">
                <GradientText>On-page SEO</GradientText>
              </a>{" "}
              services that turn pages into clearer search assets.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We audit priority pages, align them with search intent, improve
              metadata and structure, and turn recommendations into changes
              your website team can actually implement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                On-page SEO
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
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="onseo-scope" sideLabel="scope" className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <Badge>What we improve</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Practical SEO work for <GradientText>real pages</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              The goal is not a long static audit. The goal is a focused set of
              page improvements that help people understand your offer and help
              search engines understand the page.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(item.icon)}
                </span>
                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="when to start" dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>Best timing</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              When to invest in <GradientText>on-page SEO</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              On-page SEO is most valuable when your site already has important
              pages, but rankings, traffic quality, or conversions are not
              matching the strength of your offer.
            </p>
            <div className="mt-8 grid gap-3">
              {auditItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70">
                  <FiCheckCircle className="text-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_50_content-marketing-funnel-strategy-laptop.jpg.webp"
              alt="SEO strategy planning workspace"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="gains">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>What you gain</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Better page signals, <GradientText>clearer decisions</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Your team gets prioritized page fixes, not vague SEO advice. Each
              recommendation is connected to search intent, page context, and
              implementation effort.
            </p>
          </div>
          <div className="grid gap-5">
            {gains.map((item) => (
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

      <SectionShell sideLabel="teams">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_51_content-marketing-task-coverage-hologram.jpg.webp"
              alt="On-page SEO implementation support"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>Implementation support</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              On-page SEO for <GradientText>real teams</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We design recommendations around how your website is actually
              managed. That means respecting templates, brand voice, CMS fields,
              editing workflows, and approval steps.
            </p>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Your team gets briefs, page-level edits, implementation notes, and
              review support so the work can move beyond a spreadsheet.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="process">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>on-page SEO</GradientText> process works
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

      <SectionShell sideLabel="related">
        <Badge>Related services</Badge>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
          Related <GradientText>SEO and digital</GradientText> services
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                {React.createElement(item.icon)}
              </span>
              <h3 className="mt-16 flex items-center justify-between gap-4 text-xl font-semibold text-white">
                {item.title}
                <FiArrowDown className="-rotate-90 transition group-hover:translate-x-1" />
              </h3>
            </a>
          ))}
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="faq">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            On-page SEO <GradientText>FAQ</GradientText>
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
          <FiSearch className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Talk to us about your <GradientText>on-page SEO</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share the pages you want to improve. We will help you shape a
            focused plan for better structure, clearer intent, and cleaner
            implementation.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            On-page SEO
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default OnSeo;
