import React, { useState } from 'react'
import { FiArrowUpRight, FiHeart } from 'react-icons/fi'
import {
  SiFirebase,
  SiMastercard,
  SiMocha,
  SiNotion,
  SiReddit,
  SiSafari,
  SiStripe,
  SiZapier,
} from 'react-icons/si'

const stackGroups = [
  {
    label: 'Framework',
    items: [
      {
        name: 'Lovable',
        text: 'AI-powered development platform',
        icon: FiHeart,
        color: 'text-pink-500',
      },
      {
        name: 'safari',
        text: 'AI-powered development platform',
        icon: SiSafari,
        color: 'text-sky-500',
      },
      {
        name: 'Mastercard',
        text: 'Payment gateway integration',
        icon: SiMastercard,
        color: 'text-orange-500',
      },
      {
        name: 'Zapier',
        text: 'Workflow automation tool',
        icon: SiZapier,
        color: 'text-orange-600',
      },
    ],
  },
  {
    label: 'Cloud & Infra',
    items: [
      {
        name: 'Lovable',
        text: 'AI-powered development platform',
        icon: FiHeart,
        color: 'text-pink-500',
      },
      {
        name: 'Loom',
        text: 'Video messaging platform',
        icon: SiFirebase,
        color: 'text-indigo-500',
      },
      {
        name: 'Runway',
        text: 'AI video generation tool',
        icon: SiReddit,
        color: 'text-black',
      },
    ],
  },
  {
    label: 'Language',
    items: [
      {
        name: 'Mocha',
        text: 'JavaScript test framework',
        icon: SiMocha,
        color: 'text-black',
      },
      {
        name: 'Notion',
        text: 'All-in-one workspace',
        icon: SiNotion,
        color: 'text-black',
      },
    ],
  },
  {
    label: 'Databases',
    items: [
      {
        name: 'Stripe',
        text: 'Payment processing platform',
        icon: SiStripe,
        color: 'text-[#635bff]',
      },
      {
        name: 'Firebase-studio',
        text: 'Payment processing platform',
        icon: SiFirebase,
        color: 'text-orange-500',
      },
      {
        name: 'Redit',
        text: 'API Integration platform',
        icon: SiReddit,
        color: 'text-orange-600',
      },
    ],
  },
]

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] font-bold text-white md:text-[11px]">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Technology Stack
  </div>
)

const ButtonIcon = () => (
  <span className="relative grid size-10 place-items-center rounded-full bg-[#080b12] md:size-12">
    <span className="grid grid-cols-3 gap-1 opacity-70">
      {Array.from({ length: 9 }).map((_, index) => (
        <span
          key={index}
          className={`size-1 rounded-full bg-white ${
            index % 2 === 0 ? 'opacity-95' : 'opacity-35'
          }`}
        />
      ))}
    </span>
    <FiArrowUpRight className="absolute text-base text-white md:text-lg" />
  </span>
)

const StackCard = ({ item }) => {
  const Icon = item.icon

  return (
    <article className="group flex min-h-[118px] items-center gap-4 rounded-[1.35rem] border border-white/10 bg-[#10131b] px-6 py-6 transition duration-300 hover:border-white/18 hover:bg-[#121620] md:min-h-[132px] md:px-8">
      <div className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-[26px] md:size-16 md:text-3xl">
        <Icon className={item.color} />
      </div>

      <div className="min-w-0 flex-1 text-left">
        <h3 className="truncate text-xl font-semibold leading-tight text-white/86 md:text-[24px]">
          {item.name}
        </h3>
        <p className="mt-1.5 truncate text-xs font-semibold text-white/42 md:text-[13px]">
          {item.text}
        </p>
      </div>

      <FiArrowUpRight className="shrink-0 text-xl text-white/82 transition group-hover:translate-x-1 group-hover:-translate-y-1 md:text-2xl" />
    </article>
  )
}

const Stack = () => {
  const [activeGroup, setActiveGroup] = useState(0)
  const active = stackGroups[activeGroup]

  return (
    <section className="relative overflow-hidden bg-black px-5 pb-16 pt-12 text-white md:px-8 lg:px-6 lg:pb-24 lg:pt-16">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(102,84,255,0.38) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.52)_0,rgba(10,8,28,0.33)_30%,rgba(0,0,0,0.94)_72%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.12)_24%,rgba(0,0,0,0.72)_82%,#000_100%)]" />

      <div className="relative mx-auto max-w-[1840px]">
        <div className="mx-auto flex min-h-[390px] max-w-5xl flex-col items-center justify-center border-t border-white/10 text-center">
          <Badge />
          <h2 className="mx-auto mt-8 max-w-5xl text-3xl font-normal leading-[1.14] tracking-normal text-white md:text-[48px]">
            Tech-stack that powers innovation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xs font-semibold leading-relaxed text-white/45 md:text-sm">
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
                className={`flex h-14 items-center justify-center gap-3 rounded-[1rem] px-4 font-mono text-sm font-bold transition md:h-16 md:text-base ${
                  index === activeGroup
                    ? 'text-white'
                    : 'text-white/35 hover:bg-white/[0.04] hover:text-white/70'
                }`}
              >
                {group.label}
                <FiArrowUpRight className="text-base" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {active.items.map((item) => (
            <StackCard key={`${active.label}-${item.name}`} item={item} />
          ))}
        </div>

        <div className="flex justify-center pb-2 pt-20">
          <button
            type="button"
            className="group inline-flex h-14 items-center gap-5 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-mono text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 md:h-16 md:pl-9 md:text-base"
          >
            View full stack
            <ButtonIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Stack
