import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCpu,
  FiEye,
  FiFileText,
  FiLayers,
  FiMonitor,
  FiMousePointer,
  FiPenTool,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const scopeItems = [
  {
    icon: FiBarChart2,
    title: "Analytics and funnel audit",
    text: "We review traffic, events, funnels, forms, checkout paths, and reporting gaps so decisions start with cleaner data.",
    to: "#cro-scope",
  },
  {
    icon: FiMousePointer,
    title: "Journey and friction mapping",
    text: "We look at the moments where visitors hesitate, miss key information, leave the page, or choose the wrong next step.",
    to: "/services/ui-ux-design",
  },
  {
    icon: FiTarget,
    title: "Experiment roadmap",
    text: "We turn findings into focused hypotheses, success metrics, priorities, and test plans your team can actually ship.",
    to: "#cro-process",
  },
  {
    icon: FiMonitor,
    title: "Landing page improvement",
    text: "We improve layout, messaging, calls to action, trust signals, and page flow so high-intent visitors have a clearer path.",
    to: "/services/landing-page-development",
  },
];

const benefits = [
  {
    icon: FiTrendingUp,
    title: "More value from existing traffic",
    text: "Conversion marketing helps SEO, content, and paid campaigns work harder by improving what happens after the click.",
    to: "/services/content-marketing",
  },
  {
    icon: FiEye,
    title: "Evidence over opinions",
    text: "Instead of debating button colors in isolation, we use analytics, behavior signals, and tests to show what improves action.",
    to: "#cro-scope",
  },
  {
    icon: FiZap,
    title: "Faster learning, lower risk",
    text: "Controlled tests and scoped improvements let your team learn without betting everything on one large redesign.",
    to: "#cro-process",
  },
  {
    icon: FiUsers,
    title: "Aligned marketing, product, and dev",
    text: "Recommendations come with context, priority, and measurement notes so everyone understands why a change matters.",
    to: "/process",
  },
];

const process = [
  {
    title: "Define goals",
    text: "We clarify your key conversions, business goals, user segments, and the metrics that matter before suggesting changes.",
  },
  {
    title: "Map journeys",
    text: "We review landing pages, product pages, forms, checkout, lead flows, and supporting touchpoints to find friction.",
  },
  {
    title: "Prioritize tests",
    text: "Ideas are ranked by impact, effort, confidence, traffic level, and whether your team can build and measure them cleanly.",
  },
  {
    title: "Design and implement",
    text: "We shape UX, copy, layout, and tracking recommendations into practical tasks for designers, developers, and marketers.",
  },
  {
    title: "Measure and iterate",
    text: "Each test is reviewed against the agreed metric, then converted into the next decision: keep, adjust, expand, or stop.",
  },
];

const faqs = [
  {
    question: "When does it make sense to invest in conversion marketing?",
    answer:
      "It makes sense when you already have meaningful traffic, clear business goals, and pages or funnels where results feel lower than they should be.",
  },
  {
    question: "How long does a CRO engagement usually take?",
    answer:
      "A useful audit can start quickly, but meaningful CRO is usually a monthly process because each improvement needs planning, implementation, traffic, and review.",
  },
  {
    question: "How do you decide what to test first?",
    answer:
      "We prioritize the highest-impact journeys first: pages with strong traffic, clear commercial value, obvious friction, or major reporting gaps.",
  },
  {
    question: "Do we need our own developers and designers?",
    answer:
      "Not always. We can provide UX, copy, design, and implementation guidance, then work with your team or help scope the changes for development.",
  },
  {
    question: "Can we start with a CRO audit?",
    answer:
      "Yes. A focused audit is often the best first step because it gives your team a clear view of tracking issues, journey problems, and test opportunities.",
  },
];

