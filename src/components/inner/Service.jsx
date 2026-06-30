import React from "react";
import {
  FiAperture,
  FiBarChart2,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiShield,
  FiZap,
} from "react-icons/fi";

const services = [
  {
    title: "Align AI with your vision",
    text: "We work closely with your leadership team to define a clear, actionable AI strategy that delivers measurable value.",
    included: [
      "Business readiness assessment",
      "Opportunity mapping and ROI forecasting",
      "Vision, goals and roadmap development",
      "Risk, governance and ethical guidelines",
      "Prioritized implementation blueprint",
    ],
    outcome:
      "A customized AI strategy aligned with your goals, so you invest in the right solutions at the right time.",
    visual: "image",
    image: "/imgi_8_vector-2.png",
  },
  {
    title: "Data audit & readiness",
    text: "Our team performs a detailed audit to identify strengths, gaps, and opportunities for improvement.",
    included: [
      "Data quality evaluation",
      "Data cleaning and preparation",
      "Infrastructure and pipeline assessment",
      "Gap analysis and recommendations",
      "Data governance and security review",
    ],
    outcome:
      "A complete view of your data ecosystem and the upgrades needed to power high-performance AI.",
    visual: "pills",
  },
  {
    title: "Model development",
    text: "We build predictive, prescriptive, and generative AI models tailored to your use case, industry, and customers.",
    included: [
      "Predictive analytics and forecasting",
      "Generative AI model development",
      "Recommendation systems",
      "NLP, computer vision and chatbot models",
      "Model tuning, validation and testing",
    ],
    outcome:
      "High-accuracy, production-ready AI models that deliver real business value from day one.",
    visual: "pipeline",
  },
  {
    title: "AI Integration & deployment",
    text: "We ensure your AI solution deploys smoothly into your workflows, tools, and platforms.",
    included: [
      "API development and system integration",
      "Cloud deployment (AWS, Azure, GCP)",
      "Automation and workflow integration",
      "Performance monitoring and security checks",
      "Post-launch optimization",
    ],
    outcome: "Fully operational AI systems embedded into your business.",
    visual: "orbit",
  },
];

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-4 py-1.5 font-mono text-[10px] font-bold text-white/90 md:text-[11px]">
    <span className="size-2 rounded-full bg-[#6654ff]" />
    Our Services
  </div>
);

const DotField = () => (
  <div
    className="absolute inset-0 opacity-55"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(102,84,255,0.45) 1px, transparent 1px)",
      backgroundSize: "8px 8px",
    }}
  />
);

