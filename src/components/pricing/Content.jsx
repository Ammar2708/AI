import React from "react";
import {
  FiArrowDown,
  FiBarChart2,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiEdit3,
  FiFileText,
  FiLayers,
  FiLink,
  FiPenTool,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const services = [
  {
    icon: FiSearch,
    title: "SEO-led content planning",
    text: "We use search data, audience questions, and your service priorities to choose content topics with a clear purpose.",
  },
  {
    icon: FiClipboard,
    title: "Content briefs and structure",
    text: "Every page or article gets a useful brief: intent, outline, internal links, CTA direction, and the role it plays on the site.",
  },
  {
    icon: FiEdit3,
    title: "Writing and editing",
    text: "We create or improve website copy, service content, articles, emails, and supporting assets so they are readable and useful.",
  },
  {
    icon: FiBarChart2,
    title: "Reporting and improvement",
    text: "We review what the content is doing, then recommend what to update, expand, merge, promote, or stop producing.",
  },
];

const benefits = [
  {
    icon: FiTarget,
    title: "Content with a clear job",
    text: "Each page, article, and campaign asset is connected to a business goal, audience need, and next step.",
  },
  {
    icon: FiLink,
    title: "Better website journeys",
    text: "Content is planned around internal links, service pages, contact points, and the decisions visitors need to make.",
  },
  {
    icon: FiUsers,
    title: "Built for busy teams",
    text: "We work with founders, marketers, editors, and subject experts through practical briefs, drafts, and review workflows.",
  },
  {
    icon: FiTrendingUp,
    title: "Useful growth signals",
    text: "Instead of vague content reports, you get plain-language insight into what is helping and what should change next.",
  },
];

const process = [
  {
    title: "Discovery and content audit",
    text: "We review your current pages, audience, search data, campaign needs, competitors, and the gaps holding the site back.",
  },
  {
    title: "Strategy and roadmap",
    text: "We define topics, formats, priorities, publishing rhythm, internal links, and the role each content piece should play.",
  },
  {
    title: "Briefing and production",
    text: "We prepare clear briefs, write or edit the content, and keep the work aligned with brand voice, SEO, and conversion goals.",
  },
  {
    title: "Publishing support",
    text: "We help prepare content for your CMS, landing pages, email sequences, or campaign assets with clean handoff notes.",
  },
  {
    title: "Measure and improve",
    text: "We look at performance, search visibility, engagement, and sales context, then turn the data into practical next actions.",
  },
];

const faqs = [
  {
    question: "What do your content marketing services include?",
    answer:
      "Content audits, strategy, topic planning, SEO briefs, website copy, blog content, editing, CMS-ready content, internal linking, distribution planning, and performance recommendations.",
  },
  {
    question: "Can you work with our existing writers or marketing team?",
    answer:
      "Yes. We can support your team with research, briefs, editing, structure, SEO checks, and publishing guidance while your team keeps ownership of the brand voice.",
  },
  {
    question: "Do you only write blog posts?",
    answer:
      "No. We work on service pages, landing pages, articles, email content, campaign assets, content refreshes, and supporting copy that helps your website convert better.",
  },
  {
    question: "Where should we start?",
    answer:
      "The best starting point is a short review of your current website, services, target audience, and content goals. From there, we can recommend a focused roadmap.",
  },
];

const relatedServices = [
  { title: "SEO copywriting", icon: FiPenTool, href: "/services/seo-copywriting" },
  { title: "On-page SEO", icon: FiSearch, href: "/services/on-page-seo" },
  { title: "Landing pages", icon: FiFileText, href: "/services/landing-page-development" },
  { title: "Website design", icon: FiLayers, href: "/services/web-design-service" },
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

const ContentVisual = () => (
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
          <div className="grid gap-3">
            <div className="rounded-lg border border-white/10 bg-white/12 p-3">
              <div className="h-3 w-24 rounded-full bg-[#6654ff]" />
              <div className="mt-3 h-2 rounded bg-white/35" />
              <div className="mt-2 h-2 w-4/5 rounded bg-white/20" />
            </div>
            <div className="rounded-lg border border-white/10 bg-white/12 p-3">
              <div className="h-3 w-32 rounded-full bg-[#0fc2ff]" />
              <div className="mt-3 h-2 rounded bg-white/35" />
              <div className="mt-2 h-2 w-2/3 rounded bg-white/20" />
            </div>
            <div className="rounded-lg border border-white/10 bg-white/12 p-3">
              <div className="h-3 w-20 rounded-full bg-[#ff2d78]" />
              <div className="mt-3 h-2 rounded bg-white/35" />
              <div className="mt-2 h-2 w-3/4 rounded bg-white/20" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["Intent", "Briefs", "Links", "Next step"].map((item) => (
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

const Content = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Content Marketing</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Content marketing built around your website.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              Plan, write, and improve content for websites, SEO, and campaigns.
              We turn scattered ideas into useful pages, articles, briefs, and
              assets with a clear reason to exist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Content marketing
                <FiArrowDown className="-rotate-90" />
              </a>
              <a
                href="/services"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
              >
                View scope
              </a>
            </div>
          </div>
          <ContentVisual />
        </div>
      </section>

      <SectionShell sideLabel="scope" dark className="pt-10" id="content-scope">
        <div id="content-scope" className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>What we do</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Content work that stays <GradientText>connected</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              The goal is not more content for its own sake. The goal is useful
              content that supports search, builds trust, and moves people to
              the right next step.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(item.icon)}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/45">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="strategy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>SEO plus usefulness</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Aligning <GradientText>content</GradientText> with search and
              intent.
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Search data helps us choose topics, structure briefs, and plan
              internal links. We still write for people first: the content
              should answer the right questions, fit the page context, and give
              your team a clear reason for publishing it.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(102,84,255,0.16)]">
            <img
              src="/imgi_92_content-marketing-performance-dashboard-workspace-1536x864.jpg.webp"
              alt="Content marketing performance dashboard"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="benefits">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What content marketing can <GradientText>support</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Clearer priorities, better briefs, more useful website content,
              and reporting that shows what should be improved next.
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

      <SectionShell sideLabel="team">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(255,45,120,0.12)]">
            <img
              src="/imgi_51_content-marketing-task-coverage-hologram.jpg.webp"
              alt="Content marketing task coverage"
              className="h-[330px] w-full object-cover md:h-[520px]"
            />
          </div>
          <div>
            <Badge>Team support</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built for <GradientText>busy marketing teams</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Marketing teams usually have more content ideas than time to
              execute them. We work inside that gap: you keep ownership of
              priorities and direction, and we take on agreed planning,
              production, publishing, and improvement work.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>content marketing</GradientText> process
              works
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

      <SectionShell sideLabel="related">
        <div>
          <Badge>Related services</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Related <GradientText>SEO and design</GradientText> services
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-white/10 bg-[#121720] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#6654ff]/50"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xl text-white">
                  {React.createElement(item.icon)}
                </span>
                <h3 className="mt-16 flex items-center justify-between gap-4 text-xl font-semibold text-white">
                  {item.title}
                  <FiArrowDown className="-rotate-90 transition group-hover:translate-x-1" />
                </h3>
              </a>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="faq" dark>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Content marketing <GradientText>FAQ</GradientText>
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
          <FiBookOpen className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Discuss your <GradientText>content marketing</GradientText> needs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your website, services, and content goals. We will help shape
            a focused plan that connects content to your wider service strategy.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Content marketing
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Content;
