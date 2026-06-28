import React from 'react'
import { FiBox, FiCpu, FiGrid, FiLayers, FiTarget, FiZap } from 'react-icons/fi'

const features = [
  {
    title: '1:1 strategic consulting sessions',
    icon: FiTarget,
  },
  {
    title: 'Tailored AI roadmaps',
    icon: FiCpu,
  },
  {
    title: 'End-to-end implementation & support',
    icon: FiBox,
  },
  {
    title: 'Experience across 10+ industries',
    icon: FiGrid,
  },
  {
    title: '95% client retention rate',
    icon: FiLayers,
  },
  {
    title: 'Build AI agents trained on your business logic',
    icon: FiZap,
  },
]

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] font-bold text-white">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Why Choose Us
  </div>
)

const FeatureItem = ({ title, icon }) => (
  <article className="flex min-h-[340px] flex-col items-center justify-center border-white/10 px-6 py-14 text-center md:min-h-[380px] md:px-10 xl:min-h-[410px]">
    <div className="grid size-16 place-items-center rounded-3xl border border-white/10 bg-white/[0.05] text-2xl text-white/65 shadow-[0_0_28px_rgba(102,84,255,0.16)] md:size-20">
      {React.createElement(icon)}
    </div>
    <h3 className="mt-8 max-w-[400px] text-xl font-semibold leading-snug text-white/78 md:text-2xl xl:text-[1.65rem]">
      {title}
    </h3>
  </article>
)

const Chose = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 text-white md:px-8 lg:px-6">
      <div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(102,84,255,0.42) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.58)_0,rgba(10,8,28,0.42)_28%,rgba(0,0,0,0.92)_72%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.12)_18%,rgba(0,0,0,0.45)_70%,#000_100%)]" />

      <div className="relative mx-auto max-w-[1840px]">
        <div className="flex min-h-[400px] flex-col items-center justify-center border-t border-white/10 text-center md:min-h-[430px]">
          <Badge />
          <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-normal leading-[1.18] tracking-normal text-white md:text-4xl lg:text-[3rem]">
            AI expertise that delivers
            <span className="block">real results</span>
          </h2>
        </div>

        <div className="grid border-t border-white/10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`border-white/10 ${
                index % 3 !== 0 ? 'md:border-l' : ''
              } ${index > 2 ? 'md:border-t' : ''}`}
            >
              <FeatureItem {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Chose
