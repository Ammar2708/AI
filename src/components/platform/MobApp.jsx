import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiCompass,
  FiCpu,
  FiEye,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiRefreshCw,
  FiSearch,
  FiSmartphone,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { useQuoteModal } from "../QuoteModalContext";

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
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_32%,rgba(19,214,255,0.18),transparent_30%),radial-gradient(circle_at_82%_26%,rgba(255,45,135,0.18),transparent_30%),radial-gradient(circle_at_50%_86%,rgba(102,84,255,0.18),transparent_32%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-white/18 lg:block">
      {label}
    </p>
    <div id={id} className="relative mx-auto max-w-[1120px]">
      {children}
    </div>
  </section>
);

const appServices = [
  {
    icon: FiCompass,
    title: "Product discovery",
    text: "We clarify the product idea, users, platforms, core flows, business goals, and first-release priorities before screens are designed.",
    to: "/process",
  },
  {
    icon: FiSearch,
    title: "UX flows and IA",
    text: "User journeys, information architecture, and task flows give your team a clear map for onboarding, accounts, dashboards, booking, checkout, or custom features.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiSmartphone,
    title: "Mobile UI design",
    text: "We design polished app screens with mobile-first spacing, navigation, states, empty views, and interaction patterns.",
    to: "/services/mobile-app-design",
  },
  {
    icon: FiGrid,
    title: "Component systems",
    text: "Reusable components, variants, and usage rules help Android, iOS, and web experiences feel aligned without becoming rigid.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiRefreshCw,
    title: "Prototype review",
    text: "Clickable prototypes expose friction early, so stakeholders can test the logic before development effort is committed.",
    to: "/process",
  },
  {
    icon: FiClipboard,
    title: "Developer handoff",
    text: "Organized files, component notes, edge cases, and state details make implementation easier for your internal or external dev team.",
    to: "/services/web-application-development",
  },
];

const benefits = [
  {
    icon: FiTarget,
    title: "Clarity on what to build first",
    text: "We help define the MVP scope and strongest user journeys, so design energy goes into the flows that matter most.",
    to: "/process",
  },
  {
    icon: FiEye,
    title: "UX that feels natural",
    text: "Navigation, feedback, forms, filters, and task completion are shaped around real user behavior instead of isolated screens.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiLayers,
    title: "Consistent UI across platforms",
    text: "Components and visual rules keep Android, iOS, and responsive web interfaces coherent while respecting each platform.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiZap,
    title: "Smoother development handoff",
    text: "Developers get practical specs, states, and behavior notes that reduce questions, delays, and design drift.",
    to: "/services/web-application-development",
  },
];

const faqs = [
  {
    question: "What do you need before starting a mobile app design project?",
    answer:
      "A product idea, target users, platform plans, business goals, and any existing research are enough to begin. If you already have an app, screenshots, analytics, and known issues help us move faster.",
  },
  {
    question: "Can you redesign an existing app?",
    answer:
      "Yes. We can audit current flows, improve information architecture, redesign the UI, and prepare a cleaner component system without forcing a full rebuild.",
  },
  {
    question: "Can you work with our developers?",
    answer:
      "Yes. We can work alongside in-house or external developers and prepare organized handoff files, component behavior notes, and review checkpoints.",
  },
  {
    question: "How do you estimate pricing and timelines?",
    answer:
      "We estimate after understanding the number of flows, screen complexity, prototype needs, design system depth, and whether the project is new design or redesign.",
  },
  {
    question: "What do we receive at the end?",
    answer:
      "You receive design files, app screens, reusable components, prototype links when included, export-ready assets, and handoff notes for implementation.",
  },
];

