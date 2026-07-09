import React from "react";
import {
  FiArrowDown,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiEdit3,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiSliders,
  FiZap,
} from "react-icons/fi";

const packageCards = [
  {
    name: "Launch Page",
    price: "$1,500",
    bestFor: "focused offers, campaigns, and simple launches",
    features: [
      "1 custom landing page",
      "Up to 10 sections",
      "Lead-focused page structure",
      "Contact form setup",
      "Responsive WordPress build",
      "Basic on-page SEO setup",
      "Typical timeline: 1-2 weeks",
    ],
  },
  {
    name: "Business Website",
    price: "$4,000",
    bestFor: "service businesses that need a complete website",
    featured: true,
    features: [
      "Up to 10 pages",
      "Up to 5 page templates",
      "Core company pages included",
      "Blog structure included",
      "Easy content editing",
      "Performance and security setup",
      "Typical timeline: 2-4 weeks",
    ],
  },
  {
    name: "Online Store",
    price: "$6,500",
    bestFor: "small WooCommerce stores with clear scope",
    features: [
      "Up to 10 content pages",
      "WooCommerce store setup",
      "Shop, cart, checkout, and account pages",
      "Up to 20 products added",
      "Payment and shipping setup",
      "Store-ready SEO basics",
      "Typical timeline: 3-5 weeks",
    ],
  },
];

const serviceCards = [
  {
    icon: FiPackage,
    title: "Fixed WordPress packages",
    text: "Choose a defined website scope before work starts, with deliverables, assumptions, and timeline visible from day one.",
    href: "#packages",
  },
  {
    icon: FiLayers,
    title: "Theme-based builds",
    text: "A practical route for businesses that want a reliable WordPress website without a fully custom product build.",
    href: "/services/wordpress-development",
  },
  {
    icon: FiCode,
    title: "Custom page structure",
    text: "We shape page sections, templates, menus, and conversion paths around the package you choose.",
    href: "/services/website-development",
  },
  {
    icon: FiShoppingBag,
    title: "WooCommerce starts",
    text: "Launch a small online store with the core commerce pages, product setup, and checkout essentials in place.",
    href: "/services/ecommerce-development",
  },
];

const benefits = [
  {
    icon: FiSliders,
    title: "Predictable scope",
    text: "The package defines pages, templates, features, revision limits, and launch support before the build begins.",
  },
  {
    icon: FiEdit3,
    title: "Easy editing",
    text: "Your team can update common content areas, images, and basic page copy after launch.",
  },
  {
    icon: FiShield,
    title: "Launch-ready setup",
    text: "Responsive checks, performance basics, security setup, forms, and SEO foundations are included.",
  },
  {
    icon: FiZap,
    title: "Clear change control",
    text: "If the project grows beyond the agreed package, the extra work is estimated separately before it is added.",
  },
];

const scopeNotes = [
  {
    icon: FiEdit3,
    title: "Copywriting and content",
    text: "Website copy, content strategy, and content production are scoped separately unless they are included in the proposal.",
  },
  {
    icon: FiPackage,
    title: "Paid licenses",
    text: "Premium themes, plugins, stock assets, and third-party tools are billed separately when required.",
  },
  {
    icon: FiZap,
    title: "Advanced functionality",
    text: "Portals, calculators, booking engines, CRM connections, and custom integrations need separate estimation.",
  },
  {
    icon: FiSearch,
    title: "Ongoing marketing",
    text: "SEO campaigns, content marketing, ads, and long-term website maintenance can be added after launch.",
  },
];

const process = [
  {
    title: "Discovery and fit",
    text: "We review your goals, website type, content readiness, timeline, and must-have features to confirm whether a fixed-price WordPress package fits.",
  },
  {
    title: "Scope and package",
    text: "We recommend the closest package, list what is included, and call out anything that should be estimated separately.",
  },
  {
    title: "UX structure",
    text: "We plan pages, sections, menus, forms, and conversion paths so the site is clear before visual design starts.",
  },
  {
    title: "Design and build",
    text: "We adapt the WordPress theme, create the agreed pages and templates, and configure the core plugins and settings.",
  },
  {
    title: "QA and launch",
    text: "We test responsive layouts, forms, performance basics, browser behavior, and launch settings before handoff.",
  },
];

