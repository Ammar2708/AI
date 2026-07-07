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
  FiTarget,
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
    text: "Choose a clear website scope before work starts, with deliverables, assumptions, and timeline visible from day one.",
  },
  {
    icon: FiLayers,
    title: "Theme-based builds",
    text: "A practical route for businesses that want a reliable WordPress website without a fully custom product build.",
  },
  {
    icon: FiCode,
    title: "Custom page structure",
    text: "We shape page sections, templates, menus, and conversion paths around the package you choose.",
  },
  {
    icon: FiShoppingBag,
    title: "WooCommerce starts",
    text: "Launch a small online store with the core commerce pages, product setup, and checkout essentials in place.",
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
    icon: FiTarget,
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
    q: "What is a fixed-price website model?",
    a: "The scope and price are agreed before the project starts. As long as the scope does not change, the price stays the same.",
  },
  {
    q: "Are the prices fixed?",
    a: "Yes, for the approved scope. If new pages, features, integrations, or content work are added, we quote that work separately first.",
  },
  {
    q: "Is website content included?",
    a: "Final text, images, brand assets, and product content usually come from the client. Copywriting can be added as a separate service.",
  },
  {
    q: "Do you include premium themes and plugins?",
    a: "Setup is included when it is part of the package, but paid licenses and third-party subscriptions are billed separately.",
  },
  {
    q: "Can I choose between theme-based and custom WordPress development?",
    a: "Yes. Theme-based packages are faster and more predictable. Custom WordPress development is better when the design, structure, or functionality needs more flexibility.",
  },
];

const relatedServices = [
  { icon: FiMonitor, title: "WordPress development", href: "/services/wordpress-development" },
  { icon: FiCode, title: "Website development", href: "/services/website-development" },
  { icon: FiTarget, title: "Landing page", href: "/services/landing-page" },
  { icon: FiShoppingBag, title: "Ecommerce website", href: "/services" },
];

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-[#6654ff] via-[#c82bd8] to-[#ff0876] bg-clip-text text-transparent">
    {children}
  </span>
);

const Badge = ({ children }) => (
  <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
    <span className="h-2 w-2 rounded-full bg-[#6654ff]" />
    {children}
  </div>
);

