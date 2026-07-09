import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBookOpen,
  FiBox,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiCompass,
  FiEye,
  FiFeather,
  FiGrid,
  FiLayers,
  FiPenTool,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const GradientText = ({ children }) => (
  <span className="bg-[linear-gradient(90deg,#6654ff_0%,#bd3ee8_48%,#ff2d87_100%)] bg-clip-text text-transparent">
    {children}
  </span>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white/75">
    <span className="size-2 rounded-full bg-[#13d6ff]" />
    {children}
  </span>
);

const SectionShell = ({ id, label, dark = false, children, className = "" }) => (
  <section
    className={`relative overflow-hidden px-4 py-12 md:px-7 lg:px-8 lg:py-16 ${className} ${
      dark ? "bg-[#071027] text-white" : "bg-black text-white"
    }`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_32%,rgba(19,214,255,0.18),transparent_30%),radial-gradient(circle_at_82%_26%,rgba(255,45,135,0.18),transparent_30%),radial-gradient(circle_at_50%_86%,rgba(102,84,255,0.18),transparent_32%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-white/18 lg:block">
      {label}
    </p>
    <div id={id} className="relative mx-auto max-w-[1120px]">
      {children}
    </div>
  </section>
);

const identityServices = [
  {
    icon: FiCompass,
    title: "Brand positioning",
    text: "We clarify what you stand for, who you serve, how you differ, and what your audience should remember.",
    to: "/services/brand-identity",
  },
  {
    icon: FiSearch,
    title: "Audience research",
    text: "Competitors, customer expectations, visual references, and market signals are reviewed before design decisions begin.",
    to: "/process",
  },
  {
    icon: FiPenTool,
    title: "Logo direction",
    text: "Logo concepts, marks, lockups, and usage rules are developed to support a recognizable identity system.",
    to: "/services/logo-design-service",
  },
  {
    icon: FiGrid,
    title: "Color and typography",
    text: "We define palettes, type hierarchy, spacing rhythm, and visual rules your team can use consistently.",
    to: "/services/brand-identity",
  },
  {
    icon: FiLayers,
    title: "Brand applications",
    text: "Identity elements are tested across websites, pitch decks, social posts, print basics, and product touchpoints.",
    to: "/services/web-design-service",
  },
  {
    icon: FiClipboard,
    title: "Style guide handoff",
    text: "You receive practical guidelines, asset rules, and notes that keep future brand work aligned.",
    to: "/process",
  },
];

const benefits = [
  {
    icon: FiEye,
    title: "Clarity from day one",
    text: "A defined identity makes naming, messaging, visuals, and campaign decisions easier for everyone involved.",
    to: "/services/brand-identity",
  },
  {
    icon: FiBox,
    title: "A usable brand toolkit",
    text: "Instead of scattered files, your team gets logo variants, color rules, type direction, and clear usage notes.",
    to: "/services/logo-design-service",
  },
  {
    icon: FiUsers,
    title: "Shared internal language",
    text: "Sales, marketing, hiring, and product teams can describe the company with the same visual and verbal foundation.",
    to: "/process",
  },
  {
    icon: FiTrendingUp,
    title: "Confidence across touchpoints",
    text: "Your brand feels consistent in proposals, social content, landing pages, product screens, and presentations.",
    to: "/services/web-design-service",
  },
];

const process = [
  {
    title: "Discover context",
    text: "We start with your business goals, audience, competitors, existing assets, and the moments where your brand needs to earn trust.",
  },
  {
    title: "Define the direction",
    text: "We shape positioning, mood, tone, visual references, and success criteria so the creative work has a clear brief.",
  },
  {
    title: "Explore identity routes",
    text: "Logo, color, type, graphic language, and sample applications are explored through focused creative directions.",
  },
  {
    title: "Design the system",
    text: "The selected direction becomes a practical identity system with rules, variants, spacing, usage examples, and assets.",
  },
  {
    title: "Apply and hand over",
    text: "We prepare web, social, deck, and basic print examples with a concise guide your team can actually follow.",
  },
];

const faqs = [
  {
    question: "What is included in brand identity design?",
    answer:
      "Typical work includes discovery, competitor and audience research, positioning, moodboards, logo design or refinement, color and typography systems, sample applications, and a practical brand style guide.",
  },
  {
    question: "Can you work with our existing logo?",
    answer:
      "Yes. We can refresh, extend, or systemize an existing logo if it still has equity. If it is holding the brand back, we will recommend a clearer redesign path.",
  },
  {
    question: "Do you design brand assets for websites too?",
    answer:
      "Yes. Because our team also designs and builds websites, we prepare identity systems that work in real digital layouts, not only in static brand documents.",
  },
  {
    question: "How long does a brand identity project take?",
    answer:
      "It depends on scope, but focused identity projects often take a few weeks. Larger systems with naming, messaging, applications, and guidelines need more time.",
  },
];

const relatedServices = [
  { icon: FiPenTool, title: "UX, UI design", to: "/services/ui-ux-design" },
  { icon: FiGrid, title: "Web design", to: "/services/web-design-service" },
  { icon: FiLayers, title: "Website development", to: "/services/website-development" },
  { icon: FiArrowUpRight, title: "Corporate website", to: "/services/corporate-website-development" },
];

const ProofBadge = ({ title, rating, color = "text-[#ff4d3d]" }) => (
  <div className="grid aspect-square place-items-center border border-white/55 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]">
    <div className="text-center">
      <p className="text-2xl font-semibold text-white md:text-3xl">{title}</p>
      <p className="mt-2 text-sm font-bold text-white md:text-base">
        {rating} <span className={color}>*****</span>
      </p>
    </div>
  </div>
);

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[500px] overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-2.5 shadow-[0_22px_70px_rgba(255,45,135,0.14)]">
    <img
      src="/imgi_26_brand-identity-positioning-system-workspace.jpg.webp"
      alt="Brand positioning and identity system workspace"
      className="h-[260px] w-full rounded-lg object-cover opacity-90 md:h-[330px]"
    />
    <div className="absolute inset-3 rounded-lg bg-[linear-gradient(180deg,rgba(5,8,22,0.04),rgba(5,8,22,0.86))]" />
    <div className="absolute bottom-6 left-6 right-6">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
        brand identity system
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Logo", "Color", "Guide"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.08] p-2.5 backdrop-blur"
          >
            <span className="block h-2 w-12 rounded-full bg-[#13d6ff]" />
            <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Identity = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[600px] px-4 pt-28 md:px-7 lg:px-8 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(19,214,255,0.22),transparent_31%),radial-gradient(circle_at_80%_20%,rgba(255,45,135,0.24),transparent_31%),linear-gradient(180deg,#050506_0%,#071027_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.92),transparent)]" />

        <div className="relative mx-auto grid min-h-[470px] max-w-[1120px] items-center gap-9 lg:grid-cols-[1fr_1fr]">
          <div>
            <Badge>Brand Identity</Badge>
            <h1 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-normal md:text-[46px] lg:text-[58px]">
              Brand identity design for companies that need to be remembered.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-6 text-white/52 md:text-base">
              We shape logo systems, visual language, colors, typography, and
              practical guidelines so your brand feels clear wherever people
              meet it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-black transition hover:bg-zinc-200"
              >
                Start identity project
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#process"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white/82 transition hover:border-white/35 hover:text-white"
              >
                See process
                <FiArrowDown />
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="scope" label="scope">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>What we create</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Brand systems <GradientText>built around strategy</GradientText>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              A strong identity is more than a logo. It gives your team a visual
              and verbal foundation for decisions, campaigns, and growth.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {identityServices.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group rounded-xl border border-white/10 bg-[#121720] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#ff2d87]/50"
              >
                <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-lg text-white">
                  {React.createElement(card.icon)}
                </span>
                <h3 className="mt-5 flex items-center justify-between gap-4 text-lg font-semibold">
                  {card.title}
                  <FiArrowUpRight className="shrink-0 text-white/60 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell label="benefits" dark>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              What you gain from <GradientText>brand identity work</GradientText>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              A clear identity helps people recognize you faster and helps your
              team make consistent visual decisions without starting over.
            </p>
          </div>
          <div className="grid gap-5">
            {benefits.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group grid gap-4 rounded-xl border border-white/10 bg-black/40 p-5 transition hover:-translate-y-1 hover:border-[#13d6ff]/50 md:grid-cols-[auto_1fr]"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white text-lg text-black">
                  {React.createElement(item.icon)}
                </span>
                <div>
                  <h3 className="flex items-center justify-between gap-4 text-lg font-semibold leading-tight">
                    {item.title}
                    <FiArrowUpRight className="shrink-0 text-white/60 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/45 md:text-base">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell label="deliverables">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Badge>Deliverables</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              What you get as <GradientText>usable brand assets</GradientText>
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/45 md:text-base">
              Every project is scoped clearly, but typical identity work covers
              logo variants, color and typography systems, visual examples for
              key channels, and concise guidelines your team can follow.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Logo lockups and practical usage rules.",
                "Color, typography, spacing, and image direction.",
                "Examples for website sections, social posts, and decks.",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-white/58"
                >
                  <FiCheckCircle className="text-[#13d6ff]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#071027] p-3">
            <img
              src="/imgi_52_brand-identity-guidelines-assets-workspace-1.jpg.webp"
              alt="Brand guidelines and identity assets"
              className="h-[320px] w-full rounded-lg object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell id="process" label="why us" dark>
        <div className="grid gap-10 lg:grid-cols-[0.25fr_0.75fr]">
          <div className="hidden border-r border-white/10 lg:block">
            <div className="sticky top-28 grid gap-6 pl-5 text-lg font-semibold text-white/35">
              <span className="text-white">About</span>
              <span>Evidence</span>
              <span>Our Process</span>
              <span>Testimonials</span>
            </div>
          </div>
          <div className="grid gap-10">
            <article className="grid items-center gap-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-7 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <Badge>Why work with us</Badge>
                <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
                  Strategic <GradientText>brand work</GradientText>, not just
                  visual output
                </h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/48 md:text-base">
                  We connect identity decisions to business goals, digital
                  products, websites, and the everyday materials your team
                  actually uses.
                </p>
              </div>
              <img
                src="/imgi_53_brand-identity-logo-color-system-tablet.jpg.webp"
                alt="Logo and color system on tablet"
                className="h-[280px] w-full rounded-xl object-cover md:h-[340px]"
              />
            </article>

            <article>
              <Badge>Evidence</Badge>
              <h2 className="mt-4 max-w-3xl text-[28px] font-semibold leading-tight md:text-4xl">
                Proof that the <GradientText>process works</GradientText>
              </h2>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-white/48 md:text-base">
                Clients often come to us when the business has outgrown early
                visuals and needs a structured system. Reviews highlight the
                same themes: thoughtful discovery, clear communication, and
                assets that stay useful.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <ProofBadge title="Clutch" rating="4.9" />
                <ProofBadge title="Upwork" rating="4.9" color="text-[#62e843]" />
                <ProofBadge title="Google" rating="5.0" color="text-[#facc15]" />
              </div>
            </article>

            <article>
              <Badge>Our process</Badge>
              <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
                How our <GradientText>brand identity process</GradientText> works
              </h2>
              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {process.map((item, index) => (
                  <details
                    key={item.title}
                    open={index === 0}
                    className="group py-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold md:text-xl">
                      <span>
                        {String(index + 1).padStart(2, "0")}. {item.title}
                      </span>
                      <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 max-w-4xl text-sm font-semibold leading-6 text-white/48 md:text-base">
                      {item.text}
                    </p>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell label="fit">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#071027] p-3">
            <img
              src="/imgi_26_brand-identity-positioning-system-workspace.jpg.webp"
              alt="Brand positioning examples across devices"
              className="h-[320px] w-full rounded-lg object-cover md:h-[420px]"
            />
          </div>
          <div>
            <Badge>When to invest</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              When to invest in <GradientText>brand identity</GradientText>
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/45 md:text-base">
              Identity work matters when people describe your company
              differently, visuals vary across channels, you are entering a new
              market, or the current brand no longer matches the level of trust
              you need to create.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell label="FAQ" dark>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Brand identity <GradientText>questions</GradientText>
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0} className="py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold md:text-2xl">
                  <span>{item.question}</span>
                  <FiChevronDown className="shrink-0" />
                </summary>
                <p className="mt-5 text-sm font-semibold leading-7 text-white/45 md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell label="related">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge>Related services</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Related <GradientText>design and web services</GradientText>
            </h2>
          </div>
          <a
            href="/services"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/82 transition hover:border-white/35 hover:text-white"
          >
            All services
            <FiArrowUpRight />
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((item) => (
            <a
              key={item.title}
              href={item.to}
              className="group rounded-xl border border-white/10 bg-black/35 p-6 transition hover:-translate-y-1 hover:border-[#13d6ff]/50"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-white text-black">
                {React.createElement(item.icon)}
              </span>
              <h3 className="mt-8 text-lg font-semibold leading-tight">
                {item.title}
              </h3>
              <FiArrowUpRight className="mt-5 text-white/45 transition group-hover:text-white" />
            </a>
          ))}
        </div>
      </SectionShell>

      <section className="relative overflow-hidden bg-black px-4 py-18 text-white md:px-8 lg:px-9 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(19,214,255,0.2),transparent_30%),radial-gradient(circle_at_75%_35%,rgba(255,45,135,0.2),transparent_30%)]" />
        <div className="relative mx-auto max-w-[980px] text-center">
          <Badge>Contact us</Badge>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] md:text-5xl lg:text-[64px]">
            Discuss your <GradientText>brand identity project</GradientText>
          </h2>
          <a
            href="/contact"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Discuss your project
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Identity;
