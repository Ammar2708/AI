import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiEdit3,
  FiEye,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiPenTool,
  FiSearch,
  FiSmartphone,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { useQuoteModal } from "../QuoteModalContext";

const GradientText = ({ children }) => (
  <span className="bg-[linear-gradient(90deg,#7c5cff_0%,#c23be7_48%,#ff2d87_100%)] bg-clip-text text-transparent">
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
    className={`relative overflow-hidden px-4 py-12 md:px-7 lg:px-8 lg:py-14 ${className} ${
      dark ? "bg-[#071027] text-white" : "bg-black text-white"
    }`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_30%,rgba(19,214,255,0.18),transparent_30%),radial-gradient(circle_at_78%_25%,rgba(255,45,135,0.18),transparent_30%),radial-gradient(circle_at_50%_84%,rgba(124,92,255,0.18),transparent_32%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-white/18 lg:block">
      {label}
    </p>
    <div id={id} className="relative mx-auto max-w-[1100px]">
      {children}
    </div>
  </section>
);

const designServices = [
  {
    icon: FiTarget,
    title: "Website strategy",
    text: "We define goals, audiences, user paths, page priorities, and conversion points before visual design begins.",
    to: "/process",
  },
  {
    icon: FiGrid,
    title: "UX and wireframes",
    text: "Core pages are planned around real content, clear hierarchy, navigation, calls to action, and responsive behavior.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiPenTool,
    title: "UI design systems",
    text: "Typography, color, spacing, cards, buttons, forms, and reusable states are designed as one coherent system.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiClipboard,
    title: "Developer handoff",
    text: "Layouts are prepared with component logic, states, content notes, and practical guidance for implementation.",
    to: "/services/website-development",
  },
  {
    icon: FiSearch,
    title: "SEO-aware layouts",
    text: "Page sections support readable content, keyword intent, internal links, headings, and future content growth.",
    to: "/services/tech-seo",
  },
  {
    icon: FiTrendingUp,
    title: "Redesign planning",
    text: "We review what exists, keep what works, remove friction, and redesign around stronger customer journeys.",
    to: "/services/website-development",
  },
];

const benefits = [
  {
    icon: FiEye,
    title: "Clear first impression",
    text: "Visitors should understand what you offer, why it matters, and where to go next without decoding the page.",
    to: "/services/landing-page-development",
  },
  {
    icon: FiUsers,
    title: "User journeys with purpose",
    text: "We map the paths different visitors need to take, then design pages and calls to action around those decisions.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiLayers,
    title: "Consistent visual language",
    text: "Reusable sections, component styles, and responsive states keep the brand consistent across the whole website.",
    to: "/services/brand-identity",
  },
  {
    icon: FiSmartphone,
    title: "Responsive by default",
    text: "Mobile, tablet, and desktop layouts are considered from the start, with attention to readability and tap targets.",
    to: "/services/website-development",
  },
];

const process = [
  {
    title: "Discovery and alignment",
    text: "We discuss your goals, audience, current website, competitors, content, analytics, constraints, and success criteria.",
  },
  {
    title: "Structure and content plan",
    text: "We map the sitemap, page roles, key messages, sections, user flows, and content priorities before visual design.",
  },
  {
    title: "Wireframes and UI direction",
    text: "Important pages are shaped into wireframes, then refined into visual layouts with clear hierarchy and brand direction.",
  },
  {
    title: "Design system and handoff",
    text: "Components, responsive states, interaction notes, and design tokens are prepared so development stays practical.",
  },
  {
    title: "Review and improvement",
    text: "After launch, we can review analytics, behavior, feedback, and campaign needs to keep improving the website.",
  },
];

const faqs = [
  {
    question: "What is included in your web design services?",
    answer:
      "Typical work includes discovery, sitemap planning, UX wireframes, UI design, responsive layouts, content structure, design system guidance, and developer handoff.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review your current site, identify what should stay, improve navigation and content flow, and create a refreshed design that is easier to build and manage.",
  },
  {
    question: "Can your design work with our CMS or development team?",
    answer:
      "Yes. We design with implementation in mind and can prepare layouts for WordPress, custom builds, or your internal development team.",
  },
  {
    question: "Do you help after the website goes live?",
    answer:
      "Yes. We can support new landing pages, design refinements, conversion improvements, analytics reviews, and ongoing content updates.",
  },
];

const relatedServices = [
  {
    icon: FiMonitor,
    title: "Website development",
    to: "/services/website-development",
  },
  {
    icon: FiLayers,
    title: "WordPress development",
    to: "/services/wordpress-development",
  },
  {
    icon: FiEdit3,
    title: "Landing page development",
    to: "/services/landing-page-development",
  },
  {
    icon: FiArrowUpRight,
    title: "Web applications development",
    to: "/services/web-application-development",
  },
];

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[470px] overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-2.5 shadow-[0_22px_70px_rgba(255,45,135,0.13)]">
    <img
      src="/imgi_90_web-design-wireframe-to-final-preview-1024x576.jpg.webp"
      alt="Website wireframe and finished page design preview"
      className="h-[250px] w-full rounded-lg object-cover opacity-90 md:h-[315px]"
    />
    <div className="absolute inset-3 rounded-lg bg-[linear-gradient(180deg,rgba(5,8,22,0.04),rgba(5,8,22,0.84))]" />
    <div className="absolute bottom-6 left-6 right-6">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
        design cockpit
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["UX", "UI", "CMS"].map((item) => (
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

const ProofBadge = ({ title, rating, color = "text-[#ff4d3d]" }) => (
  <div className="grid aspect-square place-items-center border border-white/55 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]">
    <div className="text-center">
      <p className="text-2xl font-semibold text-white md:text-3xl">{title}</p>
      <p className="mt-2 text-sm font-bold text-white md:text-base">
        {rating} <span className={color}>★★★★★</span>
      </p>
    </div>
  </div>
);

const WebDes = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[560px] px-4 pt-24 md:px-7 lg:px-8 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_30%,rgba(19,214,255,0.25),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(255,45,135,0.22),transparent_31%),linear-gradient(180deg,#050506_0%,#071027_52%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.92),transparent)]" />

        <div className="relative mx-auto grid min-h-[450px] max-w-[1100px] items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <Badge>Web design</Badge>
            <h1 className="mt-5 max-w-3xl text-[32px] font-semibold leading-[1.08] tracking-normal md:text-[44px] lg:text-[52px]">
              Web design services for websites people understand and trust.
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-white/52 md:text-base">
              We plan and design business websites, redesigns, landing pages,
              and web interfaces with clear structure, practical UX, and a
              visual system your team can build from.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-black transition hover:bg-zinc-200"
              >
                Start a design project
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="/services"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white/82 transition hover:border-white/35 hover:text-white"
              >
                Web design
                <FiArrowUpRight />
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="scope" label="scope" className="pt-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>What we design</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Website design <GradientText>shaped by strategy</GradientText>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              The page should not only look polished. It should explain the
              offer, support the message, answer objections, and guide the next
              step.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {designServices.map((card) => (
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
              What you gain from our <GradientText>web design team</GradientText>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-white/45 md:text-base">
              Our process reduces guesswork and turns your website into a
              clearer, more usable, and more trustworthy place for customers to
              interact with your business.
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

      <SectionShell label="strategy">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#071027] p-3">
            <img
              src="/imgi_47_web-design-visual-system-hologram-768x1024.jpg.webp"
              alt="Website design system interface"
              className="h-[320px] w-full rounded-lg object-cover md:h-[420px]"
            />
          </div>
          <div>
            <Badge>Design system</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Design that respects <GradientText>content and constraints</GradientText>
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/45 md:text-base">
              We consider how pages will be built, edited, translated, extended,
              and measured. The result is a design direction that looks strong
              and still works when real content, responsive layouts, and CMS
              editing rules arrive.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Clear design tokens and reusable component rules.",
                "Responsive states planned before development starts.",
                "Content sections designed for actual marketing needs.",
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
        </div>
      </SectionShell>

      <SectionShell label="about us" dark>
        <div className="grid gap-10 lg:grid-cols-[0.25fr_0.75fr]">
          <div className="hidden border-r border-white/10 lg:block">
            <div className="sticky top-28 grid gap-6 pl-5 text-lg font-semibold text-white/35">
              <span className="text-white">About us</span>
              <span>Evidence</span>
              <span>Process</span>
              <span>Testimonials</span>
            </div>
          </div>
          <div className="grid gap-10">
            <article className="rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-7">
              <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <Badge>How we think</Badge>
                  <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
                    Practical design for <GradientText>real websites</GradientText>
                  </h2>
                  <p className="mt-4 text-sm font-semibold leading-6 text-white/48 md:text-base">
                    We design close to UX, content structure, development, and
                    SEO-aware planning, so approved layouts are prepared for
                    real implementation instead of staying as pretty mockups.
                  </p>
                </div>
                <img
                  src="/imgi_48_web-design-before-after-interface-review-768x1024.jpg.webp"
                  alt="Before and after website redesign interface"
                  className="h-[320px] w-full rounded-xl object-cover md:h-[380px]"
                />
              </div>
            </article>

            <article>
              <Badge>Evidence</Badge>
              <h2 className="mt-4 max-w-3xl text-[28px] font-semibold leading-tight md:text-4xl">
                Evidence you can <GradientText>trust</GradientText>, not only
                promises
              </h2>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-white/48 md:text-base">
                Public reviews, project history, and repeat collaboration matter
                because design work is also about communication, structure, and
                dependable delivery.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <ProofBadge title="Clutch" rating="4.9" />
                <ProofBadge
                  title="Upwork"
                  rating="4.9"
                  color="text-[#62e843]"
                />
                <ProofBadge
                  title="Google"
                  rating="5.0"
                  color="text-[#facc15]"
                />
              </div>
            </article>

            <article>
              <Badge>Process</Badge>
              <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
                How our <GradientText>web design process</GradientText> works
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

      <SectionShell label="portfolio">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge>Selected work</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Selected <GradientText>website projects</GradientText>
            </h2>
          </div>
          <a
            href="/Platform"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-white/15 px-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white/82 transition hover:border-white/35 hover:text-white"
          >
            View work
            <FiArrowUpRight />
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            {
              image: "/imgi_145_Preview-1-e1581578812600-3-768x512.jpg.webp",
              title: "Accounting firm website",
              tag: "Corporate web design",
            },
            {
              image: "/imgi_148_Preview-1-e1580368840192-3-768x512.jpg.webp",
              title: "Electronics buyback redesign",
              tag: "E-commerce UX",
            },
            {
              image: "/imgi_150_Startup-begin-e1578985675881-1-2-768x512.jpg.webp",
              title: "Startup landing experience",
              tag: "Landing page",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]"
            >
              <div className="relative h-52 overflow-hidden">
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
                  // website design, UX, UI
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="right fit" dark>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <img
            src="/imgi_90_web-design-wireframe-to-final-preview-1024x576.jpg.webp"
            alt="Website redesign planning and preview screens"
            className="h-[320px] w-full rounded-xl object-cover md:h-[380px]"
          />
          <div>
            <Badge>When to choose us</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              When our <GradientText>web design services</GradientText> are the
              right choice
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/48 md:text-base">
              Our approach works best when the website is a core business asset.
              Common scenarios include a dated site, unclear positioning, pages
              created by different teams, an MVP that needs to mature, or a
              templated site that limits how you present your value.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell label="FAQ">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight md:text-4xl">
              Frequently asked questions about{" "}
              <GradientText>web design</GradientText>
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
              Services connected to <GradientText>web design</GradientText>
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
            Discuss your next <GradientText>website design</GradientText> or
            redesign with our team
          </h2>
          <button
            type="button"
            onClick={openQuoteModal}
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Request a quote
            <FiArrowDown className="-rotate-90" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default WebDes;
