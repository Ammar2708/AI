import React from "react";
import {
  FiArrowDown,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayers,
  FiMonitor,
  FiSearch,
  FiShield,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const offerCards = [
  {
    icon: FiMonitor,
    title: "Corporate Websites",
    text: "Polished business websites with clear messaging, strong structure, and pages built around conversion.",
  },
  {
    icon: FiZap,
    title: "Startup Launches",
    text: "Fast, focused launch sites for new brands, offers, campaigns, and early-stage product validation.",
  },
  {
    icon: FiLayers,
    title: "Landing Pages",
    text: "High-performing promo pages with sharp sections, responsive layouts, and persuasive calls to action.",
  },
  {
    icon: FiCode,
    title: "Web Applications",
    text: "Interactive product experiences, dashboards, forms, and custom workflows designed for real users.",
  },
  {
    icon: FiCpu,
    title: "WordPress Builds",
    text: "Maintainable WordPress websites with flexible content editing and clean front-end execution.",
  },
  {
    icon: FiShield,
    title: "E-commerce",
    text: "Online stores that are easy to browse, simple to manage, and built to support confident purchases.",
  },
];

const expertise = [
  {
    icon: FiLayers,
    title: "Custom UI/UX",
    text: "We shape user journeys, page hierarchy, and interface details before development begins.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Build",
    text: "Every layout is tuned for desktop, tablet, and mobile so the experience stays smooth everywhere.",
  },
  {
    icon: FiSearch,
    title: "Built-in SEO",
    text: "Clean structure, fast pages, readable content, and technical foundations that support search visibility.",
  },
  {
    icon: FiCheckCircle,
    title: "QA & Launch",
    text: "We test forms, responsiveness, performance, and page behavior before your website goes live.",
  },
];

const process = [
  "Discovery and goals",
  "Content and page structure",
  "UI direction",
  "Responsive development",
  "Testing and launch",
];

const WebsiteDevelopment = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_28%,rgba(102,84,255,0.34),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,#050506_0%,#090b12_48%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.9),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              <span className="size-2 rounded-full bg-[#6654ff]" />
              Website Development
            </div>

            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal text-white md:text-5xl lg:text-[58px]">
              Websites built for clarity, speed, and growth.
            </h1>

            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/52 md:text-base">
              We design and develop professional websites that look sharp, load
              fast, and guide visitors toward action. From landing pages to
              e-commerce and custom web applications, every page is built around
              business outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Start Project
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#services"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/85 transition hover:border-white/35 hover:text-white"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative min-h-[330px]">
            <div className="absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#111722] shadow-[0_0_60px_rgba(102,84,255,0.16)] md:size-[340px]" />
            <div className="absolute left-[9%] top-[12%] h-32 w-40 rounded-xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl md:h-36 md:w-48">
              <div className="mb-4 flex gap-2">
                <span className="size-2 rounded-full bg-[#ff3d4f]" />
                <span className="size-2 rounded-full bg-[#6654ff]" />
                <span className="size-2 rounded-full bg-white/40" />
              </div>
              <div className="h-3 w-24 rounded-full bg-white/75" />
              <div className="mt-4 h-2 w-32 rounded-full bg-white/20" />
              <div className="mt-2 h-2 w-24 rounded-full bg-white/15" />
              <div className="mt-6 h-8 w-20 rounded-full bg-[#6654ff]" />
            </div>
            <div className="absolute right-[7%] top-[30%] h-44 w-34 rounded-3xl border border-white/10 bg-[#151927] p-4 shadow-2xl md:h-52 md:w-42">
              <div className="mx-auto h-1.5 w-12 rounded-full bg-white/25" />
              <div className="mt-6 grid gap-3">
                <span className="h-14 rounded-xl bg-[#6654ff]/70 md:h-16" />
                <span className="h-3 rounded-full bg-white/40" />
                <span className="h-3 w-2/3 rounded-full bg-white/20" />
                <span className="h-8 rounded-full bg-white" />
              </div>
            </div>
            <div className="absolute bottom-[6%] left-[18%] grid size-28 place-items-center rounded-3xl bg-[#6654ff] shadow-[0_24px_70px_rgba(102,84,255,0.32)] md:size-34">
              <FiCode className="text-5xl text-white md:text-6xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#050506] px-4 py-16 md:px-8 lg:px-9 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#6654ff]">
              What We Build
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Website development services
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {offerCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-1 hover:border-white/20"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(card.icon)}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/48">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-8 lg:px-9 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#090b12_0%,#121720_42%,#060607_100%)]" />
        <div className="relative mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Our Approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Designed with purpose. Developed with care.
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              A professional website should feel simple to use, but that
              simplicity comes from thoughtful planning, careful interface
              design, and reliable development.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/45 p-5"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-white text-lg text-black">
                  {React.createElement(item.icon)}
                </span>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 md:px-8 lg:px-9 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              A clean process from idea to launch.
            </h2>
            <div className="grid gap-3">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3.5"
                >
                  <span className="font-mono text-xs font-bold text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-white/85">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-4 pb-20 md:px-8 lg:px-9 lg:pb-24"
      >
        <div className="mx-auto max-w-[1180px] rounded-xl border border-white/10 bg-[#121720] px-6 py-10 text-center md:px-10 md:py-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Ready for a website that works harder?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/48 md:text-base">
            Tell us what you want to build and we will help shape the right
            structure, design direction, and development plan.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default WebsiteDevelopment;
