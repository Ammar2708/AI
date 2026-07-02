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
  FiFlag,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiSearch,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
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
      <div className="absolute left-[8%] top-[22%] size-52 rounded-full bg-[#1dc8ff]/18 blur-3xl" />
      <div className="absolute right-[8%] top-[12%] size-60 rounded-full bg-[#ff2d78]/16 blur-3xl" />
      <div className="absolute bottom-[-6rem] left-[38%] size-56 rounded-full bg-[#6654ff]/12 blur-3xl" />
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
    icon: FiZap,
    title: "Launch-ready positioning",
    text: "We help shape the offer, audience, promise, and first conversion path before design begins.",
  },
  {
    icon: FiGrid,
    title: "Lean website structure",
    text: "Home, product, pricing, demo, case study, and contact paths are planned around early traction.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth foundations",
    text: "Analytics, SEO basics, performance, forms, and campaign pages are considered from the start.",
  },
  {
    icon: FiShield,
    title: "Built to evolve",
    text: "Reusable sections and clean components make it easier to adjust messaging as your startup learns.",
  },
];

const process = [
  {
    title: "Founder discovery",
    text: "We clarify your product, audience, market, competitors, traction goals, core offer, and what the first website version needs to prove.",
  },
  {
    title: "Messaging and sitemap",
    text: "We turn early-stage ideas into a clear page structure, headline direction, proof points, and calls to action.",
  },
  {
    title: "UX/UI design",
    text: "The interface is designed to feel credible, sharp, and fast to understand, even if the brand is still forming.",
  },
  {
    title: "Development and integrations",
    text: "We build responsive pages, lead forms, analytics events, CMS-ready sections, and practical integrations for launch.",
  },
  {
    title: "Launch and improve",
    text: "After QA and launch, the website is ready for new content, product updates, experiments, and campaign traffic.",
  },
];

const faqs = [
  {
    question: "What pages does a startup website need first?",
    answer:
      "Most startup sites start with a focused home page, product or service page, pricing or demo CTA, proof section, FAQ, and a contact or lead capture path.",
  },
  {
    question: "Can you work if our brand is not finished yet?",
    answer:
      "Yes. We can create a practical web direction using your current logo, colors, product notes, and examples, then keep the system flexible for future brand updates.",
  },
  {
    question: "Is this different from a corporate website?",
    answer:
      "Yes. Startup websites usually need faster iteration, sharper positioning, stronger launch CTAs, and flexible sections that can change as the product and market evolve.",
  },
  {
    question: "Can you add analytics, forms, and campaign pages?",
    answer:
      "Yes. We can plan conversion events, form handling, lead routing, and landing pages so growth campaigns have a reliable base.",
  },
];

const relatedServices = [
  { icon: FiMonitor, title: "Website development", to: "/services/website-development" },
  { icon: FiLayers, title: "Websites for startups", to: "/services" },
  { icon: FiTarget, title: "Landings and promo sites", to: "/services/landing-page-development" },
  { icon: FiCode, title: "WordPress development", to: "/services/wordpress-development" },
];