const relatedServices = [
  { icon: FiGrid, title: "UX and UI design", to: "/services/ui-ux-design" },
  { icon: FiMonitor, title: "Web app development", to: "/services/web-application-development" },
  { icon: FiCpu, title: "Website development", to: "/services/website-development" },
  { icon: FiLayers, title: "Brand identity", to: "/services/brand-identity" },
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
  <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-2.5 shadow-[0_22px_70px_rgba(19,214,255,0.16)]">
    <img
      src="/imgi_90_mobile-app-design-dashboard-screen-flow-1024x576.jpg.webp"
      alt="Mobile app dashboard screen flow"
      className="h-[260px] w-full rounded-lg object-cover opacity-90 md:h-[330px]"
    />
    <div className="absolute inset-3 rounded-lg bg-[linear-gradient(180deg,rgba(5,8,22,0.02),rgba(5,8,22,0.84))]" />
    <div className="absolute bottom-6 left-6 right-6">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
        mobile design sprint
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Flow", "Screen", "Handoff"].map((item) => (
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

const MobApp = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[600px] px-4 pt-28 md:px-7 lg:px-8 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(19,214,255,0.23),transparent_31%),radial-gradient(circle_at_80%_22%,rgba(255,45,135,0.25),transparent_31%),linear-gradient(180deg,#050506_0%,#071027_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.92),transparent)]" />

        <div className="relative mx-auto grid min-h-[470px] max-w-[1120px] items-center gap-9 lg:grid-cols-[1fr_1fr]">
          <div>
            <Badge>Mobile app design</Badge>
            <h1 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-normal md:text-[46px] lg:text-[58px]">
              Mobile app design services for products people understand fast.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-6 text-white/52 md:text-base">
              We design mobile apps with clear product logic, intuitive UX,
              polished UI, and practical handoff details your development team
              can actually use.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-black transition hover:bg-zinc-200"
              >
                Discuss your app
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

      <SectionShell id="scope" label="expertise">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>What we design</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Mobile app design that starts with{" "}
              <GradientText>product logic</GradientText>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              Strong app design is more than nice screens. We connect business
              goals, user journeys, interface patterns, and developer handoff
              into one practical design direction.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {appServices.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group rounded-xl border border-white/10 bg-[#121720] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#13d6ff]/50"
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
              What you get from <GradientText>our mobile app work</GradientText>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              We help teams move from a rough product idea to screens,
              prototypes, and implementation-ready decisions.
            </p>
          </div>
          <div className="grid gap-5">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 rounded-xl border border-white/10 bg-black/40 p-5 md:grid-cols-[auto_1fr]"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white text-lg text-black">
                  {React.createElement(item.icon)}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/45 md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell label="deliverables">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Badge>Deliverables</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              App screens, flows, and{" "}
              <GradientText>handoff your team can use</GradientText>
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/45 md:text-base">
              Your final package is shaped around the product, but each project
              is built to make decisions clearer before development begins.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Core user journeys, screen maps, and clickable prototypes when needed.",
                "High-fidelity app UI with reusable components and states.",
                "Export-ready assets, notes, and organized developer handoff.",
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
              src="/imgi_39_mobile-app-design-communication-interface-768x1024.jpg.webp"
              alt="Mobile app communication interface design"
              className="h-[320px] w-full rounded-lg object-cover md:h-[430px]"
            />
          </div>
        </div>
      </SectionShell>

      

      <SectionShell label="portfolio">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge>Selected work</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Mobile app UX for <GradientText>real teams</GradientText>
            </h2>
          </div>
          <a
            href="/services/ui-ux-design"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-white/15 px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white/82 transition hover:border-white/35 hover:text-white"
          >
            UX and UI design
            <FiArrowUpRight />
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            {
              image: "/imgi_90_mobile-app-design-dashboard-screen-flow-1024x576.jpg.webp",
              title: "Dashboard flow design",
              tag: "Finance app",
            },
            {
              image: "/imgi_40_mobile-app-design-food-ordering-screens-768x1024.jpg.webp",
              title: "Food ordering screens",
              tag: "Ordering UX",
            },
            {
              image: "/imgi_61_ecommerce-mobile-product-page-optimization.jpg.webp",
              title: "Mobile commerce flow",
              tag: "Conversion UX",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-[#13d6ff] px-3 py-1 text-xs font-bold text-black">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                  // UX flows, UI screens, prototype, handoff
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="strategy" dark>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#071027] p-3">
            <img
              src="/imgi_90_mobile-app-design-dashboard-screen-flow-1024x576.jpg.webp"
              alt="Mobile app user journey and dashboard design"
              className="h-[320px] w-full rounded-lg object-cover md:h-[420px]"
            />
          </div>
          <div>
            <Badge>When to invest</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Invest in app design before{" "}
              <GradientText>development gets expensive</GradientText>
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/48 md:text-base">
              Mobile app design is useful when you are building a new product,
              redesigning a weak first version, or extending a web product into
              native mobile. A focused design phase helps your team catch weak
              flows and missing states before code is written.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell label="FAQ">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Mobile app design <GradientText>questions</GradientText>
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

      <SectionShell label="related" dark>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge>Related services</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Related <GradientText>UX and product services</GradientText>
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
            Discuss your{" "}
            <GradientText>mobile app design project</GradientText>
          </h2>
          <button
            type="button"
            onClick={openQuoteModal}
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Get in touch
            <FiArrowDown className="-rotate-90" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default MobApp;