const faqs = [
  {
    question: "What is a fixed-price website model?",
    answer:
      "The scope and price are agreed before the project starts. As long as the scope does not change, the price stays the same.",
  },
  {
    question: "Are the prices fixed?",
    answer:
      "Yes, for the approved scope. If new pages, features, integrations, or content work are added, we quote that work separately first.",
  },
  {
    question: "Is website content included?",
    answer:
      "Final text, images, brand assets, and product content usually come from the client. Copywriting can be added as a separate service.",
  },
  {
    question: "Do you include premium themes and plugins?",
    answer:
      "Setup is included when it is part of the package, but paid licenses and third-party subscriptions are billed separately.",
  },
  {
    question: "Can I choose between theme-based and custom WordPress development?",
    answer:
      "Yes. Theme-based packages are faster and more predictable. Custom WordPress development is better when the design, structure, or functionality needs more flexibility.",
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

const SectionShell = ({ id, sideLabel, dark = false, children, className = "" }) => (
  <section
    id={id}
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
  <div className="relative mx-auto max-w-[460px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(102,84,255,0.2)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="h-28 rounded-xl bg-[radial-gradient(circle_at_22%_28%,rgba(255,45,120,0.42),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(15,194,255,0.32),transparent_34%),linear-gradient(135deg,#060714,#151927)] p-5 md:h-32">
        <div className="h-5 w-44 rounded-full bg-white/85" />
        <div className="mt-4 h-3 w-64 max-w-full rounded-full bg-white/30" />
        <div className="mt-2 h-3 w-48 rounded-full bg-white/20" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Scope", "Pages", "SEO"].map((item) => (
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

const PackageCard = ({ item }) => (
  <article
    className={`rounded-xl border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 ${
      item.featured
        ? "border-[#6654ff]/50 bg-[#151b2a]"
        : "border-white/10 bg-[#121720]"
    }`}
  >
    {item.featured && (
      <span className="mb-5 inline-flex rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black">
        Popular
      </span>
    )}
    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
      Starting from
    </p>
    <p className="mt-3 text-4xl font-semibold leading-none text-white md:text-5xl">
      {item.price}
    </p>
    <h3 className="mt-7 text-xl font-semibold text-white">{item.name}</h3>
    <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
      <span className="text-white/75">Best for:</span> {item.bestFor}
    </p>
    <a
      href="/contact"
      className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
    >
      Fixed price web development
      <FiArrowDown className="-rotate-90" />
    </a>
    <ul className="mt-7 space-y-3">
      {item.features.map((feature) => (
        <li key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-white/50">
          <FiCheckCircle className="mt-1 shrink-0 text-white/70" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </article>
);

const Fixed = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Fixed Price WordPress</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Fixed-price <GradientText>WordPress websites</GradientText> with clear scope.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              Build a professional WordPress website with a defined package,
              predictable budget, editable content, and a launch process that
              keeps pages, features, and responsibilities clear.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Fixed price web development
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#packages"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View packages
              </a>
            </div>
          </div>
          <BrowserMock />
        </div>
      </section>

      <SectionShell id="services" sideLabel="services" className="pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Badge>What we build</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              WordPress <GradientText>package services</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              These packages keep WordPress delivery practical: clear scope,
              editable pages, sensible plugin choices, and a launch checklist
              that helps avoid budget surprises.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50 focus:outline-none focus:ring-2 focus:ring-[#6654ff]/70"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(card.icon)}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {card.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="packages" sideLabel="packages" dark>
        <div className="mb-10 max-w-3xl">
          <Badge>Website packages</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Choose the fixed scope that matches your <GradientText>website stage</GradientText>
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Each package gives you a starting point. The final proposal confirms
            pages, features, content responsibilities, and any add-ons before
            work begins.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {packageCards.map((item) => (
            <PackageCard key={item.name} item={item} />
          ))}
        </div>
      </SectionShell>

      <SectionShell sideLabel="included">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Included</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Essentials behind a reliable <GradientText>WordPress launch</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Every fixed-price package includes the setup work a small business
              website needs before it goes live.
            </p>
          </div>
          <div className="grid gap-5">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-xl border border-white/10 bg-[#121720] p-5 md:grid-cols-[auto_1fr] md:p-6"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white text-lg text-black">
                  {React.createElement(item.icon)}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="scope" dark>
        <div className="mb-10 max-w-3xl">
          <Badge>Scope notes</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            What is handled <GradientText>outside</GradientText> the fixed package
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {scopeNotes.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-black/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                {React.createElement(item.icon)}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-white/45">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell sideLabel="process">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How the fixed-price <GradientText>WordPress process</GradientText> works
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

      <SectionShell sideLabel="technical" dark>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_60_opai-36.jpg"
              alt=""
              aria-hidden="true"
              className="h-[280px] w-full object-cover opacity-85 md:h-[380px]"
            />
          </div>
          <div>
            <Badge>WordPress foundations</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built for editing, speed, SEO, and maintenance.
            </h2>
            <p className="mt-6 text-sm font-semibold leading-7 text-white/48 md:text-base">
              Fixed-price does not mean fragile. We still pay attention to
              responsive setup, caching, image handling, plugin choices,
              schema-ready page structure, and admin workflows.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Responsive layouts", "Reusable sections", "Core SEO setup", "Launch QA"].map((item) => (
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

      <SectionShell sideLabel="faq">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Fixed-price WordPress <GradientText>FAQ</GradientText>
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
          <FiMonitor className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your fixed-price <GradientText>WordPress website</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your website goals, content readiness, and must-have features.
            We will help map the right fixed-price WordPress package.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Fixed price web development
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Fixed;
