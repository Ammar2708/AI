import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiBox,
  FiChevronRight,
  FiGrid,
  FiHeart,
  FiMusic,
  FiSearch,
  FiServer,
  FiVideo,
} from "react-icons/fi";
import {
  SiFirebase,
  SiMastercard,
  SiMocha,
  SiNotion,
  SiReddit,
  SiSafari,
  SiStripe,
  SiZapier,
} from "react-icons/si";

const stackGroups = [
  {
    label: "Framework",
    items: [
      {
        name: "Lovable",
        text: "AI-powered development platform",
        icon: FiHeart,
        color: "text-pink-500",
      },
      {
        name: "Safari",
        text: "Browser and web platform integration",
        icon: SiSafari,
        color: "text-sky-500",
      },
      {
        name: "Mastercard",
        text: "Payment gateway integration",
        icon: SiMastercard,
        color: "text-orange-500",
      },
      {
        name: "Zapier",
        text: "Workflow automation tool",
        icon: SiZapier,
        color: "text-orange-600",
      },
      {
        name: "Open AI",
        text: "AI models and API integration",
        icon: FiBox,
        color: "text-black",
      },
      {
        name: "Productivity",
        text: "Collaboration and workflow tools",
        icon: FiGrid,
        color: "text-blue-500",
      },
      {
        name: "Issue Tracker",
        text: "Bug tracking and sprint management",
        icon: FiServer,
        color: "text-[#6654ff]",
      },
      {
        name: "Make",
        text: "No-code automation and workflows",
        icon: SiZapier,
        color: "text-orange-600",
      },
      {
        name: "Design Collab",
        text: "Real-time design and prototypes",
        icon: FiHeart,
        color: "text-red-600",
      },
      {
        name: "LLM Gateway",
        text: "Multi-model API orchestration",
        icon: FiBox,
        color: "text-black",
      },
      {
        name: "Docs & Wiki",
        text: "Knowledge base and documentation",
        icon: SiNotion,
        color: "text-black",
      },
    ],
  },
  {
    label: "Cloud & Infra",
    items: [
      {
        name: "Pinterest",
        text: "Visual discovery and inspiration platform",
        icon: FiHeart,
        color: "text-red-600",
      },
      {
        name: "Loom",
        text: "Video messaging platform",
        icon: SiFirebase,
        color: "text-indigo-500",
      },
      {
        name: "Runway",
        text: "AI video generation tool",
        icon: FiGrid,
        color: "text-black",
      },
      {
        name: "Perplexity AI",
        text: "AI-powered search and research",
        icon: FiSearch,
        color: "text-cyan-700",
      },
      {
        name: "Suno",
        text: "AI music generation platform",
        icon: FiMusic,
        color: "text-black",
      },
      {
        name: "Face Time",
        text: "Video calling and communication",
        icon: FiVideo,
        color: "text-green-500",
      },
      {
        name: "Deploy & Hosting",
        text: "One-click deploy and edge hosting",
        icon: FiHeart,
        color: "text-pink-500",
      },
      {
        name: "Model Hosting",
        text: "Inference and model deployment",
        icon: FiGrid,
        color: "text-black",
      },
      {
        name: "Voice AI",
        text: "Speech synthesis and recognition",
        icon: FiMusic,
        color: "text-black",
      },
    ],
  },
  {
    label: "Language",
    items: [
      {
        name: "Mocha",
        text: "JavaScript test framework",
        icon: SiMocha,
        color: "text-black",
      },
      {
        name: "Notion",
        text: "All-in-one workspace",
        icon: SiNotion,
        color: "text-black",
      },
      {
        name: "Qwen",
        text: "Large language models and APIs",
        icon: FiGrid,
        color: "text-black",
      },
      {
        name: "Test Runner",
        text: "Unit and integration testing",
        icon: SiMocha,
        color: "text-black",
      },
      {
        name: "Model Hub",
        text: "Pre-trained models and fine-tuning",
        icon: FiGrid,
        color: "text-black",
      },
    ],
  },
  {
    label: "Databases",
    items: [
      {
        name: "Stripe",
        text: "Payment processing platform",
        icon: SiStripe,
        color: "text-[#635bff]",
      },
      {
        name: "Firebase-studio",
        text: "Payment processing platform",
        icon: SiFirebase,
        color: "text-orange-500",
      },
      {
        name: "Redit",
        text: "API integration platform",
        icon: SiReddit,
        color: "text-orange-600",
      },
      {
        name: "WhatsApp",
        text: "Messaging and Business API",
        icon: FiVideo,
        color: "text-green-500",
      },
      {
        name: "Community API",
        text: "Forums and discussion integration",
        icon: SiReddit,
        color: "text-orange-600",
      },
    ],
  },
];

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] font-bold text-white">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Technology Stack
  </div>
);

const StackCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <article className="group flex min-h-[126px] items-center gap-4 rounded-[1.35rem] border border-white/10 bg-[#10131b] px-6 py-6 text-left transition duration-300 hover:border-white/20 hover:bg-[#121620] md:min-h-[138px] md:px-8 lg:min-h-[148px]">
      <div className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-[26px] md:size-16 md:text-3xl">
        <Icon className={item.color} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xl font-semibold leading-tight text-white/90 md:text-[24px]">
          {item.name}
        </h3>
        <p className="mt-1.5 truncate text-xs font-semibold text-white/45 md:text-[13px]">
          {item.text}
        </p>
      </div>

      <FiArrowUpRight className="shrink-0 text-xl text-white/85 transition group-hover:translate-x-1 group-hover:-translate-y-1 md:text-2xl" />
    </article>
  );
};

const Inter = () => {
  const [activeGroup, setActiveGroup] = useState(0);
  const active = stackGroups[activeGroup];

  return (
    <main className="relative overflow-hidden bg-black px-4 pb-20 pt-36 text-white md:px-8 lg:px-7 lg:pb-24 lg:pt-40">
      <div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(102,84,255,0.38) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.54)_0,rgba(10,8,28,0.34)_30%,rgba(0,0,0,0.92)_72%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.78)_86%,#000_100%)]" />

      <section className="relative mx-auto max-w-[1840px]">
        <div className="mx-auto flex min-h-[330px] max-w-5xl flex-col items-center justify-center text-center md:min-h-[370px]">
          <Badge />
          <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-normal leading-[1.12] tracking-normal text-white md:text-5xl lg:text-[58px]">
            Tech-stack that powers innovation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-relaxed text-white/45 md:text-base">
            We use the best tools in AI, ML, and data science to build robust,
            future-ready systems.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[1.35rem] border border-white/10 bg-[#151821]/88 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
            {stackGroups.map((group, index) => (
              <button
                key={group.label}
                type="button"
                onClick={() => setActiveGroup(index)}
                className={`flex h-12 items-center justify-center gap-2 rounded-[1rem] px-3 font-mono text-sm font-bold transition md:h-14 md:text-base ${
                  index === activeGroup
                    ? "text-white"
                    : "text-white/36 hover:bg-white/[0.04] hover:text-white/70"
                }`}
              >
                {group.label}
                <FiChevronRight className="text-base" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {active.items.map((item) => (
            <StackCard key={`${active.label}-${item.name}`} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Inter;
