import React from "react";
import {
  FiActivity,
  FiArrowDown,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiFileText,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiSearch,
  FiServer,
  FiShield,
  FiZap,
} from "react-icons/fi";

const auditFocus = [
  "Crawl and index coverage",
  "Core Web Vitals",
  "Redirect chains",
  "Canonical rules",
  "XML sitemaps",
  "JavaScript rendering",
];

const services = [
  {
    icon: FiSearch,
    title: "Crawl and index audit",
    text: "We review crawl paths, index coverage, robots rules, sitemaps, canonicals, and page duplication so search engines can reach the right URLs.",
  },
  {
    icon: FiZap,
    title: "Speed and Core Web Vitals",
    text: "We check loading behavior, layout shift, interaction delays, image weight, scripts, and front-end patterns that slow pages down.",
  },
  {
    icon: FiGitBranch,
    title: "Migration and release checks",
    text: "We protect redesigns, CMS moves, URL changes, and launches with redirect maps, staging checks, and post-release monitoring.",
  },
  {
    icon: FiCode,
    title: "Developer-ready fixes",
    text: "Recommendations are written for action: priority, risk, evidence, examples, and implementation notes your team can work from.",
  },
];

const outcomes = [
  {
    icon: FiGlobe,
    title: "Cleaner crawl control",
    text: "Search engines spend more time on useful pages and less time on traps, duplicate URLs, weak parameters, or thin paths.",
  },
  {
    icon: FiMonitor,
    title: "Better rendering confidence",
    text: "Important content, links, metadata, and structured data are checked across the way browsers and search engines see the site.",
  },
  {
    icon: FiDatabase,
    title: "Indexing problems exposed",
    text: "You get a clear view of what is indexed, what is excluded, what should change, and which fixes matter first.",
  },
  {
    icon: FiShield,
    title: "Lower release risk",
    text: "Technical SEO checks help avoid avoidable traffic drops during migrations, redesigns, platform updates, and large content changes.",
  },
];

const process = [
  {
    title: "Discovery and access",
    text: "We clarify goals, priority sections, markets, CMS constraints, analytics access, Search Console data, and any known technical pain points.",
  },
  {
    title: "Deep website crawl",
    text: "We crawl the site, review index data, inspect templates, test mobile behavior, and compare what users see with what search engines can process.",
  },
  {
    title: "Evidence and prioritization",
    text: "Issues are grouped by impact, effort, risk, and owner so your team knows which fixes should happen now and which can wait.",
  },
  {
    title: "Implementation support",
    text: "We turn findings into clear tickets, QA checks, staging notes, redirect maps, or developer handoff documents as needed.",
  },
  {
    title: "Monitoring and validation",
    text: "After rollout we re-crawl, verify fixes, watch coverage reports, and help catch new issues before they grow.",
  },
];

const faqs = [
  {
    question: "What is included in technical SEO services?",
    answer:
      "Technical SEO usually includes crawl analysis, index coverage, robots.txt, XML sitemaps, canonicals, redirects, internal linking, structured data, Core Web Vitals, mobile checks, JavaScript rendering, duplicate content, and release risk review.",
  },
  {
    question: "Can you work with our developers?",
    answer:
      "Yes. We write recommendations with developers in mind, including examples, priority, expected impact, risk notes, and QA checks so fixes can move through your normal workflow.",
  },
  {
    question: "When should we do a technical SEO audit?",
    answer:
      "It is useful before a redesign, migration, CMS change, large content update, performance push, or when rankings and indexed pages do not match what you expect.",
  },
  {
    question: "Is technical SEO different from on-page SEO?",
    answer:
      "Yes. Technical SEO focuses on crawlability, indexing, rendering, performance, architecture, and site health. On-page SEO focuses more on page content, metadata, intent, and structure.",
  },
];

const relatedServices = [
  { title: "On-page SEO", icon: FiSearch, href: "/services/on-page-seo" },
  { title: "Off-page SEO", icon: FiGlobe, href: "/services/off-page-seo" },
  { title: "Website development", icon: FiCode, href: "/services/website-development" },
  { title: "Content marketing", icon: FiFileText, href: "/services/content-marketing" },
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
  <div className="relative mx-auto max-w-[470px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(15,194,255,0.18)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="overflow-hidden rounded-xl bg-[#050816]">
        <img
          src="/imgi_26_technical-seo-audit-dashboard-workspace.jpg.webp"
          alt="Technical SEO audit dashboard"
          className="h-48 w-full object-cover opacity-85 md:h-56"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Crawl", "Index", "Speed", "Release"].map((item) => (
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

const Tech = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Technical SEO services</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              <a href="/services" className="transition hover:opacity-80">
                <GradientText>Tech SEO</GradientText>
              </a>{" "}
              that finds the hidden blockers in your website.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We audit crawlability, indexing, Core Web Vitals, rendering, and
              release risks, then turn the findings into a prioritized roadmap
              your website team can implement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Tech SEO
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

      <SectionShell id="techseo-scope" sideLabel="scope" className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <Badge>What we inspect</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Technical checks with <GradientText>clear next steps</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              The work is not just a list of warnings. We separate real SEO
              risk from noise and explain what should be fixed first.
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
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="health checks" dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>Website health</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Know when <GradientText>technical SEO</GradientText> needs attention
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Technical SEO becomes urgent when organic growth stalls, important
              pages fail to rank, a migration is coming, or Search Console shows
              indexing and crawl problems that keep returning.
            </p>
            <div className="mt-8 grid gap-3">
              {auditFocus.map((item) => (
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
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_51_technical-seo-issue-monitoring-dashboard.jpg.webp"
              alt="Technical SEO issue monitoring dashboard"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="outcomes">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>What improves</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Better foundations for <GradientText>search growth</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Technical SEO gives content, links, and strategy a cleaner base.
              Your strongest pages have a better chance to be found, rendered,
              indexed, and trusted.
            </p>
          </div>
          <div className="grid gap-5">
            {outcomes.map((item) => (
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

      <SectionShell sideLabel="deliverables">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_52_technical-seo-deliverables-hologram.jpg.webp"
              alt="Technical SEO deliverables hologram"
              className="h-[300px] w-full object-cover opacity-85 md:h-[430px]"
            />
          </div>
          <div>
            <Badge>Roadmap, not noise</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Deliverables your team can <GradientText>actually use</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We package findings into plain-language priorities, developer
              notes, screenshots, example URLs, and QA checks instead of handing
              over a long export from an automated crawler.
            </p>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              When needed, we can support ticket writing, staging checks,
              redirect mapping, and post-launch validation.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="process">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How a <GradientText>technical SEO</GradientText> engagement works
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

      <SectionShell sideLabel="audit view">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>Evidence first</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              See what is blocking <GradientText>organic performance</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We combine crawl data, Search Console signals, manual checks, and
              implementation context so your team can understand why an issue
              matters before spending time on it.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_26_technical-seo-audit-dashboard-workspace.jpg.webp"
              alt="Technical SEO audit workspace"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="related">
        <Badge>Related services</Badge>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
          Related <GradientText>SEO and website</GradientText> services
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
            Technical SEO <GradientText>FAQ</GradientText>
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
          <FiActivity className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Talk to us about your <GradientText>technical SEO</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your website, current issues, and upcoming releases. We will
            help shape a practical audit and implementation roadmap.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Tech SEO
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Tech;
