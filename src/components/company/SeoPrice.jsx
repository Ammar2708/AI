import React from "react";
import {
  FiArrowDown,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiDollarSign,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiSearch,
  FiShield,
  FiSliders,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const packages = [
  {
    name: "SEO Audit Sprint",
    price: "$900",
    note: "Best for: finding what blocks growth first",
    features: [
      "Technical, on-page, and index review",
      "Keyword and competitor snapshot",
      "Priority roadmap for the next 90 days",
      "Walkthrough call with action notes",
    ],
  },
  {
    name: "SEO Foundation",
    price: "$2,000",
    note: "Best for: new or under-optimized websites",
    features: [
      "Everything in the audit sprint",
      "Metadata and heading improvements",
      "Core page optimization plan",
      "Analytics and Search Console checks",
    ],
  },
  {
    name: "Growth SEO Plan",
    price: "$3,500+",
    note: "Best for: competitive or ecommerce SEO",
    features: [
      "Full SEO roadmap and monthly priorities",
      "Content, technical, and internal link plan",
      "Category or service-page optimization",
      "Reporting with next-step recommendations",
    ],
  },
];

const pricingDrivers = [
  {
    icon: FiSearch,
    title: "Starting point",
    text: "A clean website needs a different scope than a site with crawl issues, weak content, missing metadata, or messy redirects.",
  },
  {
    icon: FiTarget,
    title: "Competition",
    text: "Local service niches, national keywords, and ecommerce categories all need different levels of content depth and authority.",
  },
  {
    icon: FiLayers,
    title: "Website type",
    text: "Corporate sites, lead-gen pages, blogs, and online stores each require a different SEO package structure.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth speed",
    text: "Faster timelines usually need more implementation, content, QA, and closer collaboration across your team.",
  },
];

const process = [
  {
    title: "Discovery and business goals",
    text: "We clarify your market, website type, target pages, current SEO foundation, internal resources, and what success should look like.",
  },
  {
    title: "Website and competition review",
    text: "We inspect technical health, content gaps, ranking opportunities, keyword difficulty, competitors, and what is already working.",
  },
  {
    title: "Package recommendation",
    text: "We recommend a practical SEO pricing model: audit sprint, fixed-price package, monthly plan, or a custom blended scope.",
  },
  {
    title: "Roadmap and delivery rhythm",
    text: "You see the priorities, deliverables, timeline, assumptions, and handoff format before work starts.",
  },
];

const faqs = [
  {
    question: "Do you offer fixed-price SEO packages?",
    answer:
      "Yes. Fixed-price SEO packages work well when the scope is clear, such as an audit, roadmap, technical cleanup, or defined page optimization sprint.",
  },
  {
    question: "Can we start smaller and increase the SEO budget later?",
    answer:
      "Yes. Many projects start with an audit or foundation package first, then move into monthly SEO once priorities and constraints are clear.",
  },
  {
    question: "Why are some SEO packages very cheap?",
    answer:
      "Very cheap packages often hide vague deliverables, automated reports, low-quality links, or thin content. We focus on clear scope and realistic work.",
  },
  {
    question: "What is included in your SEO pricing proposal?",
    answer:
      "A proposal usually includes scope, deliverables, timeline, collaboration needs, assumptions, exclusions, reporting format, and the next recommended phase.",
  },
];

const relatedServices = [
  { title: "Technical SEO", icon: FiSliders, href: "/services/tech-seo" },
  { title: "On-page SEO", icon: FiFileText, href: "/services/on-page-seo" },
  { title: "Off-page SEO", icon: FiGlobe, href: "/services/off-page-seo" },
  { title: "SEO Copywriting", icon: FiClipboard, href: "/services/seo-copywriting" },
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
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_28%,rgba(102,84,255,0.24),transparent_30%),radial-gradient(circle_at_76%_22%,rgba(15,194,255,0.16),transparent_32%),radial-gradient(circle_at_50%_82%,rgba(255,45,120,0.15),transparent_30%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-xs font-bold uppercase tracking-[0.32em] text-white/18 lg:block">
      {sideLabel}
    </p>
    <div className="relative mx-auto max-w-[1180px]">{children}</div>
  </section>
);

const PackageCard = ({ item, featured = false }) => (
  <article
    className={`relative flex h-full flex-col rounded-xl border p-6 transition hover:-translate-y-1 md:p-7 ${
      featured
        ? "border-[#ff2d78]/55 bg-white text-black shadow-[0_28px_80px_rgba(255,45,120,0.18)]"
        : "border-white/10 bg-[#111827] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
    }`}
  >
    {featured && (
      <span className="absolute right-5 top-5 rounded-full bg-black px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white">
        Popular
      </span>
    )}
    <p className={`text-sm font-semibold ${featured ? "text-black/55" : "text-white/45"}`}>
      Starting from
    </p>
    <div className="mt-2 flex items-end gap-2">
      <span className="text-5xl font-semibold leading-none md:text-6xl">{item.price}</span>
      <span className={`pb-2 text-sm font-bold ${featured ? "text-black/45" : "text-white/35"}`}>
        project
      </span>
    </div>
    <h3 className="mt-8 text-2xl font-semibold">{item.name}</h3>
    <p className={`mt-3 text-sm font-semibold leading-6 ${featured ? "text-black/60" : "text-white/48"}`}>
      {item.note}
    </p>
    <a
      href="/services"
      className={`mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] transition ${
        featured
          ? "bg-black text-white hover:bg-zinc-800"
          : "border border-white/15 text-white/85 hover:border-white/35 hover:text-white"
      }`}
    >
      SEO Packages
      <FiArrowDown className="-rotate-90" />
    </a>
    <ul className="mt-7 grid gap-4">
      {item.features.map((feature) => (
        <li key={feature} className="flex gap-3 text-sm font-semibold leading-6">
          <FiCheckCircle className={`mt-1 shrink-0 ${featured ? "text-[#8b5cf6]" : "text-white"}`} />
          <span className={featured ? "text-black/70" : "text-white/58"}>{feature}</span>
        </li>
      ))}
    </ul>
  </article>
);

const SeoPrice = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[660px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.3),transparent_34%),radial-gradient(circle_at_78%_26%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[540px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <Badge>Transparent SEO pricing</Badge>
            <h1 className="mt-6 max-w-4xl text-[38px] font-semibold leading-[1.05] tracking-normal md:text-4xl lg:text-[54px]">
              Clear{" "}
              <a href="/services" className="transition hover:opacity-80">
                <GradientText>SEO Pricing, SEO Packages</GradientText>
              </a>{" "}
              built around real work.
            </h1>
            <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/52 md:text-base">
              Compare audit sprints, fixed-price SEO packages, and growth plans
              before you commit. We explain what each option includes, what
              affects cost, and when a smaller starting scope makes sense.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                SEO Pricing
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#seo-packages"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View packages
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(15,194,255,0.24),transparent_44%),radial-gradient(circle_at_72%_74%,rgba(255,45,120,0.2),transparent_42%)] blur-xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(15,194,255,0.15)]">
              <img
                src="/imgi_26_f5-studio-seo-pricing-audit-roadmap-workspace.jpg.webp"
                alt="SEO pricing audit roadmap workspace"
                className="h-[300px] w-full rounded-lg object-cover opacity-90 md:h-[410px]"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Audit", "Plan", "Growth"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <FiDollarSign className="text-white/70" />
                    <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell id="seo-packages" sideLabel="packages" className="pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>Reference scopes</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Choose the <GradientText>SEO package</GradientText> that fits the stage.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              These are practical starting points, not one-size-fits-all boxes.
              The final scope depends on your site, market, resources, and speed.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item, index) => (
              <PackageCard key={item.name} item={item} featured={index === 1} />
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="factors">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>Pricing factors</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What drives the cost of <GradientText>SEO services</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              SEO pricing is shaped by the amount of useful work required. We
              make those variables visible so you can compare proposals with
              more confidence than simply choosing the lowest number.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
              <img
                src="/imgi_53_f5-studio-seo-cost-online-meeting-negotiation.jpg.webp"
                alt="SEO pricing planning meeting"
                className="h-[280px] w-full object-cover opacity-85 md:h-[360px]"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pricingDrivers.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-black/35 p-6">
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white text-lg text-black">
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

      <SectionShell sideLabel="compare">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_54_f5-studio-comparing-seo-pricing-steady-growth-dashboard.jpg.webp"
              alt="SEO growth dashboard for pricing comparison"
              className="h-[300px] w-full object-cover opacity-85 md:h-[430px]"
            />
          </div>
          <div>
            <Badge>Proposal clarity</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Compare agencies by <GradientText>scope, not slogans</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              A useful SEO proposal should show the work, assumptions, timeline,
              and exclusions. We separate audit, technical SEO, content,
              on-page optimization, and off-page support so you can see where
              your budget goes.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="process">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <Badge>How we scope</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How we build your <GradientText>SEO pricing</GradientText> plan
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

      <SectionShell sideLabel="services">
        <Badge>Related services</Badge>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
          Build the package from <GradientText>real SEO work</GradientText>
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
            SEO pricing <GradientText>FAQ</GradientText>
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
          <FiShield className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Request a transparent <GradientText>SEO pricing proposal</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Tell us about your website, goals, and current SEO situation. We
            will recommend a package scope that is clear before work begins.
          </p>
          <a
            href="/services"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            SEO Pricing, SEO Packages
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default SeoPrice;
