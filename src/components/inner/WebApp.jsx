import React from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBarChart2,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiLock,
  FiMonitor,
  FiRefreshCw,
  FiServer,
  FiUsers,
} from "react-icons/fi";

const GradientText = ({ children }) => (
  <span className="bg-[linear-gradient(90deg,#7c5cff_0%,#c23be7_48%,#ff2d87_100%)] bg-clip-text text-transparent">
    {children}
  </span>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
    <span className="size-2 rounded-full bg-[#13d6ff]" />
    {children}
  </span>
);

const SectionShell = ({ id, label, dark = false, children, className = "" }) => (
  <section
    className={`relative overflow-hidden px-4 py-16 md:px-8 lg:px-9 lg:py-20 ${className} ${
      dark ? "bg-[#071027] text-white" : "bg-black text-white"
    }`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_30%,rgba(19,214,255,0.18),transparent_30%),radial-gradient(circle_at_78%_25%,rgba(255,45,135,0.18),transparent_30%),radial-gradient(circle_at_50%_84%,rgba(124,92,255,0.18),transparent_32%)]" />
    <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-xs font-bold uppercase tracking-[0.32em] text-white/18 lg:block">
      {label}
    </p>
    <div id={id} className="relative mx-auto max-w-[1180px]">
      {children}
    </div>
  </section>
);

const capabilities = [
  {
    icon: FiMonitor,
    title: "Customer portals",
    text: "Secure spaces for accounts, requests, documents, payments, dashboards, and self-service support.",
  },
  {
    icon: FiBarChart2,
    title: "Internal dashboards",
    text: "Operational views that bring tasks, reports, metrics, approvals, and team workflows into one place.",
  },
  {
    icon: FiDatabase,
    title: "Data-heavy tools",
    text: "Search, filters, tables, permissions, imports, exports, and admin controls designed for daily use.",
  },
  {
    icon: FiGitBranch,
    title: "System integrations",
    text: "Practical connections with CRMs, payment tools, booking systems, APIs, and existing business software.",
  },
  {
    icon: FiLock,
    title: "Reliable foundations",
    text: "Authentication, role access, validation, logging, and maintainable architecture from the first release.",
  },
  {
    icon: FiRefreshCw,
    title: "Post-launch evolution",
    text: "Analytics, feedback loops, support fixes, and feature improvements after the first version is live.",
  },
];

const benefits = [
  {
    icon: FiUsers,
    title: "Built around real users",
    text: "We map roles, jobs, screens, states, and handoffs before build work starts, so the product supports actual workflows.",
  },
  {
    icon: FiLayers,
    title: "Clear product structure",
    text: "Features are grouped into sensible releases with transparent scope, priorities, and decision points.",
  },
  {
    icon: FiCode,
    title: "Maintainable development",
    text: "Code, naming, reusable components, and technical boundaries are kept readable for future developers.",
  },
  {
    icon: FiCheckCircle,
    title: "Launch confidence",
    text: "Responsive QA, form checks, integration checks, security basics, and handover notes reduce avoidable surprises.",
  },
];

const process = [
  {
    title: "Discovery and goals",
    text: "We clarify users, business goals, constraints, success metrics, required integrations, and the shape of the first release.",
  },
  {
    title: "Scope and product plan",
    text: "We turn ideas into user flows, feature groups, milestones, and practical delivery options before design moves too far.",
  },
  {
    title: "UX and architecture",
    text: "Key screens, states, data models, permissions, and technical boundaries are planned together so the app is usable and buildable.",
  },
  {
    title: "Build and test",
    text: "The application is developed in focused stages with review points, responsive testing, integration checks, and progress visibility.",
  },
  {
    title: "Launch and improve",
    text: "After release, we can review usage, support requests, analytics, and feedback to plan the next useful improvements.",
  },
];

