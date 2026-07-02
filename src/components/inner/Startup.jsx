import React from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiFlag,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const serviceCards = [
  {
    icon: FiZap,
    title: "Launch websites",
    text: "Lean, credible startup websites for MVPs, early-stage brands, product launches, and founder-led offers.",
  },
  {
    icon: FiTarget,
    title: "Positioning and CTAs",
    text: "Messaging, page hierarchy, proof points, and calls to action shaped around early traction goals.",
  },
  {
    icon: FiGrid,
    title: "Flexible page systems",
    text: "Reusable sections for home pages, product pages, pricing, demo paths, FAQs, and campaign content.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth foundations",
    text: "Analytics, SEO basics, forms, campaign pages, and performance checks considered from the first release.",
  },
];

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
    title: "Campaign-ready base",
    text: "Your website can support demo requests, waitlists, paid traffic, early SEO, and investor conversations.",
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
  { icon: FiLayers, title: "Web applications development", to: "/services/web-application-development" },
  { icon: FiTarget, title: "Landings and promo sites", to: "/services/landing-page-development" },
  { icon: FiCode, title: "WordPress development", to: "/services/wordpress-development" },
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
          src="/imgi_150_Startup-begin-e1578985675881-1-2-768x512.jpg.webp"
          alt="Startup website planning"
          className="h-[270px] w-full object-cover opacity-85 md:h-[330px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.76))]" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
            startup launch
          </p>
          <p className="mt-2 max-w-sm text-2xl font-semibold text-white">
            Clear story, strong CTA, flexible first release
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["MVP", "Demo", "Lead"].map((item) => (
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

const Startup = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Startup Website Development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Startup websites built to launch, learn, and grow.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We design and develop lean, credible websites for new products,
              founders, SaaS teams, early-stage brands, and launch campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Hire us
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#services"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </a>
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
              Startup website <GradientText>development services</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              From positioning to post-launch changes, every decision is made
              so the first website feels polished and stays easy to evolve.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(card.icon)}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="benefits" dark>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Benefits of our <GradientText>startup website development</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Your first site should look mature, explain the offer clearly,
              and leave room for fast changes after real market feedback.
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

      <SectionShell sideLabel="launch" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_145_Preview-1-e1581578812600-3-768x512.jpg.webp"
              alt="Startup team planning a website"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>Launch foundations</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A launch site should make your idea easy to believe in.
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              Early visitors need to understand what you do, who it is for, why
              it matters, and what to do next without reading a long pitch deck.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Sharp messaging", "Demo request paths", "Reusable sections", "Analytics basics"].map((item) => (
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
              How our <GradientText>startup website projects</GradientText> run
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

      <SectionShell sideLabel="growth" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge>Built for growth</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              From MVP story to <GradientText>campaign-ready website</GradientText>
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              Your startup site can support product validation, investor
              conversations, demo requests, waitlists, paid traffic, and early
              SEO without becoming hard to manage.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_148_Preview-1-e1580368840192-3-768x512.jpg.webp"
              alt="Startup website design workspace"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="proof" dark>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Badge>What we include</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Credibility signals that help new brands <GradientText>feel real</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
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

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Startup website development <GradientText>FAQ</GradientText>
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
          Related services for <GradientText>startup teams</GradientText>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {relatedServices.map(({ icon: ServiceIcon, title, to }) => (
            <a
              key={title}
              href={to}
              className="group flex min-h-[170px] flex-col justify-between rounded-xl border border-white/10 bg-[#121720] p-5 transition hover:-translate-y-1 hover:border-[#6654ff]/50"
            >
              {React.createElement(ServiceIcon, {
                className: "text-3xl text-white/85",
              })}
              <span className="flex items-center justify-between gap-4 text-lg font-semibold text-white">
                {title}
                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          ))}
        </div>
      </SectionShell>

      <section className="px-4 pb-20 md:px-8 lg:px-9 lg:pb-24">
        <div className="mx-auto max-w-[1180px] rounded-xl border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(102,84,255,0.24),transparent_34%),radial-gradient(circle_at_78%_32%,rgba(255,45,120,0.18),transparent_30%),#121720] px-6 py-10 text-center md:px-10 md:py-12">
          <FiFlag className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>startup website project</GradientText> with us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your product, audience, launch goals, and current materials.
            We will help map the right first website structure and development
            plan.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Get in touch
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Startup;