const SectionShell = ({ id, sideLabel, children, className = "", dark = false }) => (
  <section
    id={id}
    className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${
      dark ? "bg-[#050816]" : "bg-black"
    } ${className}`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,8,118,0.22),transparent_22%),radial-gradient(circle_at_76%_16%,rgba(0,199,255,0.16),transparent_24%),radial-gradient(circle_at_70%_78%,rgba(102,84,255,0.18),transparent_24%)]" />
    <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[120px_1fr]">
      <div className="hidden lg:flex lg:items-start lg:justify-center">
        <span className="sticky top-32 rotate-180 text-sm font-semibold uppercase tracking-[0.5em] text-white/18 [writing-mode:vertical-rl]">
          {sideLabel}
        </span>
      </div>
      <div>{children}</div>
    </div>
  </section>
);

const BrowserMock = () => (
  <div className="relative mx-auto max-w-[460px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
    <div className="mb-4 flex items-center justify-between rounded-t-lg border-b border-white/10 pb-3">
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
        <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
        <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
      </div>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/45">wordpress package</span>
    </div>
    <div className="rounded-lg bg-black/45 p-4">
      <div className="mb-4 h-36 rounded-lg bg-[radial-gradient(circle_at_70%_20%,rgba(255,8,118,0.35),transparent_28%),linear-gradient(135deg,#121720,#050816)] p-5">
        <div className="mb-3 h-3 w-24 rounded-full bg-white/20" />
        <div className="mb-2 h-4 w-44 rounded-full bg-white" />
        <div className="h-4 w-32 rounded-full bg-[#ff0876]" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Scope", "Pages", "Launch"].map((item, index) => (
          <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#6654ff]/20 text-[#8d7dff]">
              {index + 1}
            </div>
            <p className="text-xs font-semibold text-white">{item}</p>
            <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </div>
    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#00c7ff]/20 blur-2xl" />
    <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-[#ff0876]/20 blur-2xl" />
  </div>
);

const PackageCard = ({ item }) => (
  <article
    className={`relative flex h-full flex-col rounded-xl border p-6 transition duration-300 hover:-translate-y-1 ${
      item.featured
        ? "border-[#6654ff]/60 bg-[#141b2a] shadow-[0_20px_70px_rgba(102,84,255,0.2)]"
        : "border-white/10 bg-[#121720]"
    }`}
  >
    {item.featured && (
      <span className="mb-5 w-fit rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#050816]">
        Popular
      </span>
    )}
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Starting from</p>
    <div className="mt-3 text-5xl font-black leading-none text-white sm:text-6xl">{item.price}</div>
    <h3 className="mt-8 text-3xl font-black text-white">{item.name}</h3>
    <p className="mt-3 text-lg leading-relaxed text-white/65">
      <strong className="text-white">Best for:</strong> {item.bestFor}
    </p>
    <a
      href="/services"
      className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-[#ff0876] hover:text-[#ff0876]"
    >
      Fixed price web development
      <FiArrowDown className="-rotate-90" />
    </a>
    <ul className="mt-8 space-y-4 text-white/70">
      {item.features.map((feature) => (
        <li key={feature} className="flex gap-3">
          <FiCheckCircle className="mt-1 shrink-0 text-[#8d7dff]" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </article>
);

const Fixed = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,8,118,0.28),transparent_22%),radial-gradient(circle_at_82%_26%,rgba(0,199,255,0.2),transparent_24%),radial-gradient(circle_at_55%_80%,rgba(102,84,255,0.18),transparent_26%),linear-gradient(135deg,#050816_0%,#071126_50%,#050816_100%)]" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge>Fixed price web development</Badge>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Fixed-price <GradientText>WordPress websites</GradientText> with clear scope
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/68">
              Build a professional WordPress website with a defined package, predictable budget, and a launch process that keeps pages, features, and responsibilities clear.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-[#050816] transition hover:bg-[#ff0876] hover:text-white"
              >
                Fixed price web development
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-base font-bold text-white transition hover:border-white/40"
              >
                View packages
                <FiArrowDown />
              </a>
            </div>
          </div>
          <BrowserMock />
        </div>
      </section>

      <SectionShell id="packages" sideLabel="packages" className="pt-10">
        <div className="mb-14 max-w-3xl">
          <Badge>WordPress packages</Badge>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Choose the fixed scope that matches your <GradientText>website stage</GradientText>
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/62">
            These packages are starting points for common WordPress builds. Each proposal confirms the final scope before work begins.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {packageCards.map((item) => (
            <PackageCard key={item.name} item={item} />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="services" sideLabel="services" dark>
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Fixed-price web development for <GradientText>WordPress</GradientText>
          </h2>
          <p className="text-lg leading-8 text-white/62">
            The page is designed around WordPress delivery: package clarity, editable content, responsive layouts, and a launch checklist that keeps the project practical.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {serviceCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/10 bg-black/35 p-7 transition hover:-translate-y-1 hover:border-[#6654ff]/50">
              <card.icon className="mb-8 text-4xl text-[#ff0876]" />
              <h3 className="text-2xl font-black">{card.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{card.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="included" sideLabel="included">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge>Included in every package</Badge>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              The essentials behind a reliable <GradientText>WordPress launch</GradientText>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Every package includes the practical setup work a small business website needs before it goes live.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-[#121720] p-6">
                <item.icon className="mb-6 text-3xl text-[#8d7dff]" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="scope" sideLabel="scope" dark>
        <div className="mb-14 max-w-3xl">
          <Badge>Scope notes</Badge>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            What is handled <GradientText>outside</GradientText> the fixed package
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {scopeNotes.map((item) => (
            <article key={item.title} className="rounded-xl border border-white/10 bg-black/35 p-7">
              <item.icon className="mb-7 text-4xl text-[#ff0876]" />
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-8 text-white/62">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="process" sideLabel="process">
        <div className="mb-12 max-w-4xl">
          <Badge>Our process</Badge>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            How the fixed-price <GradientText>WordPress process</GradientText> works
          </h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {process.map((item, index) => (
            <details key={item.title} className="group py-7" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-2xl font-black text-white">
                <span>
                  <span className="mr-4 text-white/45">{String(index + 1).padStart(2, "0")}.</span>
                  {item.title}
                </span>
                <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-5 max-w-4xl pl-0 text-lg leading-8 text-white/62 sm:pl-16">{item.text}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="proof" sideLabel="proof" dark>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>Why F5 Studio</Badge>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              A practical partner for <GradientText>fixed-price WordPress websites</GradientText>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Fixed-price work depends on knowing where a package should end and where custom estimation should begin. We keep that line visible so your budget stays easier to plan.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#121720] p-8">
            <div className="mb-8 text-6xl font-black text-white">Clutch</div>
            <div className="mb-8 text-3xl text-[#ff3b30]">★★★★★</div>
            <p className="text-xl leading-9 text-white/78">
              "F5 Studio's portfolio and reviews from prior clients made them stand out as a top choice. They are creative, offer fantastic communication, and consistently deliver high-quality results."
            </p>
            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-xl font-bold text-white">Jerome O'Grady</p>
              <p className="mt-2 text-white/55">President, Samplefye, Inc.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="related" sideLabel="related">
        <div className="mb-14">
          <Badge>Related services</Badge>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            More <GradientText>WordPress and web development</GradientText> services
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-white/10 bg-[#121720] p-6 transition hover:-translate-y-1 hover:border-[#ff0876]/60"
            >
              <item.icon className="mb-10 text-4xl text-[#ff0876]" />
              <div className="flex items-center justify-between gap-4 text-xl font-black">
                {item.title}
                <FiArrowDown className="-rotate-90 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq" sideLabel="FAQ" dark>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Frequently asked <GradientText>questions</GradientText>
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, index) => (
              <details key={item.q} className="group py-7" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-2xl font-black">
                  {item.q}
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-5 text-lg leading-8 text-white/62">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <section className="relative overflow-hidden bg-black px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,199,255,0.16),transparent_24%),radial-gradient(circle_at_62%_56%,rgba(255,8,118,0.18),transparent_22%)]" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            Discuss your fixed-price <GradientText>WordPress website</GradientText>
          </h2>
          <a
            href="/services"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#050816] transition hover:bg-[#ff0876] hover:text-white"
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
