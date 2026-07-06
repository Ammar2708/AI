import React from "react";
import {
  FiArrowDown,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiDollarSign,
  FiFileText,
  FiGrid,
  FiMonitor,
  FiMousePointer,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const scopeItems = [
  {
    icon: FiSearch,
    title: "Search intent and keyword planning",
    text: "We map the searches that matter, separate research from buying intent, and build campaigns around terms your offer can win.",
  },
  {
    icon: FiDollarSign,
    title: "Budget and bid control",
    text: "Spend is reviewed against goals, match types, location, device, and conversion quality so the account is easier to manage.",
  },
  {
    icon: FiMousePointer,
    title: "Ads and landing page alignment",
    text: "Ad copy, offers, extensions, and landing pages are checked together so each click has a clear next step.",
  },
  {
    icon: FiBarChart2,
    title: "Tracking and reporting",
    text: "We review conversion tracking, useful lead signals, GA4 context, and plain-language reports your team can act on.",
  },
];

const benefits = [
  {
    icon: FiTarget,
    title: "Sharper lead quality",
    text: "Campaigns are shaped around the searches, services, locations, and customer types that are most likely to become useful enquiries.",
  },
  {
    icon: FiTrendingUp,
    title: "Cleaner performance decisions",
    text: "You get a clearer view of which campaigns, keywords, ads, and pages deserve more budget, less budget, or a different approach.",
  },
  {
    icon: FiZap,
    title: "Faster learning cycles",
    text: "New campaigns are launched with practical testing plans, then refined through search terms, bids, copy, and conversion data.",
  },
  {
    icon: FiUsers,
    title: "Sales process awareness",
    text: "We look beyond clicks by considering form quality, follow-up, CRM notes, and whether paid traffic is helping the pipeline.",
  },
];

const process = [
  {
    title: "Discovery and PPC audit",
    text: "We review your current accounts, website, margins, services, analytics, and sales process to understand what PPC needs to achieve.",
  },
  {
    title: "Campaign structure",
    text: "Campaigns are organized around intent, service groups, locations, budgets, match types, and the landing pages that support them.",
  },
  {
    title: "Tracking and launch",
    text: "We check conversion actions, analytics, forms, calls, ads, extensions, and landing page journeys before campaigns go live.",
  },
  {
    title: "Optimization rhythm",
    text: "Search terms, negatives, bids, budgets, copy, and landing page signals are reviewed regularly so the account keeps learning.",
  },
  {
    title: "Reporting and next steps",
    text: "Reports explain spend, leads, conversion quality, changes made, and the next decisions instead of burying the account in raw numbers.",
  },
];

const faqs = [
  {
    question: "What is included in PPC management?",
    answer:
      "Account review, keyword planning, campaign structure, ad copy, negative keywords, landing page guidance, tracking checks, optimization, and reporting.",
  },
  {
    question: "Which ad platforms do you manage?",
    answer:
      "We can support Google Ads, Microsoft Ads, remarketing, display, and campaign mixes that fit your budget, audience, and offer.",
  },
  {
    question: "How long does PPC take to show useful results?",
    answer:
      "Some signals appear quickly, but meaningful decisions usually need several weeks of search term, conversion, budget, and lead quality data.",
  },
  {
    question: "Can you work with our existing landing pages?",
    answer:
      "Yes. We can start with your current pages, then recommend improvements when the offer, tracking, trust signals, or next step needs to be clearer.",
  },
  {
    question: "Do we keep ownership of the ad account?",
    answer:
      "Yes. Your business should own the ad account, billing, data, tracking properties, and landing pages. We can manage the work inside that setup.",
  },
];

const relatedServices = [
  {
    title: "Landing page",
    icon: FiFileText,
    to: "/services/landing-page-development",
  },
  {
    title: "Banner ad design",
    icon: FiGrid,
    to: "/services/banner-ad-design",
  },
  {
    title: "Conversion rate optimization",
    icon: FiMousePointer,
    to: "/services/conversion-rate-optimization",
  },
  { title: "SEO", icon: FiSearch, to: "/services/seo" },
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
      <div className="rounded-xl bg-[radial-gradient(circle_at_22%_28%,rgba(255,45,120,0.42),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(15,194,255,0.32),transparent_34%),linear-gradient(135deg,#060714,#151927)] p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="h-5 w-36 rounded-full bg-white/85" />
            <div className="mt-4 h-3 w-56 max-w-full rounded-full bg-white/30" />
            <div className="mt-2 h-3 w-40 rounded-full bg-white/20" />
          </div>
          <div className="grid h-24 w-28 items-end gap-2 rounded-lg border border-white/10 bg-black/20 p-3">
            <span className="h-8 rounded bg-[#6654ff]" />
            <span className="h-14 rounded bg-[#0fc2ff]" />
            <span className="h-20 rounded bg-[#ff2d78]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["Intent", "Spend", "Leads", "Pages"].map((item) => (
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

const Ppc = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>PPC Management</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              PPC services built around better paid search decisions.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              Plan, launch, and improve paid campaigns with clearer account
              structure, budget control, conversion tracking, landing page
              alignment, and reporting your team can actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                PPC services
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#ppc-scope"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell sideLabel="scope" dark className="pt-10" id="ppc-scope">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>What we manage</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Paid search work that stays <GradientText>accountable</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              PPC should not feel like spend disappearing into a dashboard. We
              connect campaigns, tracking, landing pages, and sales context so
              every decision has a reason.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {scopeItems.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
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

      <SectionShell sideLabel="context">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>Campaign context</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              PPC management with <GradientText>sales context</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Paid campaigns perform better when the account structure, offer,
              landing pages, and reporting are reviewed together. We learn your
              services, margins, locations, and sales cycle before scaling
              spend.
            </p>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              That means branded, generic, competitor, remarketing, and
              prospecting campaigns can each have a clear role instead of
              competing for the same budget.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(102,84,255,0.16)]">
            <img
              src="/imgi_51_ppc-management-campaign-signal-dashboard.jpg.webp"
              alt="PPC campaign signal dashboard"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="benefits">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What you gain from expert <GradientText>PPC management</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              More controlled spend, cleaner targeting, better tracking, and
              practical campaign decisions your team can review.
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

      <SectionShell sideLabel="tracking" dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(255,45,120,0.12)]">
            <img
              src="/imgi_52_ppc-management-campaign-coverage-hologram.jpg.webp"
              alt="PPC campaign coverage hologram"
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
          </div>
          <div>
            <Badge>Account coverage</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Campaign coverage without <GradientText>wasted reach</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We build coverage around what your buyers actually search for,
              then protect the account with negative keywords, budget limits,
              audience signals, landing page checks, and conversion quality
              reviews.
            </p>
            <div className="mt-8 grid gap-3">
              {["Keyword intent", "Negative keywords", "Ad and offer match", "Lead quality review"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/70"
                  >
                    <FiCheckCircle className="text-[#0fc2ff]" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How we run and <GradientText>optimize PPC</GradientText>
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

      <SectionShell sideLabel="reporting" dark>
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Badge>Reporting</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Clear reports for the next <GradientText>budget decision</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-white/50">
              PPC reporting should help you understand what changed, what the
              data says, and where the account needs attention. We focus on
              spend, leads, conversion quality, tests, and next actions.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_26_ppc-management-performance-dashboard-workspace.jpg.webp"
              alt="PPC reporting dashboard"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="related">
        <div>
          <Badge>Related services</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Explore related <GradientText>digital services</GradientText>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((item) => (
              <a
                key={item.title}
                href={item.to}
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
        </div>
      </SectionShell>

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            PPC strategy and management <GradientText>FAQ</GradientText>
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
          <FiMonitor className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Talk with us about your <GradientText>PPC campaigns</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your goals, budget, website, and current ad account context.
            We will help shape the clearest next step for paid search.
          </p>
          <a
            href="/services"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            PPC services
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Ppc;
