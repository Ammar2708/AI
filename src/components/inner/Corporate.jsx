import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiEdit3,
  FiFileText,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiSearch,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { useQuoteModal } from "../QuoteModalContext";

const serviceCards = [
  {
    icon: FiMonitor,
    title: "Corporate websites",
    to: "/services/corporate-website-development",
    text: "Company websites, service pages, careers pages, resource hubs, and contact paths built around clear user journeys.",
  },
  {
    icon: FiGrid,
    title: "Information architecture",
    to: "/services/website-development",
    text: "Complex services, departments, proof points, and stakeholder needs organized into a cleaner sitemap.",
  },
  {
    icon: FiEdit3,
    title: "CMS-ready content",
    to: "/services/wordpress-development",
    text: "Reusable sections and page models that help your team publish without fighting the structure.",
  },
  {
    icon: FiSearch,
    title: "SEO and launch setup",
    to: "/services/tech-seo",
    text: "Technical SEO basics, analytics, responsive checks, performance-minded frontend code, and handover.",
  },
];

const benefits = [
  {
    icon: FiSearch,
    title: "Discovery before design",
    to: "/process",
    text: "We map business goals, audience needs, buyer objections, and current site gaps before layouts begin.",
  },
  {
    icon: FiGrid,
    title: "Clear site structure",
    to: "/services/website-development",
    text: "Service pages, case studies, careers, resources, and contact paths are arranged so visitors find the next step fast.",
  },
  {
    icon: FiLayers,
    title: "Brand-led UX/UI",
    to: "/services/ui-ux-design",
    text: "Your interface feels polished, readable, credible, and shaped around content your team can maintain.",
  },
  {
    icon: FiShield,
    title: "Reliable launch base",
    to: "/process",
    text: "Responsive QA, SEO basics, analytics, security checks, performance, and handover are planned into the build.",
  },
];

const process = [
  {
    title: "Discovery and scope",
    text: "We clarify goals, stakeholders, audiences, existing analytics, competitors, content gaps, and the role your corporate website needs to play.",
  },
  {
    title: "Content architecture",
    text: "We turn complex services, departments, and proof points into a clean sitemap, page model, and conversion path.",
  },
  {
    title: "UX/UI design",
    text: "Core templates are designed around brand trust, scan-friendly sections, clear CTAs, and a consistent visual system.",
  },
  {
    title: "Development and QA",
    text: "We build responsive pages, reusable components, CMS structures, integrations, SEO foundations, and performance-minded frontend code.",
  },
  {
    title: "Launch and handover",
    text: "Your team gets launch support, documentation, admin guidance, and a clear path for future updates or improvements.",
  },
];

const faqs = [
  {
    question: "What is included in a corporate website project?",
    answer:
      "Typical work includes discovery, sitemap planning, UX/UI design, responsive development, CMS setup, technical SEO basics, integrations, QA, launch support, and handover.",
  },
  {
    question: "Can you redesign an existing company website?",
    answer:
      "Yes. We can audit the current site, keep what works, improve the structure and user journey, then rebuild the experience around stronger content and clearer conversion paths.",
  },
  {
    question: "Which CMS or tech stack should we use?",
    answer:
      "That depends on your team, content workflow, integrations, performance needs, and maintenance plans. We recommend the stack after discovery instead of forcing one setup.",
  },
  {
    question: "How do we prepare before starting?",
    answer:
      "Bring business goals, brand assets, current analytics if available, rough content, priority pages, and examples of sites you like or dislike.",
  },
];

const relatedServices = [
  { icon: FiMonitor, title: "Website development", to: "/services/website-development" },
  { icon: FiLayers, title: "Web applications development", to: "/services/web-application-development" },
  { icon: FiCode, title: "WordPress development", to: "/services/wordpress-development" },
  { icon: FiBarChart2, title: "SEO and performance", to: "/services/tech-seo" },
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
  <div className="relative mx-auto max-w-[500px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(102,84,255,0.2)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#050816]">
        <img
          src="/imgi_60_opai-36.jpg"
          alt="Corporate website planning interface"
          className="h-[270px] w-full object-cover opacity-85 md:h-[330px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.78))]" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
            company website
          </p>
          <p className="mt-2 max-w-sm text-2xl font-semibold text-white">
            Clear services, proof, content, and lead paths
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["UX", "CMS", "SEO"].map((item) => (
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

function Corporate() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Corporate Website Development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Corporate websites built for trust, clarity, and growth.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We plan, design, and develop company websites that explain your
              offer, support sales and hiring, and stay manageable after launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Hire us
                <FiArrowDown className="-rotate-90" />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </Link>
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
              Corporate website <GradientText>development services</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              From business discovery to handover, every decision is made so
              prospects, partners, candidates, and customers find the right path.
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
              Benefits of our <GradientText>corporate website development</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              The goal is a clearer sales path, stronger credibility, and a
              website system your team can keep using.
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

      <SectionShell sideLabel="strategy" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_5_opai-img-61.webp"
              alt="Corporate website strategy planning"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>Website strategy</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A corporate site should make your company easy to choose.
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              Corporate pages often serve prospects, partners, candidates,
              investors, and existing customers at the same time. We connect
              messaging, structure, SEO, CMS needs, and visual design into one
              practical roadmap.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Service journeys", "Proof sections", "CMS workflow", "Launch checks"].map((item) => (
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
              How a corporate <GradientText>website project</GradientText> runs
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

      <SectionShell sideLabel="outcomes" dark>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Badge>Proof and quality</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built with measurable <GradientText>business outcomes</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Every build includes decisions around page purpose, user flow,
              technical health, and post-launch ownership.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Clearer service journeys"],
              ["02", "Stronger lead capture"],
              ["03", "Reusable sections"],
              ["04", "CMS-ready content"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                <p className="font-mono text-xs font-bold text-[#0fc2ff]">{number}</p>
                <p className="mt-8 text-lg font-semibold leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="partner" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge>Choosing a partner</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              The right team understands <GradientText>content, conversion, and code</GradientText>
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              Ask how your partner handles discovery, content planning,
              stakeholder feedback, responsive QA, performance, integrations,
              and handover. These details decide whether the site remains useful
              after launch.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_60_opai-36.jpg"
              alt="Abstract digital brand visual"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Corporate website development <GradientText>FAQ</GradientText>
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
          Explore related <GradientText>website services</GradientText>
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
          <FiUsers className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>corporate website project</GradientText> with us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your current site, business goals, priority pages, and content
            needs. We will help map the right structure and development plan.
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
}

export default Corporate;
