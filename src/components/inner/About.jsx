import React from "react";
import {
  FiArrowUpRight,
  FiGlobe,
  FiLayers,
  FiShield,
  FiSmile,
  FiTarget,
  FiZap,
} from "react-icons/fi";

const missionCards = [
  {
    icon: FiGlobe,
    title: "Make AI accessible for every business",
    text: "To simplify AI for businesses through expert consulting, practical development, and implementation that delivers measurable impact fast.",
  },
  {
    icon: FiShield,
    title: "Deliver measurable impact fast",
    text: "Our AI solutions are designed to produce clear outcomes quickly, so teams can see value and build confidence in AI adoption.",
  },
];

const services = [
  {
    icon: FiTarget,
    title: "AI strategy and roadmap",
    text: "Define goals, use cases, and a clear roadmap to adopt AI with confidence.",
  },
  {
    icon: FiZap,
    title: "Custom AI development",
    text: "Build tailored models and tools that fit your industry and operations.",
  },
  {
    icon: FiSmile,
    title: "Integration and deployment",
    text: "Seamlessly integrate AI into your existing systems and workflows.",
  },
  {
    icon: FiLayers,
    title: "Scaling and optimization",
    text: "Improve performance, reliability, and impact as your AI initiatives grow.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Transform documents into engaging video presentations",
    img: "/imgi_16_opai-img-1.png",
  },
  {
    name: "Michael Chen",
    role: "Create product demos and tutorials in minutes",
    img: "/imgi_17_opai-img-2.webp",
  },
  {
    name: "Emily Rodriguez",
    role: "Generate social media content from images and text",
    img: "/imgi_18_opai-img-3.png",
  },
  {
    name: "David Thompson",
    role: "Convert blog posts into animated video stories",
    img: "/imgi_19_opai-img-4.webp",
  },
  {
    name: "Lisa Park",
    role: "Build training videos with AI-powered narration",
    img: "/imgi_20_opai-img-5.png",
  },
  {
    name: "Robert Martinez",
    role: "Produce professional videos with automated editing",
    img: "/imgi_21_opai-img-6.png",
  },
];

const Badge = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] font-bold text-white/85 md:text-xs">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    {children}
  </div>
);

const SectionIntro = ({ badge, title, text, align = "center" }) => (
  <div
    className={`mx-auto max-w-5xl ${
      align === "center" ? "text-center" : "text-left"
    }`}
  >
    {badge && <Badge>{badge}</Badge>}
    <h2 className="mt-6 text-4xl font-normal leading-[1.08] tracking-normal text-white md:text-5xl lg:text-[64px]">
      {title}
    </h2>
    <p className="mx-auto mt-5 max-w-4xl text-sm font-semibold leading-relaxed text-white/45 md:text-base">
      {text}
    </p>
  </div>
);

const FeatureCard = ({ icon, title, text }) => (
  <article className="grid min-h-[300px] place-items-center rounded-[2rem] border border-white/10 bg-black p-8 text-center shadow-[inset_0_1px_0_rgba(102,84,255,0.55)] md:min-h-[360px] md:p-12">
    <div>
      <div className="mx-auto grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl text-white/70 md:size-20">
        {React.createElement(icon)}
      </div>
      <h3 className="mx-auto mt-16 max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl">
        {title}
      </h3>
      <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-relaxed text-white/45 md:text-base">
        {text}
      </p>
    </div>
  </article>
);

const ServiceCard = ({ icon, title, text }) => (
  <article className="grid min-h-[270px] place-items-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(35,25,96,0.48),rgba(0,0,0,0.86)_46%,#000_100%)] p-8 text-center shadow-[inset_0_1px_0_rgba(102,84,255,0.55)] md:min-h-[330px]">
    <div>
      {React.createElement(icon, {
        className: "mx-auto text-4xl text-white/70",
      })}
      <h3 className="mx-auto mt-10 max-w-md text-2xl font-semibold leading-tight text-white/80 md:text-3xl">
        {title}
      </h3>
      <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-relaxed text-white/42 md:text-base">
        {text}
      </p>
    </div>
  </article>
);

const TeamCard = ({ member }) => (
  <article className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:min-h-[520px]">
    <img
      src={member.img}
      alt={member.name}
      className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_20%,rgba(0,0,0,0.88)_100%)]" />
    <div className="absolute inset-x-0 bottom-0 p-8">
      <h3 className="font-serif text-2xl font-semibold leading-tight text-white md:text-3xl">
        {member.name}
      </h3>
      <p className="mt-2 max-w-xs text-sm font-semibold leading-relaxed text-white/55 md:text-base">
        {member.role}
      </p>
    </div>
  </article>
);

const ButtonIcon = () => (
  <span className="relative grid size-11 place-items-center rounded-full bg-[#080b12] md:size-12">
    <span className="grid grid-cols-3 gap-1 opacity-70">
      {Array.from({ length: 9 }).map((_, index) => (
        <span
          key={index}
          className={`size-1 rounded-full bg-white ${
            index % 2 === 0 ? "opacity-95" : "opacity-35"
          }`}
        />
      ))}
    </span>
    <FiArrowUpRight className="absolute text-base text-white md:text-lg" />
  </span>
);

