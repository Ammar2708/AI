import React from "react";
import {
  FiActivity,
  FiAperture,
  FiArrowUpRight,
  FiBarChart2,
  FiCpu,
  FiGlobe,
  FiStar,
} from "react-icons/fi";

const processCards = [
  {
    title: "Manufacturing & automation",
    text: "Streamline operations with intelligent workflows and predictive maintenance.",
    icon: FiAperture,
  },
  {
    title: "Tailored AI roadmaps",
    text: "We develop customized AI strategies tailored to your business needs.",
    icon: FiGlobe,
  },
  {
    title: "End-to-end Implementation & support",
    text: "We handle the entire AI implementation process, from strategy to deployment and support.",
    icon: FiStar,
  },
  {
    title: "Experience across 10+ industries",
    text: "Our team has worked with clients across various sectors, from healthcare to finance.",
    icon: FiActivity,
  },
  {
    title: "Build AI agents trained on your business logic",
    text: "We create custom AI agents that are trained on your business logic to automate tasks and improve efficiency.",
    icon: FiCpu,
  },
  {
    title: "95% client retention rate",
    text: "We maintain high satisfaction levels with our clients through continuous support and improvements.",
    icon: FiBarChart2,
  },
];

const ButtonIcon = () => (
  <span className="relative grid size-10 place-items-center rounded-full bg-[#080b12] md:size-12">
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

const ProcessCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <article className="flex min-h-[280px] flex-col items-center justify-center rounded-[1.55rem] border border-white/10 bg-black/45 px-6 py-10 text-center shadow-[inset_0_1px_0_rgba(102,84,255,0.28)] transition duration-300 hover:border-white/18 md:min-h-[310px] lg:min-h-[340px]">
      <Icon className="mb-16 text-5xl text-white/90 md:mb-20 md:text-6xl" />
      <h2 className="max-w-[360px] text-lg font-semibold leading-tight text-white/82 md:text-xl lg:text-[22px]">
        {item.title}
      </h2>
      <p className="mt-3 max-w-[360px] text-[11px] font-semibold leading-relaxed text-white/46 md:text-xs lg:text-[13px]">
        {item.text}
      </p>
    </article>
  );
};

const Process = () => (
  <main className="relative overflow-hidden bg-black px-4 pb-20 pt-36 text-white md:px-8 lg:px-7 lg:pb-24 lg:pt-40">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(35,35,42,0.7)_0,rgba(0,0,0,0.72)_35%,#000_76%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.2)_35%,#000_100%)]" />

    <section className="relative mx-auto max-w-[1840px]">
      <div className="mx-auto flex min-h-[360px] max-w-5xl flex-col items-center justify-center text-center md:min-h-[430px]">
        <h1 className="mx-auto max-w-4xl text-[28px] font-normal leading-[1.16] tracking-normal text-white md:text-4xl lg:text-[49px]">
          Innovative AI solutions
          <br />
          for every industry
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[11px] font-semibold leading-relaxed text-white/48 md:text-xs lg:text-[13px]">
          We specialize in delivering AI-driven transformations across sectors.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {processCards.map((item) => (
          <ProcessCard key={item.title} item={item} />
        ))}
      </div>

      <div className="flex justify-center pb-2 pt-20">
        <button
          type="button"
          className="group inline-flex h-[52px] items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 font-mono text-xs font-bold text-black transition duration-300 hover:bg-zinc-200 md:h-14 md:pl-8 md:text-sm"
        >
          View all solutions
          <ButtonIcon />
        </button>
      </div>
    </section>
  </main>
);

export default Process;
