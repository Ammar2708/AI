import React from "react";
import {
  FiArrowDown,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiChevronDown,
  FiEdit3,
  FiFileText,
  FiGrid,
  FiLayers,
  FiMessageCircle,
  FiPenTool,
  FiRepeat,
  FiShare2,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const scopeItems = [
  {
    icon: FiTarget,
    title: "Channel and audience strategy",
    text: "We define who you need to reach, where they spend attention, and what each channel should do for the business.",
  },
  {
    icon: FiCalendar,
    title: "Content calendars",
    text: "Campaigns, posts, launches, offers, and evergreen ideas are planned into a realistic publishing rhythm.",
  },
  {
    icon: FiEdit3,
    title: "Creative and copy direction",
    text: "We shape post concepts, captions, hooks, carousels, short-form ideas, and visual direction around your brand.",
  },
  {
    icon: FiBarChart2,
    title: "Performance reporting",
    text: "Reports focus on what the activity is doing: reach, engagement, traffic, leads, sales context, and what to improve next.",
  },
];

const benefits = [
  {
    icon: FiUsers,
    title: "A clearer brand presence",
    text: "Your social channels become easier to recognize, easier to understand, and more connected to your website and offers.",
  },
  {
    icon: FiMessageCircle,
    title: "Useful conversations",
    text: "We plan content that gives people a reason to react, ask, click, save, share, and remember the brand.",
  },
  {
    icon: FiTrendingUp,
    title: "Campaigns with momentum",
    text: "Launches, offers, content themes, and ads work together instead of feeling like isolated posts.",
  },
  {
    icon: FiRepeat,
    title: "Repeatable improvement",
    text: "Every month gives your team cleaner insight into what topics, formats, and channels deserve more attention.",
  },
];

const process = [
  {
    title: "Audit the current presence",
    text: "We review your existing channels, brand consistency, content quality, engagement, competitors, and website connection.",
  },
  {
    title: "Build the content direction",
    text: "We define key themes, post types, campaign priorities, tone, visual rules, and the role of each platform.",
  },
  {
    title: "Plan and produce",
    text: "We create content calendars, post ideas, captions, creative briefs, and production notes for design or publishing.",
  },
  {
    title: "Publish and promote",
    text: "We help schedule organic content, prepare campaign assets, and connect social activity to paid or website journeys.",
  },
  {
    title: "Measure and refine",
    text: "We review performance, learn from audience response, and adjust the next round of posts and campaigns.",
  },
];

const faqs = [
  {
    question: "What do your social media marketing services include?",
    answer:
      "Strategy, content planning, campaign direction, captions, creative briefs, content calendars, reporting, and guidance for organic and promoted social activity.",
  },
  {
    question: "Can you work with our designer or internal marketing team?",
    answer:
      "Yes. We can prepare the strategy, briefs, copy, and calendar while your team handles design, approval, publishing, or community replies.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "We can plan for LinkedIn, Instagram, Facebook, TikTok, X, YouTube Shorts, and platform mixes that fit your audience and offer.",
  },
  {
    question: "Do you only create posts?",
    answer:
      "No. We connect posts to campaigns, service pages, landing pages, lead magnets, email flows, and paid promotion when needed.",
  },
  {
    question: "How do you measure results?",
    answer:
      "We look at reach, engagement quality, saves, clicks, website traffic, leads, campaign response, and what the data says to do next.",
  },
];

const relatedServices = [
  { title: "Content marketing", icon: FiPenTool, to: "/services/content-marketing" },
  { title: "Banner ad design", icon: FiGrid, to: "/services/banner-ad-design" },
  { title: "Brand identity", icon: FiLayers, to: "/services/brand-identity" },
  { title: "Landing page", icon: FiFileText, to: "/services/landing-page-development" },
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
        <div className="grid gap-3">
          <div className="h-5 w-44 rounded-full bg-white/85" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-28 rounded-lg border border-white/10 bg-white/12 p-3">
              <div className="h-12 rounded bg-[#6654ff]/80" />
              <div className="mt-3 h-2 rounded bg-white/35" />
              <div className="mt-2 h-2 w-3/4 rounded bg-white/20" />
            </div>
            <div className="h-28 rounded-lg border border-white/10 bg-white/12 p-3">
              <div className="h-16 rounded bg-[#0fc2ff]/80" />
              <div className="mt-3 h-2 rounded bg-white/35" />
              <div className="mt-2 h-2 w-2/3 rounded bg-white/20" />
            </div>
            <div className="h-28 rounded-lg border border-white/10 bg-white/12 p-3">
              <div className="h-10 rounded bg-[#ff2d78]/80" />
              <div className="mt-3 h-2 rounded bg-white/35" />
              <div className="mt-2 h-2 w-4/5 rounded bg-white/20" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["Posts", "Briefs", "Reach", "Clicks"].map((item) => (
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

const Social = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[640px] px-4 pt-28 md:px-8 lg:px-9 lg:pt-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(102,84,255,0.32),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(255,45,120,0.22),transparent_32%),linear-gradient(180deg,#040407_0%,#090b12_54%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),transparent)]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <Badge>Social Media Marketing</Badge>
            <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[1.08] tracking-normal md:text-5xl lg:text-[58px]">
              Social media marketing built around real campaigns.
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/50 md:text-base">
              Plan, create, and improve social content that supports brand
              awareness, website traffic, campaign launches, and lead
              generation. We connect posts, creative, and reporting to a clear
              marketing purpose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                Social media marketing services
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
          <HeroVisual />
        </div>
      </section>

      <SectionShell sideLabel="scope" dark className="pt-10" id="social-scope">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>What we do</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Social work that stays <GradientText>connected</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Your channels should not feel random. We turn business goals,
              audience needs, and campaign timing into content people can
              understand, remember, and act on.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {scopeItems.map((item) => (
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
            <Badge>Campaign clarity</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Turn attention into a <GradientText>usable journey</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              Social media works better when each post knows its job. Some
              content builds trust, some explains the offer, some drives a
              click, and some keeps the brand visible between campaigns.
            </p>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We plan those roles clearly so your social activity supports your
              website, sales process, and wider content strategy.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(102,84,255,0.16)]">
            <img
              src="/imgi_142_landing-page-campaign-workflow-hologram-225x300.jpg.webp"
              alt="Social campaign workflow"
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="benefits">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What social media marketing can <GradientText>support</GradientText>
            </h2>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/45 md:text-base">
              Better planning, stronger campaigns, clearer reporting, and a
              brand presence that works with the rest of your website.
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

      <SectionShell sideLabel="creative" dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720] shadow-[0_24px_80px_rgba(255,45,120,0.12)]">
            <img
              src="/imgi_26_brand-identity-positioning-system-workspace.jpg.webp"
              alt="Brand and social content planning"
              className="h-[330px] w-full object-cover md:h-[500px]"
            />
          </div>
          <div>
            <Badge>Content system</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A social content system your team can{" "}
              <GradientText>keep using</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We organize your ideas into repeatable content themes: proof,
              education, offers, product stories, brand moments, team insight,
              and campaign pushes. That keeps posting consistent without making
              every week start from zero.
            </p>
            <div className="mt-8 grid gap-3">
              {["Post themes", "Caption hooks", "Creative briefs", "Monthly learnings"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/70"
                  >
                    <FiCheckCircle className="text-[#0fc2ff]" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="process" dark>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              How our <GradientText>social marketing</GradientText> process
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

      <SectionShell sideLabel="reporting" dark>
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Badge>Performance</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Reporting that shows what to{" "}
              <GradientText>publish next</GradientText>
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/48 md:text-base">
              We look beyond surface numbers. The useful question is what your
              audience is responding to, which posts support real journeys, and
              where the next campaign can be sharper.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121720]">
            <img
              src="/imgi_92_content-marketing-performance-dashboard-workspace-1536x864.jpg.webp"
              alt="Social content performance dashboard"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell sideLabel="related">
        <div>
          <Badge>Related services</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Related <GradientText>marketing</GradientText> services
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((item) => (
              <a
                key={item.title}
                href={item.to}
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
            Social media marketing <GradientText>FAQ</GradientText>
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
          <FiShare2 className="mx-auto text-3xl text-white/70" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Talk about your <GradientText>social media marketing</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/45 md:text-base">
            Share your channels, goals, and campaigns. We will help shape a
            social marketing plan that connects your content with the rest of
            your website.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
          >
            Social media marketing services
            <FiArrowDown className="-rotate-90" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Social;
