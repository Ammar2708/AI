import React from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiCreditCard,
  FiDatabase,
  FiGrid,
  FiLayers,
  FiLock,
  FiMonitor,
  FiPackage,
  FiSearch,
  FiShield,
  FiShoppingCart,
  FiTarget,
  FiTruck,
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
      <div className="absolute left-[7%] top-[18%] size-52 rounded-full bg-[#1dc8ff]/18 blur-3xl" />
      <div className="absolute right-[8%] top-[12%] size-60 rounded-full bg-[#ff2d78]/16 blur-3xl" />
      <div className="absolute bottom-[-7rem] left-[40%] size-56 rounded-full bg-[#6654ff]/12 blur-3xl" />
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

const focusItems = [
  {
    icon: FiTarget,
    title: "Business model alignment",
    text: "We translate your catalog, pricing, fulfillment, margins, and marketing plans into practical store requirements.",
  },
  {
    icon: FiShoppingCart,
    title: "Store UX and content",
    text: "Product pages, filters, comparison paths, trust cues, and cart flows are planned so shoppers can decide quickly.",
  },
  {
    icon: FiCreditCard,
    title: "Checkout and payments",
    text: "We reduce avoidable checkout friction and prepare payment, tax, shipping, and confirmation flows with care.",
  },
  {
    icon: FiCode,
    title: "Maintainable setup",
    text: "Platforms, plugins, and custom components are chosen around the way your team will manage the store after launch.",
  },
  {
    icon: FiSearch,
    title: "SEO-aware build",
    text: "Navigation, metadata, schema basics, product structure, and performance targets are considered during development.",
  },
  {
    icon: FiBarChart2,
    title: "Reporting and iteration",
    text: "Analytics, conversion events, and support workflows help you understand what is working and what should improve.",
  },
];

const process = [
  {
    title: "Discovery",
    text: "We review your products, audiences, operations, existing data, competitors, and goals before choosing the store structure.",
  },
  {
    title: "Catalog and UX",
    text: "Categories, product templates, filters, search, cart behavior, and checkout steps are mapped into a clean buying journey.",
  },
  {
    title: "Visual design",
    text: "We design a store interface that supports your brand while keeping product information, trust signals, and actions easy to scan.",
  },
  {
    title: "Development and QA",
    text: "The site is built responsively with integrations, forms, performance checks, security basics, and cross-device testing.",
  },
  {
    title: "Launch and support",
    text: "We help prepare launch checks, handover notes, tracking, and post-launch improvements so the store can keep evolving.",
  },
];

const faqs = [
  {
    question: "Which e-commerce platforms do you work with?",
    answer:
      "We commonly work with WordPress and WooCommerce, and we can also assess custom or other platform options when the catalog, integrations, or roadmap needs them.",
  },
  {
    question: "Can you redesign an existing online store?",
    answer:
      "Yes. We can review the current store, identify UX, technical, content, and performance issues, then rebuild or improve the parts that affect sales and management.",
  },
  {
    question: "Do you handle payment, shipping, and CRM integrations?",
    answer:
      "Yes, when access and platform support allow it. We plan integrations for payments, shipping, inventory, CRM, analytics, pixels, and email marketing tools.",
  },
  {
    question: "Will the store be easy to manage after launch?",
    answer:
      "That is one of the goals. We structure products, pages, reusable sections, and admin workflows so your team can update the store without unnecessary complexity.",
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
    icon: FiGrid,
    title: "Landings and promo sites",
    to: "/services/landing-page-development",
  },
  {
    icon: FiZap,
    title: "Websites for startups",
    to: "/services/startup-website-development",
  },
];

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[470px]">
    <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#1dc8ff]/25 blur-3xl" />
    <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-[#ff2d78]/25 blur-3xl" />
    <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
      <img
        src="/imgi_61_ecommerce-mobile-product-page-optimization.jpg.webp"
        alt="Mobile e-commerce product page with checkout elements"
        className="h-[520px] w-full rounded-[1.5rem] object-cover"
      />
      <div className="absolute left-7 top-7 rounded-2xl border border-white/15 bg-[#071126]/75 px-4 py-3 backdrop-blur">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
          checkout
        </p>
        <p className="mt-1 text-2xl font-black text-white">Fewer steps</p>
      </div>
      <div className="absolute bottom-7 right-7 rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-[#33384f] shadow-xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8c92aa]">
          store health
        </p>
        <p className="mt-1 flex items-center gap-2 text-2xl font-black">
          98% <FiTrendingIcon />
        </p>
      </div>
    </div>
  </div>
);

const FiTrendingIcon = () => (
  <span className="inline-grid size-8 place-items-center rounded-full bg-[#1dc8ff]/15 text-[#0897c9]">
    <FiArrowUpRight />
  </span>
);

