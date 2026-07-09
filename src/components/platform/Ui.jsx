import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiEye,
  FiGrid,
  FiLayers,
  FiMousePointer,
  FiPenTool,
  FiSearch,
  FiSmartphone,
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
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_32%,rgba(19,214,255,0.18),transparent_30%),radial-gradient(circle_at_82%_26%,rgba(255,45,135,0.18),transparent_30%),radial-gradient(circle_at_52%_84%,rgba(102,84,255,0.18),transparent_32%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-white/18 lg:block">
      {label}
    </p>
    <div id={id} className="relative mx-auto max-w-[1120px] scroll-mt-28">
      {children}
    </div>
  </section>
);

const uiServices = [
  {
    icon: FiSearch,
    title: "UX discovery",
    text: "We clarify users, goals, friction points, product constraints, and success signals before visual design starts.",
    to: "/process",
  },
  {
    icon: FiGrid,
    title: "Information architecture",
    text: "Navigation, page structure, feature groups, and user paths are organized so the interface feels obvious.",
    to: "/services/web-application-development",
  },
  {
    icon: FiMousePointer,
    title: "Flows and prototypes",
    text: "Key journeys are mapped, tested, and refined with wireframes or clickable prototypes before build decisions lock in.",
    to: "/services/mobile-app-design",
  },
  {
    icon: FiPenTool,
    title: "Visual UI design",
    text: "Screens are designed with strong hierarchy, polished details, responsive states, and brand consistency.",
    to: "/services/web-design-service",
  },
  {
    icon: FiLayers,
    title: "Design systems",
    text: "Reusable components, spacing, type, colors, and interaction states make future pages faster and more consistent.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiClipboard,
    title: "Developer handoff",
    text: "We document decisions, states, behavior, and edge cases so implementation stays clear for your team.",
    to: "/services/web-application-development",
  },
];

const benefits = [
  {
    icon: FiEye,
    title: "Clearer paths to action",
    text: "Users understand what to do next because screens are structured around decisions, not decoration.",
  },
  {
    icon: FiTrendingUp,
    title: "Faster product adoption",
    text: "Cleaner onboarding, dashboards, forms, and flows reduce confusion and help people reach value sooner.",
  },
  {
    icon: FiUsers,
    title: "Aligned teams",
    text: "Product, marketing, and engineering get shared flows, design decisions, and reusable UI patterns.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive experience",
    text: "Mobile and desktop states are planned together so the experience stays readable, usable, and consistent.",
  },
];

const faqs = [
  {
    question: "What is included in UI/UX design?",
    answer:
      "Typical work includes discovery, user flows, information architecture, wireframes, prototypes, UI design, reusable components, responsive layouts, and developer-ready handoff notes.",
  },
  {
    question: "Can you improve an existing product?",
    answer:
      "Yes. We can audit current screens, identify friction, keep what already works, and redesign priority flows without forcing a full rebuild.",
  },
  {
    question: "Do you work with our developers?",
    answer:
      "Yes. We document behavior, states, spacing, components, and edge cases so your development team has a clear design source to build from.",
  },
  {
    question: "Is this only for apps?",
    answer:
      "No. UI/UX design is useful for SaaS products, dashboards, web apps, mobile interfaces, marketing websites, landing pages, and customer portals.",
  },
];

const relatedServices = [
  { icon: FiPenTool, title: "Web design", to: "/services/web-design-service" },
  { icon: FiLayers, title: "Web applications", to: "/services/web-application-development" },
  { icon: FiGrid, title: "Website development", to: "/services/website-development" },
  { icon: FiArrowUpRight, title: "Brand identity", to: "/services/brand-identity" },
];

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[500px] overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-2.5 shadow-[0_22px_70px_rgba(19,214,255,0.14)]">
    <img
      src="/imgi_98_web-application-development-product-dashboard-review-1536x864.jpg.webp"
      alt="Product dashboard UX and UI review"
      className="h-[260px] w-full rounded-lg object-cover opacity-90 md:h-[330px]"
    />
    <div className="absolute inset-3 rounded-lg bg-[linear-gradient(180deg,rgba(5,8,22,0.02),rgba(5,8,22,0.86))]" />
    <div className="absolute bottom-6 left-6 right-6">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
        product interface lab
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Flow", "UI", "Handoff"].map((item) => (
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

const Ui = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[600px] px-4 pt-28 md:px-7 lg:px-8 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(19,214,255,0.24),transparent_31%),radial-gradient(circle_at_80%_22%,rgba(255,45,135,0.22),transparent_31%),linear-gradient(180deg,#050506_0%,#071027_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.92),transparent)]" />

        <div className="relative mx-auto grid min-h-[470px] max-w-[1120px] items-center gap-9 lg:grid-cols-[1fr_1fr]">
          <div>
            <Badge>UX, UI design</Badge>
            <h1 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-normal md:text-[46px] lg:text-[58px]">
              UX/UI design for digital products people can use with confidence.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-6 text-white/52 md:text-base">
              We design product flows, dashboards, websites, and interfaces that
              feel clear, consistent, and ready for development.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-black transition hover:bg-zinc-200"
              >
                Start a UI/UX project
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
            <Badge>What we design</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              UI/UX design <GradientText>grounded in product strategy</GradientText>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              Strong design starts with understanding the user journey, not just
              drawing screens. We shape the logic, flow, and interface together.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {uiServices.map((card) => (
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

      <SectionShell id="evidence" label="benefits" dark>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              What strong <GradientText>UX/UI design</GradientText> changes
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              Better journeys reduce friction, make decisions easier, and give
              your team a cleaner system to build and improve.
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

      <SectionShell id="handoff" label="how we work">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Badge>Product mindset</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Designed for users, <GradientText>documented for developers</GradientText>
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/45 md:text-base">
              We balance clarity, brand, constraints, and implementation. That
              means the design can move from idea to screen without losing the
              decisions that made it work.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "User flows and screen states planned before handoff.",
                "Reusable components and responsive variants included.",
                "Clear notes for behavior, edge cases, and future changes.",
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
              src="/imgi_90_web-design-wireframe-to-final-preview-1024x576.jpg.webp"
              alt="UX wireframe to final interface preview"
              className="h-[320px] w-full rounded-lg object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      

      <SectionShell label="portfolio">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge>Selected work</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Recent <GradientText>UX/UI projects</GradientText>
            </h2>
          </div>
          <a
            href="/services/web-design-service"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-white/15 px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white/82 transition hover:border-white/35 hover:text-white"
          >
            Web design
            <FiArrowUpRight />
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            {
              image: "/imgi_98_web-application-development-product-dashboard-review-1536x864.jpg.webp",
              title: "Product dashboard review",
              tag: "SaaS UI",
            },
            {
              image: "/imgi_48_web-design-before-after-interface-review-768x1024.jpg.webp",
              title: "Before and after redesign",
              tag: "UX audit",
            },
            {
              image: "/imgi_47_web-design-visual-system-hologram-768x1024.jpg.webp",
              title: "Visual system design",
              tag: "Design system",
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
                  // UX strategy, UI design, handoff
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="FAQ" dark>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              UI/UX design <GradientText>questions</GradientText>
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
              Explore connected <GradientText>product and web services</GradientText>
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
            Discuss your <GradientText>UI/UX project</GradientText> with us
          </h2>
          <a
            href="/contact"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Talk to our team
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Ui;