const About = () => {
  return (
    <section className="overflow-hidden bg-black text-white">
      <div className="px-5 pb-16 pt-40 md:px-8 lg:px-9 lg:pb-24 lg:pt-44">
        <SectionIntro
          title="Who we are"
          text="At OptimAI Consulting, we help businesses unlock growth with practical, measurable, and scalable AI solutions. Our mission is simple: make artificial intelligence work for real business outcomes, not as a buzzword, but as a strategic advantage."
        />

        <div className="mx-auto mt-20 max-w-[1840px] overflow-hidden rounded-[2rem] border border-white/10 md:mt-28">
          <img
            src="/imgi_6_opai-img-283.jpg"
            alt="Modern warehouse floor"
            className="h-[360px] w-full object-cover md:h-[520px] lg:h-[650px]"
          />
        </div>

        <div className="px-5 py-16 md:px-8 lg:px-9 lg:py-24">
        <SectionIntro
          badge="Our Vision"
          title="Our Vision"
          text="To empower companies of all sizes with intelligent systems that transform how they operate, innovate, and grow using AI that's reliable, secure, and future-ready."
          align="left"
        />
      </div>

        <div className="mx-auto mt-12 grid max-w-[1840px] gap-6 lg:grid-cols-[0.64fr_1.25fr_1.3fr]">
          <article className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(102,84,255,0.22),transparent_34%),#030303] p-10 md:p-16">
            <p className="text-5xl font-normal leading-none text-white md:text-6xl">
              95%
            </p>
            <p className="mt-6 max-w-[190px] text-base font-semibold leading-relaxed text-white/45 md:text-lg">
              AI adoption success rate
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_25%_0%,rgba(102,84,255,0.28),transparent_38%),#030303] p-10 md:p-16">
            <h3 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-[40px]">
              Faster digital transformation
            </h3>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-relaxed text-white/45 md:text-base lg:text-lg">
              Our AI systems accelerate workflows and decision-making across
              teams and departments.
            </p>
          </article>

          <div className="min-h-[360px] overflow-hidden rounded-[2rem] lg:min-h-[430px]">
            <img
            src="/imgi_32_opai-img-290.jpg"
              alt="Customer browsing products in a bright shop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1840px] gap-6 lg:grid-cols-[0.9fr_0.9fr_1.25fr]">
          <article className="grid min-h-[260px] items-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(102,84,255,0.24),transparent_34%),#030303] p-10 md:min-h-[330px] md:p-16">
            <div>
              <div className="mb-8 flex -space-x-3">
                {["#39d7b1", "#ff5f1f", "#00a7b5", "#ef476f"].map(
                  (color) => (
                    <span
                      key={color}
                      className="size-10 rounded-full border-2 border-black md:size-12"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>
              <h3 className="max-w-sm text-2xl font-semibold leading-tight text-white md:text-3xl">
                Timeless, sustaina- ble creativity.
              </h3>
            </div>
          </article>

          <article className="grid min-h-[260px] items-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_25%_0%,rgba(102,84,255,0.28),transparent_38%),#030303] p-10 md:min-h-[330px] md:p-16">
            <div>
              <h3 className="max-w-md text-3xl font-semibold leading-tight text-white md:text-[40px]">
                Enterprise-grade reliability
              </h3>
              <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-white/45 md:text-base">
                Our AI systems accelerate workflows and decision-making across
                teams and departments.
              </p>
            </div>
          </article>

          <div className="min-h-[330px] overflow-hidden rounded-[2rem] bg-white/5">
            <img
              src="/imgi_5_opai-img-61.webp"
              alt="AI data visualization"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-5 py-16 md:px-8 lg:px-9 lg:py-24">
        <SectionIntro
          title="Our mission"
          text="To simplify AI for businesses by providing expert consulting, hands-on development, and end-to-end implementation that delivers measurable impact fast."
        />

        <div className="mx-auto mt-16 grid max-w-[1840px] gap-8 lg:grid-cols-2">
          {missionCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      

      <div className="px-5 py-16 md:px-8 lg:px-9 lg:py-24">
        <SectionIntro
          title="What we do"
          text="We specialize in designing, building, and integrating AI-powered solutions tailored to your goals, industry, and operational needs. Whether you're just exploring AI or scaling existing models, we help you move with clarity and confidence."
        />

        <div className="mx-auto mt-16 grid max-w-[1840px] gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <div className="px-5 py-16 md:px-8 lg:px-9 lg:py-24">
        <SectionIntro
          title="Meet the team"
          text="Our team is a group of experts who are passionate about helping businesses unlock growth with practical, measurable, and scalable AI solutions."
        />

        <div className="mx-auto mt-20 grid max-w-[1840px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={`${member.name}-${member.role}`} member={member} />
          ))}
        </div>

        <div className="flex justify-center pb-2 pt-20">
          <button
            type="button"
            className="group inline-flex h-14 items-center gap-5 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-mono text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 md:h-16 md:pl-9 md:text-base"
          >
            View all team members
            <ButtonIcon />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-9 lg:py-32">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(102,84,255,0.36) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.52)_0,rgba(10,8,28,0.33)_30%,rgba(0,0,0,0.94)_72%,#000_100%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <Badge>Trusted by Forward-Thinking Companies</Badge>
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-normal leading-[1.08] tracking-normal text-white md:text-5xl lg:text-[64px]">
            From lean startups to global enterprises
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/35 blur-[1.5px] md:text-base">
            We partner with ambitious teams to transform operations, launch new
            AI capabilities, and scale smarter systems with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
