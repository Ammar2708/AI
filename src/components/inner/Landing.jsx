import React from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiCpu,
  FiEdit3,
  FiFileText,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiSend,
  FiTarget,
  FiTrendingUp,
  FiZap,
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
      <div className="absolute left-[8%] top-[18%] size-52 rounded-full bg-[#1dc8ff]/18 blur-3xl" />
      <div className="absolute right-[7%] top-[10%] size-60 rounded-full bg-[#ff2d78]/16 blur-3xl" />
      <div className="absolute bottom-[-5rem] left-[38%] size-56 rounded-full bg-[#6654ff]/12 blur-3xl" />
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
    icon: FiTarget,
    title: "Campaign-first structure",
    text: "The offer, audience, traffic source, and CTA are aligned before the layout is designed.",
  },
  {
    icon: FiGrid,
    title: "Focused page sections",
    text: "Hero, proof, benefits, objections, forms, and next steps are arranged for quick scanning.",
  },
  {
    icon: FiTrendingUp,
    title: "Conversion tracking ready",
    text: "We plan analytics events, pixels, form paths, and CRM handoff around the campaign goal.",
  },
  {
    icon: FiZap,
    title: "Lightweight launch build",
    text: "Responsive layouts, optimized media, and clean frontend code keep the page fast and practical.",
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
      "Yes. We can use your existing brand, typography, content style, and technical setup, while making the page more campaign-focused than a standard website page.",
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
  { icon: FiLayers, title: "Landings and promo sites", to: "/services" },
  { icon: FiCode, title: "WordPress development", to: "/services/wordpress-development" },
  { icon: FiBarChart2, title: "Conversion marketing", to: "/services" },
];

const HeroVisual = () => (
  <div className="relative mx-auto min-h-[360px] w-full max-w-[500px]">
    <div className="absolute left-1/2 top-1/2 size-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-[#111722] shadow-[0_0_70px_rgba(255,45,120,0.18)] md:size-[340px]" />
    <div className="absolute inset-x-2 top-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-2xl">
      <img
        src="/imgi_105_landing-page-conversion-structure-workspace-1-768x432.jpg.webp"
        alt="Landing page campaign workspace"
        className="h-48 w-full object-cover opacity-90 md:h-56"
      />
    </div>
    <div className="absolute bottom-10 left-0 w-[55%] rounded-xl border border-white/10 bg-[#0b1428]/95 p-4 shadow-2xl">
      <FiSend className="text-3xl text-[#0fc2ff]" />
      <div className="mt-6 h-3 w-28 rounded-full bg-white/65" />
      <div className="mt-3 h-2 w-full rounded-full bg-white/18" />
      <div className="mt-2 h-2 w-4/5 rounded-full bg-white/14" />
      <div className="mt-5 grid grid-cols-2 gap-2">
        {["Ad", "Lead"].map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-3 text-center font-mono text-[10px] font-bold text-white/55"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-[48%] rounded-3xl border border-white/10 bg-white p-4 text-[#33384f] shadow-2xl">
      <div className="mx-auto h-1.5 w-12 rounded-full bg-[#d9e0ef]" />
      <div className="mt-5 rounded-2xl bg-[#071126] p-3">
        <FiTarget className="text-2xl text-[#ff2d78]" />
        <div className="mt-8 h-3 w-full rounded-full bg-white/60" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/25" />
      </div>
      <div className="mt-3 h-9 rounded-full bg-gradient-to-r from-[#6654ff] to-[#ff2d78]" />
    </div>
  </div>
);

const Landing = () => {
  return (
    <main className="overflow-hidden bg-white font-sans text-[#33384f]">
      <section className="relative min-h-[640px] overflow-hidden bg-[#071126] px-4 pt-28 text-white md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_28%,rgba(29,200,255,0.22),transparent_32%),radial-gradient(circle_at_78%_55%,rgba(255,45,120,0.18),transparent_30%),linear-gradient(180deg,#071126_0%,#0a1022_52%,#05070d_100%)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge>Landing page development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal text-white md:text-5xl lg:text-[58px]">
              Landing pages built for <GradientText>campaigns that convert.</GradientText>
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/52 md:text-base">
              We design and develop focused landing pages for paid ads, product
              launches, lead generation, email flows, and promo campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Discuss Project
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

      <SectionShell id="campaigns" label="campaigns">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge light>How we work</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Pages that match the <GradientText>promise of your campaign</GradientText>
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              A landing page should not feel like a generic website page. It
              needs one job, one audience, one message, and a smooth path to action.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#e6ebf5]">
            <img
              src="/imgi_142_landing-page-campaign-workflow-hologram-225x300.jpg.webp"
              alt="Campaign landing page workflow"
              className="h-[360px] w-full object-cover md:h-[430px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell id="benefits" label="benefits">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge light>Why clients choose us</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Built around <GradientText>clarity, speed, and action</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              We keep campaign pages focused enough to convert and structured
              enough to improve after launch.
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

      <SectionShell id="expertise" label="expertise" dark>
        <div>
          <Badge>Our expertise</Badge>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Landing page design and development that starts with your campaign
          </h2>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/55 md:text-base">
            Before design starts, we review the audience, traffic source, offer,
            follow-up path, and measurement plan so the page has one clear job.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          <img
            src="/imgi_143_landing-page-product-hero-layout-225x300.jpg.webp"
            alt="Landing page product hero layout"
            className="h-[360px] w-full object-cover md:h-[470px]"
          />
        </div>
      </SectionShell>

      <SectionShell id="process" label="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>Delivery flow</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>landing page process</GradientText> works
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

      <SectionShell id="testing" label="testing">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/imgi_105_landing-page-conversion-structure-workspace-1-768x432.jpg.webp"
              alt="Landing page conversion structure"
              className="h-[300px] w-full object-cover md:h-[360px]"
            />
          </div>
          <div>
            <Badge light>Prepared for iteration</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              A focused <GradientText>landing page agency</GradientText> for launch and testing
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              We build sections and components with future changes in mind, so
              offers, proof points, forms, and CTAs can be tested after launch.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq" label="FAQ" dark>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Landing page development <GradientText>FAQ</GradientText>
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
          Related services for <GradientText>campaign pages</GradientText>
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

      <SectionShell id="contact" label="contact">
        <div className="text-center">
          <Badge light>Start a focused page</Badge>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>landing page project</GradientText>
          </h2>
          <a
            href="/contact"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#071126] px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black"
          >
            Discuss your project
            <FiArrowUpRight />
          </a>
        </div>
      </SectionShell>
    </main>
  );
};

export default Landing;