const PillGraphic = () => {
  const items = [
    ["Market", "left-[32%] top-[22%] -rotate-35"],
    ["Goals", "left-[39%] top-[38%] rotate-45"],
    ["Trends", "left-[53%] top-[39%] rotate-34"],
    ["Systems", "left-[27%] top-[56%] rotate-42"],
    ["Users", "left-[48%] top-[58%] -rotate-25"],
    ["Barriers", "left-[17%] top-[62%]"],
    ["Insights", "left-[62%] top-[64%] -rotate-13"],
  ];

  return (
    <div className="relative h-full w-full">
      {items.map(([label, position]) => (
        <span
          key={label}
          className={`absolute ${position} inline-flex h-10 min-w-[96px] items-center justify-center rounded-full border border-[#6654ff]/35 bg-[#171b27] px-4 text-xs font-medium text-white shadow-[0_12px_34px_rgba(0,0,0,0.28)] md:h-12 md:min-w-[110px] md:text-sm`}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

const BarsGraphic = () => {
  const bars = [52, 36, 74, 44, 62, 86, 22];

  return (
    <div className="flex h-full items-end justify-center gap-6 px-8 pb-10 md:gap-8">
      {bars.map((height, index) => (
        <div key={index} className="grid justify-items-center gap-3">
          <span
            className="block w-12 rounded-xl bg-[linear-gradient(180deg,#6654ff_0%,#4d3ed9_48%,rgba(0,0,0,0.25)_100%)] shadow-[0_0_26px_rgba(102,84,255,0.28)] md:w-16"
            style={{ height: `${height}%` }}
          />
          <span className="font-mono text-[10px] font-bold text-white/24">
            {"SMTWTFS"[index]}
          </span>
        </div>
      ))}
    </div>
  );
};

const PipelineGraphic = () => (
  <div className="relative flex h-full items-center justify-center">
    <div className="h-40 w-px bg-[#6654ff]/70" />
    <div className="absolute grid gap-3">
      {[
        [FiBarChart2, "Predict"],
        [FiShield, "Prescribe"],
        [FiZap, "Generate"],
      ].map(([Icon, label]) => (
        <div key={label} className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full border border-white/18 bg-[#151927] text-white">
            {React.createElement(Icon)}
          </span>
          <span className="text-sm font-semibold text-white/38">{label}</span>
        </div>
      ))}
    </div>
  </div>
);

const OrbitGraphic = () => {
  const icons = [FiDatabase, FiGitBranch, FiLayers, FiShield, FiCpu];

  return (
    <div className="relative grid h-full place-items-center">
      <div className="absolute size-56 rounded-full bg-white/[0.05]" />
      <div className="absolute size-40 rounded-full bg-white/[0.06]" />
      <div className="absolute size-24 rounded-full bg-white/[0.07]" />
      <div className="relative z-10 grid size-16 place-items-center rounded-full bg-black shadow-[0_0_36px_rgba(102,84,255,0.38)]">
        <FiAperture className="text-3xl text-[#6654ff]" />
      </div>
      {icons.map((Icon, index) => {
        const positions = [
          "left-[22%] top-[34%]",
          "right-[23%] top-[30%]",
          "right-[30%] bottom-[24%]",
          "left-[27%] bottom-[23%]",
          "left-1/2 top-[11%] -translate-x-1/2",
        ];

        return (
          <span
            key={index}
            className={`absolute ${positions[index]} grid size-10 place-items-center rounded-full border border-[#6654ff]/35 bg-[#171b27] text-lg text-white shadow-[0_0_22px_rgba(102,84,255,0.2)]`}
          >
            {React.createElement(Icon)}
          </span>
        );
      })}
    </div>
  );
};

const Visual = ({ type, image }) => (
  <div className="relative h-[220px] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(102,84,255,0.16),transparent_42%),linear-gradient(180deg,#060714,#020203)] md:h-[250px]">
    <DotField />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.16)_42%,#000_94%)]" />
    <div className="relative h-full">
      {type === "image" && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain px-5 py-8 md:px-8"
        />
      )}
      {type === "pills" && <PillGraphic />}
      {type === "bars" && <BarsGraphic />}
      {type === "pipeline" && <PipelineGraphic />}
      {type === "orbit" && <OrbitGraphic />}
    </div>
  </div>
);

const ServiceCard = ({ title, text, included, outcome, visual, image }) => (
  <article className="rounded-[1.6rem] border border-white/10 bg-black/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-5 lg:p-6">
    <Visual type={visual} image={image} />

    <div className="px-2 pb-4 pt-8 md:px-5 md:pb-6 md:pt-9">
      <h2 className="text-2xl font-semibold leading-tight text-white/86 md:text-[28px]">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-white/42 md:text-[15px]">
        {text}
      </p>

      <h3 className="mt-8 text-lg font-semibold text-white/82 md:text-xl">
        What's Included
      </h3>
      <ul className="mt-4 grid gap-2.5 text-sm font-semibold leading-relaxed text-white/46 md:text-[15px]">
        {included.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-8 text-lg font-semibold text-white/82 md:text-xl">
        Outcome
      </h3>
      <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-white/42 md:text-[15px]">
        {outcome}
      </p>
    </div>
  </article>
);

const Service = () => {
  return (
    <main className="relative overflow-hidden bg-black px-4 pb-20 pt-32 text-white md:px-8 lg:px-7 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(26,28,36,0.78)_0,rgba(0,0,0,0.72)_36%,#000_76%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.12)_34%,#000_100%)]" />

      <section className="relative mx-auto max-w-[1840px]">
        <div className="mx-auto flex min-h-[410px] max-w-5xl flex-col items-center justify-center text-center md:min-h-[500px]">
          <Badge />
          <h1 className="mx-auto mt-8 max-w-4xl text-[36px] font-normal leading-[1.12] tracking-normal text-white md:text-5xl lg:text-[62px]">
            AI Consulting services
            <span className="block">tailored to your business</span>
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-sm font-semibold leading-relaxed text-white/42 md:text-[15px]">
            AI is powerful, but only when it supports your strategic priorities.
            We help define, build, and deploy practical systems that create
            measurable value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Service;