const faqs = [
  {
    question: "How do you estimate timeline and cost?",
    answer:
      "We estimate after clarifying scope, workflows, integrations, content, and technical risk. For complex apps, we usually recommend a discovery stage before committing to a realistic build range.",
  },
  {
    question: "Can you work with our current team?",
    answer:
      "Yes. We can support founders, product managers, in-house developers, or another agency with UX, front-end, back-end, QA, integrations, or product planning.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We choose the stack around the product requirements and your long-term ownership needs. The goal is a reliable application that your team can understand, maintain, and extend.",
  },
  {
    question: "Do you support the app after launch?",
    answer:
      "Yes. We can help with monitoring, fixes, documentation, feature improvements, performance work, and user-feedback reviews after the application is live.",
  },
];

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-3 shadow-[0_34px_100px_rgba(19,214,255,0.16)]">
    <img
      src="/imgi_98_web-application-development-product-dashboard-review-1536x864.jpg.webp"
      alt="Product dashboard review for a custom web application"
      className="h-[330px] w-full rounded-lg object-cover opacity-90 md:h-[390px]"
    />
    <div className="absolute inset-3 rounded-lg bg-[linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.86))]" />
    <div className="absolute bottom-8 left-8 right-8">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
        product cockpit
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {["Users", "Metrics", "Roadmap"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.08] p-3 backdrop-blur"
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

const MetricCard = ({ value, label }) => (
  <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
    <p className="text-3xl font-semibold text-white md:text-4xl">{value}</p>
    <p className="mt-2 text-sm font-semibold leading-6 text-white/45">
      {label}
    </p>
  </div>
);

const WebApp = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[660px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_30%,rgba(19,214,255,0.26),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,45,135,0.2),transparent_31%),linear-gradient(180deg,#050506_0%,#071027_52%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.92),transparent)]" />

        <div className="relative mx-auto grid min-h-[540px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <Badge>Web application development</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[62px]">
              Custom web apps that make complex work feel simple.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/52 md:text-base">
              We plan, design, and develop web applications around real users,
              clear workflows, secure data, and maintainable technical
              decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Start a project
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/82 transition hover:border-white/35 hover:text-white"
              >
                Web applications development
                <FiArrowUpRight />
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell id="strategy" label="our expertise" dark className="pt-10">
        <div className="mx-auto max-w-[900px]">
          <Badge>strategy first</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Web application development starts with{" "}
            <GradientText>product clarity</GradientText>.
          </h2>
          <p className="mt-5 text-sm font-semibold leading-7 text-white/45 md:text-base">
            A useful app is not just a collection of screens. We begin by
            understanding why the product exists, who will use it, which jobs it
            must support, and where the technical risks live.
          </p>
          <p className="mt-6 text-sm font-semibold leading-7 text-white/45 md:text-base">
            From there, we define scope, user flows, data needs, architecture,
            and an iterative roadmap so your first release stays focused and the
            product can keep improving after launch.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-[960px] overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
          <img
            src="/imgi_60_web-application-development-architecture-dashboard.jpg.webp"
            alt="Web application architecture and analytics dashboard"
            className="h-[320px] w-full object-cover opacity-90 md:h-[430px]"
          />
        </div>
      </SectionShell>

      <SectionShell id="capabilities" label="what we build">
        <div className="max-w-3xl">
          <Badge>application scope</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Useful <GradientText>web app features</GradientText>, built with a
            clear reason.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-1 hover:border-[#13d6ff]/45"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                {React.createElement(item.icon)}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="why-us" label="why us" dark>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111827]">
            <img
              src="/imgi_61_web-application-development-team-collaboration-workspace.jpg.webp"
              alt="Team collaboration workspace for web application planning"
              className="h-[420px] w-full object-cover opacity-90"
            />
          </div>
          <div>
            <Badge>reliable partner</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A build partner for teams that need{" "}
              <GradientText>plain-language progress</GradientText>.
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/45 md:text-base">
              Choosing a web application team is as much about communication as
              code. We help founders, product managers, and agencies turn messy
              requirements into explainable decisions, working software, and a
              project trail that stays understandable.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MetricCard value="01" label="Clear product decisions before build" />
              <MetricCard value="02" label="Reviewable milestones during delivery" />
              <MetricCard value="03" label="Support after the first launch" />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="benefits" label="benefits">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>what you get</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What you get from <GradientText>our work</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              We focus on practical UX, readable implementation, delivery
              habits, and technical safeguards that make the application easier
              to review, test, launch, and continue.
            </p>
          </div>
          <div className="grid gap-5">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-lg border border-white/10 bg-[#121720] p-5 md:grid-cols-[auto_1fr] md:p-6"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-white text-lg text-black">
                  {React.createElement(item.icon)}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-white/45 md:text-base">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="process" label="process" dark>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge>delivery model</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How we run <GradientText>web application projects</GradientText>
            </h2>
          </div>
          <div className="grid gap-4">
            {process.map((item, index) => (
              <details
                key={item.title}
                className="group rounded-lg border border-white/10 bg-black/35 px-5 py-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-semibold">
                  <span>
                    {String(index + 1).padStart(2, "0")}. {item.title}
                  </span>
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/45 md:text-base">
                  {item.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq" label="faq">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Web application <GradientText>development FAQ</GradientText>
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-lg border border-white/10 bg-[#121720] px-5 py-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold md:text-xl">
                  <span>{item.question}</span>
                  <FiChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-5 text-sm font-semibold leading-7 text-white/45 md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <section className="relative overflow-hidden px-4 py-20 text-white md:px-8 lg:px-9 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(19,214,255,0.22),transparent_30%),radial-gradient(circle_at_76%_35%,rgba(255,45,135,0.2),transparent_30%),linear-gradient(180deg,#050816,#000)]" />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <FiServer className="mx-auto text-5xl text-white/30" />
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Discuss your <GradientText>web application</GradientText> project.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Bring the workflow, idea, or current system. We will help shape a
            practical first release and the path after launch.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Request a quote
            <FiArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default WebApp;