const Eco = () => {
  return (
    <main className="bg-white pt-28">
      <section className="relative overflow-hidden bg-[#071126] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-[#1dc8ff]/18 blur-3xl" />
          <div className="absolute right-[-7rem] top-20 h-96 w-96 rounded-full bg-[#ff2d78]/18 blur-3xl" />
          <div className="absolute left-[44%] bottom-[-8rem] h-72 w-72 rounded-full bg-[#6654ff]/16 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1180px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <Badge>E-commerce development</Badge>
            <h1 className="mt-8 max-w-[820px] text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Online stores built for <GradientText>confident buying</GradientText>.
            </h1>
            <p className="mt-7 max-w-[690px] text-xl leading-9 text-white/70">
              We design and develop e-commerce websites around your catalog,
              checkout, integrations, and day-to-day store management so the
              store is easier to sell from and easier to run.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#071126] transition hover:bg-white/85"
              >
                Discuss your project <FiArrowUpRight />
              </a>
              <a
                href="#how-we-work"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                See process <FiArrowDown />
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="strategy" label="our expertise" dark>
        <div className="mx-auto max-w-[860px]">
          <Badge>store strategy</Badge>
          <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
            Strategy-first <GradientText>e-commerce website</GradientText>{" "}
            development
          </h2>
          <p className="mt-7 text-lg leading-8 text-white/72">
            E-commerce website development is not just selecting a theme and
            adding products. We start with your business model, margins,
            operations, traffic sources, and customer objections, then turn them
            into product categories, checkout paths, and UX flows.
          </p>
          <p className="mt-6 text-lg leading-8 text-white/72">
            That lets us choose the right platform and integrations, avoid
            fragile workarounds, and design a store that supports marketing,
            logistics, and customer service instead of slowing them down.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-[960px] overflow-hidden rounded-[2rem] border border-white/12">
          <img
            src="/imgi_26_ecommerce-checkout-flow-planning.jpg.webp"
            alt="E-commerce customer journey planning board"
            className="h-[520px] w-full object-cover"
          />
        </div>
      </SectionShell>

      <SectionShell id="focus" label="why us">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge light>what matters</Badge>
            <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
              What we focus on in <GradientText>e-commerce development</GradientText>
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#596176]">
              We focus on clear process, practical UX decisions, stable
              implementation, and the technical details that affect how an
              online store works after launch.
            </p>
          </div>

          <div className="grid gap-6">
            {focusItems.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-2xl border border-[#e5ebf6] bg-white/80 p-6 shadow-sm sm:grid-cols-[64px_1fr]"
              >
                <span className="grid size-14 place-items-center rounded-2xl border border-[#dfe6f4] text-2xl text-[#c235d8]">
                  <item.icon />
                </span>
                <div>
                  <h3 className="text-2xl font-black text-[#33384f]">{item.title}</h3>
                  <p className="mt-3 text-lg leading-8 text-[#596176]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="platforms" label="how we work">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-[#e5ebf6]">
            <img
              src="/imgi_62_ecommerce-development-platform-architecture.jpg.webp"
              alt="E-commerce platform and integration architecture"
              className="h-[620px] w-full object-cover"
            />
          </div>
          <div>
            <Badge light>platforms</Badge>
            <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
              Platforms and <GradientText>integrations</GradientText>
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#596176]">
              We help you choose a platform and architecture that fit your
              budget, catalog, and roadmap. For many projects this means
              WooCommerce on WordPress; for others, we assess whether another
              platform or a custom approach is safer.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [FiCreditCard, "Payments"],
                [FiTruck, "Shipping"],
                [FiPackage, "Inventory"],
                [FiDatabase, "CRM data"],
                [FiBarChart2, "Analytics"],
                [FiLock, "Security basics"],
              ].map(([IconComponent, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-[#e5ebf6] bg-white p-4 font-bold text-[#33384f]"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-[#f4f7ff] text-[#c235d8]">
                    <IconComponent />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="how-we-work" label="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <Badge>workflow</Badge>
            <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
              How we build your <GradientText>e-commerce website</GradientText>
            </h2>
          </div>
          <div className="border-y border-white/12">
            {process.map((item, index) => (
              <details
                key={item.title}
                className="group border-b border-white/12 py-8 last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-2xl font-black">
                  <span>
                    {String(index + 1).padStart(2, "0")}. {item.title}
                  </span>
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-5 max-w-[760px] text-lg leading-8 text-white/72">
                  {item.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="proof" label="evidence" dark>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>proof points</Badge>
            <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
              Reliable delivery for <GradientText>stores that grow</GradientText>
            </h2>
            <p className="mt-7 text-lg leading-8 text-white/72">
              We bring website strategy, UX/UI, development, technical SEO,
              analytics, and support into one workflow, so your store does not
              launch as a collection of disconnected parts.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Catalog", "Clear categories, templates, filters, and product content."],
              ["Checkout", "Payment, shipping, trust, and cart details planned early."],
              ["Tracking", "Events and analytics configured around useful decisions."],
              ["Support", "Post-launch improvements and handover built into the plan."],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-6"
              >
                <FiCheckCircle className="text-3xl text-[#1dc8ff]" />
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/64">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="services" label="related services">
        <h2 className="max-w-[900px] text-4xl font-black leading-tight md:text-6xl">
          Related <GradientText>web development</GradientText> services
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service) => (
            <a
              key={service.title}
              href={service.to}
              className="group rounded-2xl border border-[#e5ebf6] bg-white/80 p-7 transition hover:-translate-y-1 hover:border-[#c235d8]/50 hover:shadow-xl hover:shadow-[#c235d8]/10"
            >
              <service.icon className="text-3xl text-[#c235d8]" />
              <h3 className="mt-12 flex items-center justify-between gap-4 text-2xl font-black text-[#33384f]">
                {service.title}
                <FiArrowUpRight className="shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
            </a>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq" label="FAQ" dark>
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            E-commerce website development <GradientText>FAQ</GradientText>
          </h2>
          <div className="border-y border-white/12">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-white/12 py-8 last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-2xl font-black">
                  <span>{item.question}</span>
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-5 max-w-[760px] text-lg leading-8 text-white/72">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="contact" label="contact">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Discuss your <GradientText>e-commerce website</GradientText> project
          </h2>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#071126] px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#071126] transition hover:bg-[#071126] hover:text-white"
          >
            Discuss your project <FiArrowUpRight />
          </a>
        </div>
      </SectionShell>
    </main>
  );
};

export default Eco;
