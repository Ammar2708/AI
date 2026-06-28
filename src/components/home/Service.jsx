import React from 'react'
import { FiAperture, FiCpu, FiGrid, FiLink2, FiZap } from 'react-icons/fi'

const services = [
  {
    title: 'AI strategy consulting',
    text: 'Align AI with your long-term goals',
    image: '/imgi_16_opai-img-277.webp',
    imageClass: 'h-72 w-72 object-contain',
  },
  {
    title: 'Data audit & readiness',
    text: 'Evaluate data quality and gaps',
    image: '/imgi_28_vector-18.webp',
    imageClass: 'h-64 w-80 object-contain',
  },
  {
    title: 'Model development',
    text: 'Build predictive, prescriptive, and generative models',
    image: '/imgi_18_opai-img-279.webp',
    imageClass: 'h-80 w-64 object-contain',
  },
  {
    title: 'AI integration',
    text: 'Seamless deployment into your existing systems',
    custom: 'orbit',
  },
]

const orbitItems = [
  ['left-4 top-24', FiZap],
  ['right-12 top-16', FiCpu],
  ['right-6 bottom-24', FiGrid],
  ['left-16 bottom-12', FiLink2],
]

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] font-bold text-white">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Our Services
  </div>
)

const OrbitGraphic = () => (
  <div className="relative grid h-72 w-full place-items-center">
    <div className="absolute size-60 rounded-full border border-white/10 bg-white/[0.03]" />
    <div className="absolute size-44 rounded-full border border-white/10 bg-white/[0.04]" />
    <div className="absolute size-28 rounded-full border border-white/10 bg-white/[0.06]" />
    <div className="absolute grid size-16 place-items-center rounded-full bg-black shadow-[0_0_45px_rgba(102,84,255,0.45)]">
      <FiAperture className="text-3xl text-[#6654ff]" />
    </div>
    {orbitItems.map(([position, OrbitIcon]) => (
      <span
        key={position}
        className={`absolute ${position} grid size-11 place-items-center rounded-full border border-white/15 bg-[#151927] text-xl text-white shadow-[0_0_22px_rgba(102,84,255,0.22)]`}
      >
        {React.createElement(OrbitIcon)}
      </span>
    ))}
  </div>
)

const ServiceCard = ({ title, text, image, imageClass, custom }) => (
  <article className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#030305] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_34px_rgba(102,84,255,0.08)] transition duration-300 hover:border-[#6654ff]/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_42px_rgba(102,84,255,0.16)]">
    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(102,84,255,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_24%)]" />
    <div className="relative grid min-h-[275px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(102,84,255,0.08),transparent_42%),linear-gradient(180deg,rgba(8,7,14,0.96),rgba(0,0,0,0.98))]">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#6654ff]/55 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.12)_42%,#000_88%)]" />
      <div className="relative z-10 transition duration-300 group-hover:scale-[1.03]">
        {custom === 'orbit' ? (
          <OrbitGraphic />
        ) : (
          <img src={image} alt="" className={imageClass} aria-hidden="true" />
        )}
      </div>
    </div>

    <div className="flex flex-1 flex-col items-center justify-end px-8 pb-14 pt-10 text-center">
      <h3 className="max-w-[240px] text-base font-semibold leading-tight text-white/80 md:text-lg">
        {title}
      </h3>
      <p className="mt-3 max-w-[270px] text-[11px] font-semibold leading-relaxed text-white/42 md:text-xs">
        {text}
      </p>
    </div>
  </article>
)

const Service = () => {
  return (
    <section className="bg-black px-5 pb-10 pt-24 text-white md:px-8 lg:px-6 lg:pb-12 lg:pt-28">
      <div className="mx-auto max-w-[1840px]">
        <div className="mx-auto max-w-5xl text-center">
          <Badge />
          <h2 className="mx-auto mt-8 max-w-4xl text-2xl font-normal leading-[1.2] tracking-normal text-white md:text-4xl lg:text-[2.75rem]">
            AI Consulting services
            <span className="block">tailored to your business</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-[11px] font-semibold leading-relaxed text-white/45 md:text-xs">
            We help you navigate the complexities of AI adoption, ensuring you
            get the most out of your investment.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