const relatedServices = [
  {
    title: "Landing page",
    icon: FiFileText,
    to: "/services/landing-page-development",
  },
  { title: "UX and UI", icon: FiLayers, to: "/services/ui-ux-design" },
  {
    title: "Web design services",
    icon: FiMonitor,
    to: "/services/web-design-service",
  },
  {
    title: "Content marketing",
    icon: FiPenTool,
    to: "/services/content-marketing",
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

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[460px] rounded-xl border border-white/10 bg-[#111827] p-4 shadow-[0_30px_90px_rgba(102,84,255,0.2)]">
    <div className="flex items-center gap-2 border-b border-white/10 pb-4">
      <span className="size-3 rounded-full bg-[#ff4d6d]" />
      <span className="size-3 rounded-full bg-[#facc15]" />
      <span className="size-3 rounded-full bg-[#22c55e]" />
      <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
    </div>
    <div className="grid gap-4 pt-5">
      <div className="rounded-xl bg-[radial-gradient(circle_at_22%_28%,rgba(255,45,120,0.42),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(15,194,255,0.32),transparent_34%),linear-gradient(135deg,#060714,#151927)] p-5">
        <div className="grid gap-4">
          <div className="h-5 w-44 rounded-full bg-white/85" />
          <div className="grid gap-2">
            <div className="h-4 w-full rounded-full bg-white/20">
              <div className="h-4 w-4/5 rounded-full bg-[#6654ff]" />
            </div>
            <div className="h-4 w-full rounded-full bg-white/20">
              <div className="h-4 w-3/5 rounded-full bg-[#0fc2ff]" />
            </div>
            <div className="h-4 w-full rounded-full bg-white/20">
              <div className="h-4 w-2/5 rounded-full bg-[#ff2d78]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg border border-white/10 bg-white/12" />
            <div className="h-16 rounded-lg border border-white/10 bg-white/12" />
            <div className="h-16 rounded-lg border border-white/10 bg-white/12" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["Funnel", "Tests", "Signals", "Revenue"].map((item) => (
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

const CardLink = ({ to, className, children }) => {
  const isHash = to?.startsWith("#");

  if (isHash) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

const Conversion = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Conversion Marketing</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Conversion marketing that turns traffic into action.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              Improve the journeys that matter most: landing pages, forms,
              product pages, sign-up flows, and checkout. We use analytics,
              behavior signals, and focused experiments to help visitors take
              the next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Conversion marketing
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="#cro-scope"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell sideLabel="scope" dark className="pt-10" id="cro-scope">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>What we improve</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              CRO work that stays <GradientText>measurable</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              The point is not random tweaks. The point is a clear improvement
              system: find friction, decide what matters, test carefully, and
              keep the learnings useful for your team.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {scopeItems.map((item) => (
              <CardLink
                key={item.title}
                to={item.to}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50 focus:outline-none focus:ring-2 focus:ring-[#6654ff]/70"
              >
                <span className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(item.icon)}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {item.text}
                </p>
              </CardLink>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="context">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>Best fit</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              When CRO makes the <GradientText>most impact</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Conversion optimization works best when you already have traffic
              and clear business goals, but visitors are not moving through the
              journey as expected. We help turn that uncertainty into a focused
              improvement roadmap.
            </p>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              That can mean sharper messaging, better page structure, clearer
              forms, stronger proof, cleaner tracking, or smaller UX changes
              that make the next step easier to choose.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(102,84,255,0.16)]">
            <img
              src="/imgi_95_conversion-marketing-cro-dashboard-review-1536x864.jpg.webp"
              alt="Conversion marketing dashboard review"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="benefits" id="cro-benefits">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What you gain from <GradientText>structured CRO</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Each experiment is designed to remove friction, protect revenue,
              and give your team a repeatable way to improve conversions.
            </p>
          </div>
          <div className="grid gap-5">
            {benefits.map((item) => (
              <CardLink
                key={item.title}
                to={item.to}
                className="grid gap-5 rounded-xl border border-white/10 bg-black/40 p-5 transition hover:-translate-y-1 hover:border-[#6654ff]/50 focus:outline-none focus:ring-2 focus:ring-[#6654ff]/70 md:grid-cols-[auto_1fr] md:p-6"
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
              </CardLink>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="testing" dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(255,45,120,0.12)]">
            <img
              src="/imgi_53_conversion-marketing-test-readiness-checklist.jpg.webp"
              alt="Conversion test readiness checklist"
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
          </div>
          <div>
            <Badge>Ready to ship</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              CRO tests your team can <GradientText>actually build</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              A test only helps if it can be built, tracked, and understood. We
              scope changes with designers, developers, marketers, and analysts
              so the work is realistic and the result is readable.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Success metric defined",
                "Tracking and events checked",
                "Creative and UX changes scoped",
                "Decision rule agreed before launch",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/70"
                >
                  <FiCheckCircle className="text-[#0fc2ff]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="process" dark id="cro-process">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>CRO process</GradientText> works
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

      <SectionShell sideLabel="insight" dark>
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Badge>Decision support</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A specialist CRO team <GradientText>grounded in data</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We connect conversion strategy with design, development, content,
              and analytics. That means your roadmap is not just a list of
              ideas - it is a practical sequence of measurable improvements.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_105_landing-page-conversion-structure-workspace-1-768x432.jpg.webp"
              alt="Landing page conversion structure"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="related">
        <div>
          <Badge>Related services</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Related <GradientText>services</GradientText> you may also need
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(item.icon)}
                </span>
                <h3 className="mt-16 flex items-center justify-between gap-4 text-xl font-semibold text-white">
                  {item.title}
                  <FiArrowDown className="-rotate-90 transition group-hover:translate-x-1" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            CRO and conversion <GradientText>FAQ</GradientText>
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
          <FiCpu className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Talk about <GradientText>conversion rate optimization</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share the pages, funnels, or campaigns you want to improve. We will
            help you find the clearest next step for conversion marketing.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Contact us
            <FiArrowDown className="-rotate-90" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Conversion;
