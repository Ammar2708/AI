import React from "react";
import {
  FiArrowDown,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCopy,
  FiFileText,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const serviceCards = [
  {
    icon: FiMonitor,
    title: "Display ad sets",
    text: "Google Display, retargeting, and campaign banners designed as a consistent system across priority sizes.",
  },
  {
    icon: FiGrid,
    title: "Social campaign creatives",
    text: "Meta, LinkedIn, and paid social layouts with clear visual hierarchy, offer messaging, and CTA direction.",
  },
  {
    icon: FiCopy,
    title: "Creative variants",
    text: "Headline, audience, offer, and placement variations prepared so your team can test without messy production.",
  },
  {
    icon: FiFileText,
    title: "Organized handoff",
    text: "Exported files, source assets, naming structure, and notes that make launch and future updates easier.",
  },
];

const benefits = [
  {
    icon: FiTarget,
    title: "Focused around campaign goals",
    text: "Every layout starts with the offer, audience, landing page, and next action, so the creative has a clear job.",
  },
  {
    icon: FiLayers,
    title: "Consistent banner systems",
    text: "We keep typography, brand assets, colors, spacing, and CTA treatment aligned across all campaign sizes.",
  },
  {
    icon: FiBarChart2,
    title: "Built for useful testing",
    text: "Variants are planned around meaningful differences, helping your team compare messages instead of random visuals.",
  },
  {
    icon: FiUsers,
    title: "Easy team collaboration",
    text: "We support founders, marketing teams, PPC specialists, and media buyers with clean review and delivery workflows.",
  },
];

const process = [
  {
    title: "Brief and campaign goals",
    text: "We clarify the audience, placements, offer, landing page, KPIs, brand rules, and technical requirements.",
  },
  {
    title: "Message and visual direction",
    text: "We shape the headline structure, CTA approach, image direction, and variant plan before production begins.",
  },
  {
    title: "Design production",
    text: "Priority sizes are designed as one connected system with responsive cropping, readable type, and strong CTA placement.",
  },
  {
    title: "Review and export",
    text: "After feedback, we prepare launch-ready files, source assets, and organized versions for each platform or audience.",
  },
  {
    title: "Iteration support",
    text: "We can refine copy, creative angles, sizes, and offers after early campaign feedback without rebuilding from scratch.",
  },
];

const faqs = [
  {
    question: "What do you need to start a banner ad design project?",
    answer:
      "A brief, brand assets, campaign goals, target audience, landing page URL, platform requirements, and any offer or compliance notes are enough to start.",
  },
  {
    question: "Can you design multiple sizes and versions?",
    answer:
      "Yes. We can create one focused banner set or larger batches with size, audience, offer, and copy variations for testing.",
  },
  {
    question: "Do you design static and animated banners?",
    answer:
      "We design static banners and can also prepare motion-ready concepts or assets for animated production when the campaign needs them.",
  },
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

const BannerMock = () => (
  <div className="relative mx-auto max-w-[500px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(102,84,255,0.2)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
        <img
          src="/imgi_89_banner-ad-design-multi-format-campaign-workspace-1536x864.jpg.webp"
          alt="Banner ad campaign creative workspace"
          className="h-48 w-full object-cover opacity-85 md:h-60"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Sizes", "Copy", "CTA"].map((item) => (
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

const Ad = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Banner Ad Design</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Campaign banners designed to look sharp and earn clicks.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We design banner ad systems for display, retargeting, and paid
              social campaigns with clear offers, strong CTA hierarchy, and
              organized files your team can launch quickly.
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
          <BannerMock />
        </div>
      </section>

      <SectionShell sideLabel="services" className="pt-10">
        <div id="services" className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Badge>What we design</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Banner ad <GradientText>design services</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              From first campaign idea to final exports, every creative is
              designed to keep the message readable, branded, and ready for the
              platform it runs on.
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
              Benefits of our <GradientText>banner ad design</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Good campaign creative should give your marketing team a clearer
              message, stronger brand consistency, and less production friction.
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

      <SectionShell sideLabel="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>banner projects</GradientText> run
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

      <SectionShell sideLabel="creative" className="bg-black">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_105_landing-page-conversion-structure-workspace-1-768x432.jpg.webp"
              alt=""
              aria-hidden="true"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>Campaign foundations</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Designed for message match after the click.
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              Banner ads perform better when the creative, landing page, and
              retargeting path feel connected. We check offer clarity, CTA
              language, visual priority, and destination pages before the final
              files are prepared.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Readable small sizes", "Offer-led layouts", "Audience variants", "Clean export structure"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70">
                  <FiCheckCircle className="text-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Banner ad design <GradientText>FAQ</GradientText>
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
          <FiTrendingUp className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>banner ad brief</GradientText> with us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your campaign goals, placements, and landing page. We will
            help shape the right creative set and production plan.
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

export default Ad;