const HeroVisual = () => (
  <div className="relative mx-auto min-h-[370px] w-full max-w-[510px]">
    <div className="absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-[#111722] shadow-[0_0_70px_rgba(102,84,255,0.18)] md:size-[350px]" />
    <div className="absolute inset-x-2 top-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-2xl">
      <img
        src="/imgi_150_Startup-begin-e1578985675881-1-2-768x512.jpg.webp"
        alt="Startup website planning"
        className="h-48 w-full object-cover opacity-90 md:h-56"
      />
    </div>
    <div className="absolute bottom-12 left-0 w-[57%] rounded-xl border border-white/10 bg-[#0b1428]/95 p-4 shadow-2xl">
      <FiZap className="text-3xl text-[#0fc2ff]" />
      <div className="mt-6 h-3 w-28 rounded-full bg-white/65" />
      <div className="mt-3 h-2 w-full rounded-full bg-white/18" />
      <div className="mt-2 h-2 w-4/5 rounded-full bg-white/14" />
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["MVP", "Demo", "Lead"].map((item) => (
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
        <FiFlag className="text-2xl text-[#ff2d78]" />
        <div className="mt-8 h-3 w-full rounded-full bg-white/60" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/25" />
      </div>
      <div className="mt-3 h-9 rounded-full bg-gradient-to-r from-[#6654ff] to-[#ff2d78]" />
    </div>
  </div>
);

const Startup = () => {
  return (
    <main className="overflow-hidden bg-white font-sans text-[#33384f]">
      <section className="relative min-h-[640px] overflow-hidden bg-[#071126] px-4 pt-28 text-white md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_28%,rgba(29,200,255,0.22),transparent_32%),radial-gradient(circle_at_78%_55%,rgba(255,45,120,0.18),transparent_30%),linear-gradient(180deg,#071126_0%,#0a1022_52%,#05070d_100%)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge>Startup website development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal text-white md:text-5xl lg:text-[58px]">
              Startup websites built to <GradientText>launch, learn, and grow.</GradientText>
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/52 md:text-base">
              We design and develop lean, credible websites for new products,
              founders, SaaS teams, early-stage brands, and launch campaigns.
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

      <SectionShell id="strategy" label="strategy">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge light>Startup strategy</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              A launch site should make your idea <GradientText>easy to believe in</GradientText>
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              Early visitors need to understand what you do, who it is for, why
              it matters, and what to do next without reading a long pitch deck.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#e6ebf5]">
            <img
              src="/imgi_145_Preview-1-e1581578812600-3-768x512.jpg.webp"
              alt="Startup team planning a website"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell id="benefits" label="benefits">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge light>Why startups choose us</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              A practical website system for <GradientText>early traction</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              The first version should look mature, explain the offer clearly,
              and leave room for fast changes after real market feedback.
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

      <SectionShell id="launch" label="launch" dark>
        <div>
          <Badge>Launch foundations</Badge>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Website design for founders who need momentum, not clutter
          </h2>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/55 md:text-base">
            We keep the experience focused on positioning, product value,
            credibility, conversion, and a technical setup your team can grow with.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          <img
            src="/imgi_148_Preview-1-e1580368840192-3-768x512.jpg.webp"
            alt="Startup website design workspace"
            className="h-[360px] w-full object-cover md:h-[470px]"
          />
        </div>
      </SectionShell>

      <SectionShell id="process" label="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>Delivery flow</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>startup website process</GradientText> works
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

      <SectionShell id="growth" label="growth">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/imgi_154_photo-1498887960847-2a5e46312788-e1577956794233-3-768x512.jpg.webp"
              alt="Startup growth marketing"
              className="h-[300px] w-full object-cover md:h-[360px]"
            />
          </div>
          <div>
            <Badge light>Built for growth</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              From MVP story to <GradientText>campaign-ready website</GradientText>
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-[#5f667f] md:text-base">
              Your startup site can support product validation, investor
              conversations, demo requests, waitlists, paid traffic, and early SEO.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="proof" label="proof" dark>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Badge>What we include</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Credibility signals that help new brands <GradientText>feel real</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/55 md:text-base">
              Even young companies need a polished first impression, clear copy,
              proof points, secure forms, and a stable foundation for launch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Sharp launch messaging"],
              ["02", "Demo and waitlist paths"],
              ["03", "Reusable page sections"],
              ["04", "SEO and analytics basics"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                <p className="font-mono text-xs font-bold text-[#0fc2ff]">{number}</p>
                <p className="mt-8 text-lg font-semibold leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq" label="FAQ" dark>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Startup website development <GradientText>FAQ</GradientText>
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
          Related services for <GradientText>startup teams</GradientText>
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
          <Badge light>Launch your site</Badge>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>startup website project</GradientText>
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

export default Startup;
