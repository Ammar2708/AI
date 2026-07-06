import React from "react";
import {
  FiArrowDown,
  FiBarChart2,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiEdit3,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiPenTool,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const writingChecks = [
  "Search intent mapping",
  "Page-level keyword briefs",
  "Headlines and metadata",
  "Internal link direction",
  "Conversion-focused CTAs",
  "Brand voice alignment",
];

const services = [
  {
    icon: FiSearch,
    title: "Keyword and intent mapping",
    text: "We connect search queries to the right pages, then define what each page must explain, prove, and encourage visitors to do next.",
  },
  {
    icon: FiClipboard,
    title: "SEO content briefs",
    text: "Your team gets clear briefs with page purpose, headings, supporting topics, internal links, CTA direction, and tone guidance.",
  },
  {
    icon: FiEdit3,
    title: "Website copywriting",
    text: "We write or rewrite service pages, landing pages, product copy, category pages, and blog content so they read naturally and rank with purpose.",
  },
  {
    icon: FiBarChart2,
    title: "Refresh and optimization",
    text: "Existing pages are improved around intent, structure, relevance, metadata, proof, readability, and conversion opportunities.",
  },
];

const benefits = [
  {
    icon: FiTarget,
    title: "Copy tied to SEO and business goals",
    text: "Every page is treated as a useful business asset, not just content. We clarify what it should rank for, who it serves, and what action it should support.",
  },
  {
    icon: FiPenTool,
    title: "People-first, on-brand messaging",
    text: "The writing balances keywords with plain language, useful proof, concrete benefits, and a tone that still feels like your company.",
  },
  {
    icon: FiLayers,
    title: "Flexible scope for page types",
    text: "We adapt structure and depth for product pages, service pages, category pages, landing pages, guides, and articles.",
  },
  {
    icon: FiUsers,
    title: "Cleaner collaboration",
    text: "SEO, content, design, and development teams get copy that fits the page structure, CMS workflow, and launch plan.",
  },
];

const process = [
  {
    title: "Discovery and content audit",
    text: "We review your existing pages, audience, offers, analytics, SERP landscape, keyword coverage, and current content gaps.",
  },
  {
    title: "Keyword and intent mapping",
    text: "We group target queries by intent and assign them to the pages that can best satisfy the search and support your funnel.",
  },
  {
    title: "Briefs and page structure",
    text: "We define page sections, headings, proof points, internal links, metadata, and CTA direction before writing begins.",
  },
  {
    title: "Writing and optimization",
    text: "We write or improve the copy so it is clear, useful, searchable, and ready for review by your team.",
  },
  {
    title: "Review and iteration",
    text: "We refine the copy around stakeholder feedback, implementation constraints, and post-launch performance signals.",
  },
];

const faqs = [
  {
    question: "What is the difference between SEO copywriting and regular content writing?",
    answer:
      "SEO copywriting connects language, page structure, metadata, internal links, and calls to action with search intent. Regular writing can be useful, but it often lacks that structured connection to how people search and decide.",
  },
  {
    question: "Which page types can you help us with?",
    answer:
      "We can support service pages, landing pages, product descriptions, category pages, comparison pages, blog posts, guides, homepages, and content refreshes.",
  },
  {
    question: "Can you work with our existing keyword research and content team?",
    answer:
      "Yes. We can turn your existing research into page briefs, edit current drafts, rewrite priority sections, or support your team with SEO and structure checks.",
  },
  {
    question: "How do you make sure the copy fits our brand voice?",
    answer:
      "We review your existing pages, brand notes, sales language, customer objections, and preferred examples before writing. The aim is copy that supports SEO without sounding generic.",
  },
];

const relatedServices = [
  { title: "On-page SEO", icon: FiSearch, href: "/services/on-page-seo" },
  { title: "Content marketing", icon: FiBookOpen, href: "/services/content-marketing" },
  { title: "Website development", icon: FiGlobe, href: "/services/website-development" },
  { title: "Landing pages", icon: FiFileText, href: "/services/landing-page-development" },
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
  <div className="relative mx-auto max-w-[470px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(255,45,120,0.18)]">
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
          alt="SEO copywriting planning dashboard"
          className="h-48 w-full object-cover opacity-85 md:h-56"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Intent", "Briefs", "Copy", "Refresh"].map((item) => (
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

const Copy = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>SEO copywriting services</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              <a href="/services" className="transition hover:opacity-80">
                <GradientText>SEO copywriting</GradientText>
              </a>{" "}
              that connects search intent, page structure, and brand voice.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We turn keyword research and business context into clear briefs,
              useful website copy, stronger metadata, and page content your
              audience can trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                SEO copywriting
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#copy-scope"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="copy-scope" sideLabel="scope" className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <Badge>What we write</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Copy planned around <GradientText>real page goals</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Good SEO copy is not keyword stuffing. It is a practical blend of
              intent, structure, proof, clarity, and next-step direction.
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

      <SectionShell sideLabel="benefits" dark>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>What you gain</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Better copy, <GradientText>clearer decisions</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              The output is not just words. It is a more useful page system for
              search, users, and the team responsible for keeping the website
              moving.
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

      <SectionShell sideLabel="page types">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>For key pages</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              SEO copywriting for your <GradientText>core journeys</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Service pages, product pages, category pages, landing pages,
              guides, and blogs all need different structures. We shape the
              copy around the page type, user intent, and business role.
            </p>
            <div className="mt-8 grid gap-3">
              {writingChecks.map((item) => (
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
              src="/imgi_50_content-marketing-funnel-strategy-laptop.jpg.webp"
              alt="SEO copywriting strategy laptop"
              className="h-[300px] w-full object-cover opacity-85 md:h-[430px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="fit">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_51_content-marketing-task-coverage-hologram.jpg.webp"
              alt="SEO copywriting scope and workflow"
              className="h-[300px] w-full object-cover opacity-85 md:h-[430px]"
            />
          </div>
          <div>
            <Badge>When it helps</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Useful when content needs <GradientText>strategy and execution</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              This is a good fit when you have keyword research but no time to
              turn it into briefs, when pages are inconsistent, or when a launch
              needs copy that supports search and conversions from day one.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell dark sideLabel="process">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>SEO copywriting</GradientText> process works
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
          Related <GradientText>SEO and content</GradientText> services
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
            SEO copywriting <GradientText>FAQ</GradientText>
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
          <FiPenTool className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your next <GradientText>SEO copywriting</GradientText> project
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your pages, keywords, and content goals. We will help shape a
            practical writing plan that fits your website.
          </p>
          <a
            href="/services"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            SEO copywriting
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Copy;
