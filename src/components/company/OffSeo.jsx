import React from "react";
import {
  FiArrowDown,
  FiAward,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiFileText,
  FiFlag,
  FiGlobe,
  FiLink,
  FiSearch,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const focusAreas = [
  "Backlink profile audit",
  "Authority gap review",
  "Relevant outreach targets",
  "Brand mentions",
  "Safe link acquisition",
  "Transparent reporting",
];

const services = [
  {
    icon: FiSearch,
    title: "Backlink and authority audit",
    text: "We review referring domains, anchors, toxic patterns, lost links, and competitor authority gaps before planning any outreach.",
  },
  {
    icon: FiTarget,
    title: "Prospecting with relevance",
    text: "Targets are chosen for topical fit, audience quality, editorial standards, and the pages they can realistically support.",
  },
  {
    icon: FiUsers,
    title: "Manual outreach",
    text: "We prioritize genuine relationships, editorial placements, citations, resource pages, and partner opportunities.",
  },
  {
    icon: FiShield,
    title: "Risk-aware link building",
    text: "No private blog networks, automated link swaps, mass directories, or tactics that trade short-term spikes for long-term risk.",
  },
];

const benefits = [
  {
    icon: FiAward,
    title: "Authority signals for priority pages",
    text: "Relevant backlinks and mentions can strengthen the pages that already have a clear search and business role.",
  },
  {
    icon: FiGlobe,
    title: "More useful referral paths",
    text: "Good off-page work can put your brand in front of audiences who already care about the topic, not just search crawlers.",
  },
  {
    icon: FiLink,
    title: "Campaigns connected to content",
    text: "Outreach works better when it supports strong content assets, service pages, guides, tools, and product pages.",
  },
  {
    icon: FiBarChart2,
    title: "Reporting without black boxes",
    text: "You see where we are prospecting, what is live, what changed, and how authority signals are developing over time.",
  },
];

const process = [
  {
    title: "Discovery and audit",
    text: "We review your current authority profile, competitors, anchors, risky patterns, lost links, brand mentions, and priority pages.",
  },
  {
    title: "Strategy and roadmap",
    text: "We define the safest opportunities, target topics, outreach angles, linkable assets, and monthly activity plan.",
  },
  {
    title: "Prospecting and qualification",
    text: "Potential websites are checked for relevance, quality, traffic context, editorial fit, and risk before outreach begins.",
  },
  {
    title: "Outreach and placement",
    text: "We run manual outreach, coordinate content or placement requirements, and keep links aligned with your brand standards.",
  },
  {
    title: "Monitoring and reporting",
    text: "We track live links, mentions, anchor text, authority trends, referral value, and risks that should be cleaned up.",
  },
];

const faqs = [
  {
    question: "What is included in off-page SEO services?",
    answer:
      "Backlink audits, competitor authority research, outreach strategy, prospecting, manual outreach, editorial link building, brand mentions, citations, partner opportunities, monitoring, and clear reporting.",
  },
  {
    question: "Do you buy links or use private blog networks?",
    answer:
      "No. We avoid private blog networks, automated schemes, mass low-quality directories, and paid placements disguised as editorial outreach.",
  },
  {
    question: "Can you work with our content or PR team?",
    answer:
      "Yes. We can support your team with prospect lists, outreach angles, linkable asset planning, reporting, and quality checks.",
  },
  {
    question: "How long does off-page SEO take?",
    answer:
      "It usually takes several months to build meaningful authority signals. Timelines depend on your current profile, competition, content assets, and outreach response rates.",
  },
];

const relatedServices = [
  { title: "On-page SEO", icon: FiSearch, href: "/services/on-page-seo" },
  { title: "Content marketing", icon: FiFileText, href: "/services/content-marketing" },
  { title: "Website development", icon: FiGlobe, href: "/services/website-development" },
  { title: "PPC services", icon: FiTrendingUp, href: "/services/ppc-services" },
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
          src="/imgi_93_off-page-seo-monitoring-dashboard-workspace-1536x864.jpg.webp"
          alt="Off-page SEO backlink monitoring dashboard"
          className="h-48 w-full object-cover opacity-85 md:h-56"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Audit", "Prospects", "Outreach", "Reports"].map((item) => (
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

const OffSeo = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Off-page SEO services</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              <a href="/services" className="transition hover:opacity-80">
                <GradientText>Off-page SEO</GradientText>
              </a>{" "}
              that builds authority without risky shortcuts.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We audit your backlink profile, plan safe outreach, build relevant
              authority signals, and report the work clearly so off-page SEO
              supports your strongest pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Off-page SEO
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#offseo-scope"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="offseo-scope" sideLabel="scope" className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <Badge>What we cover</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Authority work with a <GradientText>quality filter</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Off-page SEO is not about chasing any link. It is about earning
              relevant signals that make sense for your market, pages, and brand.
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

      <SectionShell sideLabel="safe links" dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>White-hat only</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Safe <GradientText>off-page SEO</GradientText> for long-term growth
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We choose tactics we would be comfortable using on our own domain:
              manual outreach, relevant placements, useful citations, and
              authority signals connected to strong content.
            </p>
            <div className="mt-8 grid gap-3">
              {focusAreas.map((item) => (
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
              src="/imgi_51_off-page-seo-white-hat-link-risk-checklist.jpg.webp"
              alt="White-hat off-page SEO checklist"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="benefits">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Why it matters</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Why <GradientText>off-page SEO</GradientText> matters for you
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              A strong website still needs outside trust signals. The right
              outreach helps search engines and people see why your brand should
              be considered.
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

      <SectionShell sideLabel="authority">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_52_off-page-seo-authority-signal-network.jpg.webp"
              alt="Off-page SEO authority signal network"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>Connected strategy</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Off-page SEO that supports <GradientText>priority pages</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Outreach should not happen in isolation. We connect link building
              to your content strategy, on-page SEO, service pages, product
              pages, and campaign calendar.
            </p>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              That keeps activity focused on the pages and topics that can
              actually move search visibility, referral traffic, and trust.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="process">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>off-page SEO</GradientText> process works
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
            Off-page SEO <GradientText>FAQ</GradientText>
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
          <FiFlag className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>off-page SEO</GradientText> roadmap
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your domain, priority pages, and current backlink profile. We
            will help shape a safer authority-building plan.
          </p>
          <a
            href="/services"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Off-page SEO
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default OffSeo;
