import React from "react";
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

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-[#6654ff] via-[#c235d8] to-[#ff2d78] bg-clip-text text-transparent">
    {children}
  </span>
);

const Badge = ({ children, light = false }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
      light
        ? "border-[#dde4f2] bg-white text-[#4a526c]"
        : "border-white/15 bg-white/[0.04] text-white/70"
    }`}
  >
    <span className="size-2 rounded-full bg-[#ff2d78]" />
    {children}
  </span>
);

const SectionShell = ({ id, label, dark = false, children }) => (
  <section
    id={id}
    className={`relative overflow-hidden ${
      dark ? "bg-[#071126] text-white" : "bg-white text-[#33384f]"
    }`}
  >
    <div className="pointer-events-none absolute inset-0 opacity-80">
      <div className="absolute left-[10%] top-[24%] size-48 rounded-full bg-[#1dc8ff]/18 blur-3xl" />
      <div className="absolute right-[8%] top-[14%] size-56 rounded-full bg-[#ff2d78]/16 blur-3xl" />
      <div className="absolute bottom-[-6rem] left-[36%] size-56 rounded-full bg-[#6654ff]/12 blur-3xl" />
    </div>

    <div className="relative mx-auto grid max-w-[1180px] grid-cols-[54px_1fr] gap-0 px-4 md:px-8 lg:grid-cols-[72px_1fr] lg:px-9">
      <div
        className={`flex items-center justify-center border-r ${
          dark ? "border-white/10 text-white/38" : "border-[#eef2f8] text-[#8c92aa]"
        }`}
      >
        <span className="rotate-[-90deg] whitespace-nowrap font-mono text-xs uppercase tracking-[0.34em]">
          {label}
        </span>
      </div>
      <div className="px-5 py-16 md:px-8 lg:px-10 lg:py-20">{children}</div>
    </div>
  </section>
);

const benefits = [
  {
    icon: FiSearch,
    title: "Discovery before design",
    text: "We map business goals, audience needs, buyer objections, and current site gaps before layouts begin.",
  },
  {
    icon: FiGrid,
    title: "Clear site structure",
    text: "Service pages, case studies, careers, resources, and contact paths are arranged so visitors find the next step fast.",
  },
  {
    icon: FiEdit3,
    title: "Brand-led UX/UI",
    text: "Your interface feels polished, readable, credible, and shaped around content your team can maintain.",
  },
  {
    icon: FiShield,
    title: "Reliable launch base",
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
  { icon: FiLayers, title: "Web design services", to: "/services" },
  { icon: FiCode, title: "WordPress development", to: "/services/wordpress-development" },
  { icon: FiBarChart2, title: "SEO and performance", to: "/services" },
];

const HeroVisual = () => (
  <div className="relative mx-auto min-h-[330px] w-full max-w-[470px]">
    <div className="absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#111722] shadow-[0_0_60px_rgba(102,84,255,0.16)] md:size-[320px]" />
    <div className="absolute inset-x-4 top-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-2xl">
      <img
        src="/imgi_60_opai-36.jpg"
        alt=""
        className="h-32 w-full object-cover opacity-75"
      />
    </div>
    <div className="absolute bottom-12 left-0 w-[58%] rounded-xl border border-white/10 bg-[#0b1428] p-4 shadow-2xl">
      <div className="mb-4 flex gap-2">
        <span className="size-2 rounded-full bg-[#ff3d4f]" />
        <span className="size-2 rounded-full bg-[#ffd166]" />
        <span className="size-2 rounded-full bg-[#2ee59d]" />
      </div>
      <div className="h-3 w-28 rounded-full bg-white/65" />
      <div className="mt-3 h-2 w-full rounded-full bg-white/18" />
      <div className="mt-2 h-2 w-4/5 rounded-full bg-white/14" />
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["UX", "CMS", "SEO"].map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-3 text-center font-mono text-[10px] font-bold text-white/55"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-[47%] rounded-3xl border border-white/10 bg-white p-4 text-[#33384f] shadow-2xl">
      <div className="mx-auto h-1.5 w-12 rounded-full bg-[#d9e0ef]" />
      <div className="mt-5 rounded-2xl bg-[#071126] p-3">
        <FiFileText className="text-2xl text-[#ff2d78]" />
        <div className="mt-8 h-3 w-full rounded-full bg-white/60" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/25" />
      </div>
      <div className="mt-3 h-9 rounded-full bg-gradient-to-r from-[#6654ff] to-[#ff2d78]" />
    </div>
  </div>
);

function Corporate() {
  return (
    <main className="overflow-hidden bg-white font-sans text-[#33384f]">
      <section className="relative min-h-[640px] overflow-hidden bg-[#071126] px-4 pt-28 text-white md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_28%,rgba(29,200,255,0.22),transparent_32%),radial-gradient(circle_at_78%_55%,rgba(255,45,120,0.18),transparent_30%),linear-gradient(180deg,#071126_0%,#0a1022_52%,#05070d_100%)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge>Corporate website development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal text-white md:text-5xl lg:text-[58px]">
              Corporate websites built for <GradientText>trust and clarity.</GradientText>
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/52 md:text-base">
              We plan, design, and develop company websites that explain your
              offer, support sales and hiring, and stay manageable after launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Start Project
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#process"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/85 transition hover:border-white/35 hover:text-white"
              >
                See Process
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="strategy" label="strategy" dark>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>Website strategy</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              A corporate site should make your company <GradientText>easy to choose.</GradientText>
            </h2>
          </div>
          <div className="space-y-5 text-sm font-semibold leading-7 text-white/55 md:text-base">
            <p>
              Corporate pages often serve prospects, partners, candidates,
              investors, and existing customers at the same time.
            </p>
            <p>
              We connect messaging, information architecture, visual design, CMS
              structure, SEO foundations, and performance into one practical roadmap.
            </p>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          <img
            src="/imgi_5_opai-img-61.webp"
            alt="Corporate website planning"
            className="h-[240px] w-full object-cover md:h-[320px]"
          />
        </div>
      </SectionShell>

      <SectionShell id="benefits" label="benefits">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge light>Why it works</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Benefits for your <GradientText>company and team</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              The goal is a clearer sales path, stronger credibility, and a
              website system your team can keep using.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: BenefitIcon, title, text }) => (
              <article
                key={title}
                className="rounded-xl border border-[#e6ebf5] bg-white p-5 transition hover:-translate-y-1 hover:border-[#ff2d78]/35"
              >
                {React.createElement(BenefitIcon, {
                  className: "text-3xl text-[#c5c8d2]",
                })}
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#33384f]">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#616980]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="process" label="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>Delivery flow</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              How a corporate <GradientText>website project</GradientText> runs
            </h2>
          </div>
          <div className="divide-y divide-white/12 border-y border-white/12">
            {process.map((step, index) => (
              <details key={step.title} className="group py-5 md:py-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold md:text-xl">
                  <span>
                    <span className="mr-3 font-mono text-sm text-white/35">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {step.title}
                  </span>
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-white/55 md:text-base">
                  {step.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="proof" label="proof" dark>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Badge>Proof and quality</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Built with measurable <GradientText>business outcomes</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/55 md:text-base">
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

      <SectionShell id="partner" label="partner">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/imgi_60_opai-36.jpg"
              alt="Abstract digital brand visual"
              className="h-[300px] w-full object-cover md:h-[360px]"
            />
          </div>
          <div>
            <Badge light>Choosing a partner</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              The right team understands <GradientText>content, conversion, and code</GradientText>
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              Ask how your partner handles discovery, content planning,
              stakeholder feedback, responsive QA, performance, integrations,
              and handover.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq" label="FAQ" dark>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Corporate website development <GradientText>FAQ</GradientText>
          </h2>
          <div className="divide-y divide-white/12 border-y border-white/12">
            {faqs.map((item, index) => (
              <details key={item.question} className="group py-5 md:py-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold md:text-xl">
                  {item.question}
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/55 md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="related" label="services">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
          Explore related <GradientText>website services</GradientText>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {relatedServices.map(({ icon: ServiceIcon, title, to }) => (
            <a
              key={title}
              href={to}
              className="group flex min-h-[170px] flex-col justify-between rounded-xl border border-[#e6ebf5] bg-white p-5 transition hover:-translate-y-1 hover:border-[#ff2d78]/45 hover:shadow-xl hover:shadow-[#1c2b5c]/10"
            >
              {React.createElement(ServiceIcon, {
                className: "text-3xl text-[#ff2d78]",
              })}
              <span className="flex items-center justify-between gap-4 text-lg font-semibold text-[#33384f]">
                {title}
                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}

export default Corporate;
