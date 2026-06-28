import React, { useState } from 'react'
import { FiArrowUpRight, FiBox, FiCheck, FiLayers } from 'react-icons/fi'
import { TbPlanet } from 'react-icons/tb'

const plans = [
  {
    name: 'Basic',
    subtitle: 'Best for startup and small teams',
    monthly: ['$99', '$19'],
    yearly: ['$999', '$699'],
    icon: FiLayers,
    button: 'Get started free',
    features: [
      'Access to core AI tools',
      'Up to 3 team members',
      '2 AI project workspaces',
      '24/7 email support',
      'Community forum access',
      'Basic analytics',
    ],
  },
  {
    name: 'Business',
    subtitle: 'Best for large businesses',
    monthly: ['$199', '$149'],
    yearly: ['$1,999', '$1,399'],
    icon: FiBox,
    button: 'Upgrade to Business',
    featured: true,
    features: [
      'Unlimited users and projects',
      'Advanced analytics and reporting',
      'Dedicated account management',
      'Custom AI integrations and automations',
      'Priority 24/7 customer support',
      'Onboarding & training for teams',
    ],
  },
  {
    name: 'Team',
    subtitle: 'Best for teams and organizations',
    monthly: ['$299', '$249'],
    yearly: ['$2,999', '$2,399'],
    icon: TbPlanet,
    button: 'Upgrade to Team',
    features: [
      'Everything in Pro, plus:',
      'Unlimited team members',
      'Advanced analytics dashboard',
      'Priority support (SLA)',
      'Custom workflows & permissions',
      'Dedicated onboarding',
    ],
  },
]

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] font-bold text-white md:text-[11px]">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Pricing
  </div>
)

const ButtonIcon = ({ inverted = false }) => (
  <span
    className={`relative grid size-9 place-items-center rounded-full transition duration-300 md:size-10 ${
      inverted ? 'bg-[#080b12]' : 'bg-white group-hover:bg-[#080b12]'
    }`}
  >
    <span className="grid grid-cols-3 gap-1 opacity-70">
      {Array.from({ length: 9 }).map((_, index) => (
        <span
          key={index}
          className={`size-1 rounded-full transition duration-300 ${
            inverted ? 'bg-white' : 'bg-black group-hover:bg-white'
          } ${index % 2 === 0 ? 'opacity-95' : 'opacity-35'}`}
        />
      ))}
    </span>
    <FiArrowUpRight
      className={`absolute text-base md:text-lg ${
        inverted ? 'text-white' : 'text-black group-hover:text-white'
      }`}
    />
  </span>
)

const PriceCard = ({ plan, billing, active, onSelect, onHover, onLeave }) => {
  const PlanIcon = plan.icon
  const [oldPrice, price] = billing === 'monthly' ? plan.monthly : plan.yearly

  return (
    <article
      onClick={onSelect}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative flex min-h-[460px] cursor-pointer flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/35 px-6 py-7 transition duration-500 hover:border-white/18 md:min-h-[500px] md:rounded-[1.9rem] md:px-7 md:py-8"
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_86%_0%,rgba(155,135,255,0.82),rgba(40,46,117,0.54)_30%,rgba(5,7,14,0.96)_58%,#000_100%)] transition duration-500 group-hover:opacity-100 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="relative z-10 grid size-11 place-items-center rounded-full border border-white/25 text-lg text-white/80">
        <PlanIcon />
      </div>

      <div className="relative z-10 mt-7">
        <h3 className="text-2xl font-normal leading-tight text-white md:text-[31px]">
          {plan.name}
        </h3>
        <p className="mt-2 text-[11px] font-semibold text-white/48 md:text-xs">
          {plan.subtitle}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-end gap-4">
        <span className="pb-1 text-lg font-semibold text-white/48 line-through md:text-xl">
          {oldPrice}
        </span>
        <span className="text-3xl font-normal leading-none text-white md:text-[38px]">
          {price}
        </span>
      </div>

      <div className="relative z-10 mt-7 h-px bg-white/10" />

      <ul className="relative z-10 mt-7 space-y-4">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="grid grid-cols-[1.1rem_1fr] items-start gap-3 text-[11px] font-semibold leading-relaxed text-white/48 md:text-xs"
          >
            <FiCheck className="mt-1 text-xs text-white" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`relative z-10 mt-auto inline-flex h-11 items-center justify-between gap-4 rounded-full border px-1 py-1 pl-5 font-mono text-[11px] font-bold transition duration-300 md:h-12 md:text-xs ${
          active
            ? 'border-white bg-white text-black hover:bg-zinc-200'
            : 'border-white/10 bg-black/20 text-white group-hover:border-white group-hover:bg-white group-hover:text-black'
        }`}
      >
        {plan.button}
        <ButtonIcon inverted={active} />
      </button>
    </article>
  )
}

const Price = () => {
  const [billing, setBilling] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState('Business')
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const activePlan = hoveredPlan || selectedPlan

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
        <div className="mx-auto flex min-h-[340px] max-w-5xl flex-col items-center justify-center border-t border-white/10 text-center">
          <Badge />
          <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-normal leading-[1.16] tracking-normal text-white md:text-[42px]">
            AI Solutions for every budget
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xs font-semibold leading-relaxed text-white/45 md:text-sm">
            Choose the plan that fits your needs, with no hidden fees.
          </p>

          <div className="mt-16 grid grid-cols-2 rounded-[0.9rem] border border-white/10 bg-[#171925]/85 p-1">
            {['monthly', 'yearly'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={`h-11 rounded-[0.75rem] px-7 text-xs font-semibold capitalize transition md:h-12 md:px-9 md:text-sm ${
                  billing === option
                    ? 'bg-white text-black'
                    : 'text-white/45 hover:text-white/75'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3 xl:gap-8">
          {plans.map((plan) => (
            <PriceCard
              key={plan.name}
              plan={plan}
              billing={billing}
              active={activePlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
              onHover={() => setHoveredPlan(plan.name)}
              onLeave={() => setHoveredPlan(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Price
