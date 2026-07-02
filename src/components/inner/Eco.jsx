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
  FiShoppingCart,
  FiTarget,
  FiTruck,
  FiZap,
} from "react-icons/fi";

const GradientText = ({ children }) => (
  <span className="bg-[linear-gradient(90deg,#8b5cf6_0%,#d946ef_45%,#ff2d78_100%)] bg-clip-text text-transparent">
    {children}
  </span>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
    <span className="size-2 rounded-full bg-[#6654ff]" />
    {children}
  </span>
);

const SectionShell = ({ id, label, dark = false, children, className = "" }) => (
  <section
    className={`relative overflow-hidden px-4 py-16 text-white md:px-8 lg:px-9 lg:py-20 ${className} ${
      dark ? "bg-[#050816]" : "bg-black"
    }`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_30%,rgba(102,84,255,0.22),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(15,194,255,0.16),transparent_32%),radial-gradient(circle_at_52%_80%,rgba(255,45,120,0.14),transparent_30%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-xs font-bold uppercase tracking-[0.32em] text-white/18 lg:block">
      {label}
    </p>
    <div id={id} className="relative mx-auto max-w-[1180px]">{children}</div>
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
  <div className="relative mx-auto max-w-[460px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(102,84,255,0.2)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1020]">
        <img
          src="/imgi_61_ecommerce-mobile-product-page-optimization.jpg.webp"
          alt="Mobile e-commerce product page with checkout elements"
          className="h-[260px] w-full object-cover opacity-80 md:h-[320px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
            checkout
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            Fewer steps to purchase
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Catalog", "Cart", "Tracking"].map((item) => (
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

const Eco = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>E-commerce development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Online stores built for <GradientText>confident buying</GradientText>.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              We design and develop e-commerce websites around your catalog,
              checkout, integrations, and day-to-day store management so the
              store is easier to sell from and easier to run.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Hire us <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#how-we-work"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                See process <FiArrowDown />
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="strategy" label="our expertise" dark className="pt-10">
        <div className="mx-auto max-w-[860px]">
          <Badge>store strategy</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Strategy-first <GradientText>e-commerce website</GradientText>{" "}
            development
          </h2>
          <p className="mt-5 text-sm font-semibold leading-7 text-white/45 md:text-base">
            E-commerce website development is not just selecting a theme and
            adding products. We start with your business model, margins,
            operations, traffic sources, and customer objections, then turn them
            into product categories, checkout paths, and UX flows.
          </p>
          <p className="mt-6 text-sm font-semibold leading-7 text-white/45 md:text-base">
            That lets us choose the right platform and integrations, avoid
            fragile workarounds, and design a store that supports marketing,
            logistics, and customer service instead of slowing them down.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-[960px] overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
          <img
            src="/imgi_26_ecommerce-checkout-flow-planning.jpg.webp"
            alt="E-commerce customer journey planning board"
            className="h-[320px] w-full object-cover opacity-85 md:h-[420px]"
          />
        </div>
      </SectionShell>

      <SectionShell id="focus" label="why us">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>what matters</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What we focus on in <GradientText>e-commerce development</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              We focus on clear process, practical UX decisions, stable
              implementation, and the technical details that affect how an
              online store works after launch.
            </p>
          </div>

          <div className="grid gap-6">
            {focusItems.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-xl border border-white/10 bg-black/40 p-5 md:grid-cols-[auto_1fr] md:p-6"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white text-lg text-black">
                  <item.icon />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="platforms" label="how we work">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_62_ecommerce-development-platform-architecture.jpg.webp"
              alt="E-commerce platform and integration architecture"
              className="h-[320px] w-full object-cover opacity-85 md:h-[420px]"
            />
          </div>
          <div>
            <Badge>platforms</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Platforms and <GradientText>integrations</GradientText>
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              We help you choose a platform and architecture that fit your
              budget, catalog, and roadmap. For many projects this means
              WooCommerce on WordPress; for others, we assess whether another
              platform or a custom approach is safer.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [<FiCreditCard key="payments" />, "Payments"],
                [<FiTruck key="shipping" />, "Shipping"],
                [<FiPackage key="inventory" />, "Inventory"],
                [<FiDatabase key="crm-data" />, "CRM data"],
                [<FiBarChart2 key="analytics" />, "Analytics"],
                [<FiLock key="security-basics" />, "Security basics"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70"
                >
                  <span className="text-white">
                    {icon}
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="how-we-work" label="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>workflow</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How we build your <GradientText>e-commerce website</GradientText>
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {process.map((item, index) => (
              <details
                key={item.title}
                className="group py-5"
                open={index === 0}
              >
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

      <SectionShell id="proof" label="evidence" dark>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>proof points</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Reliable delivery for <GradientText>stores that grow</GradientText>
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/45 md:text-base">
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
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <FiCheckCircle className="text-2xl text-white" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="services" label="related services">
        <h2 className="max-w-[900px] text-3xl font-semibold leading-tight md:text-5xl">
          Related <GradientText>web development</GradientText> services
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service) => (
            <a
              key={service.title}
              href={service.to}
              className="group rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                <service.icon />
              </span>
              <h3 className="mt-12 flex items-center justify-between gap-4 text-xl font-semibold text-white">
                {service.title}
                <FiArrowUpRight className="shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
            </a>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq" label="FAQ" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            E-commerce website development <GradientText>FAQ</GradientText>
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group py-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold leading-tight md:text-xl">
                  <span>{item.question}</span>
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
          <FiShoppingCart className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>e-commerce website</GradientText> project
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your catalog, store goals, and operational needs. We will help
            map the right e-commerce structure and development plan.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Get in touch <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Eco;
