import React, { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const industries = [
  {
    title: 'Retail',
    image: '/imgi_21_opai-img-281.webp',
  },
  {
    title: 'Finance',
    image: '/imgi_22_opai-img-282.webp',
  },
  {
    title: 'Healthcare',
    image: '/imgi_23_opai-img-283.webp',
  },
  {
    title: 'Manufacturing',
    image: '/imgi_24_opai-img-284.webp',
  },
  {
    title: 'Logistics',
    image: '/imgi_25_opai-img-285.webp',
  },
  {
    title: 'Automotive',
    image: '/imgi_21_opai-img-281.webp',
  },
  {
    title: 'Legal',
    image: '/imgi_26_opai-img-286.webp',
  },
  {
    title: 'Real Estate',
    image: '/imgi_27_opai-img-287.webp',
  },
]

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] font-bold text-white md:text-[11px]">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Industries We Serve
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

const We = () => {
  const [activeIndustry, setActiveIndustry] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndustry((current) => (current + 1) % industries.length)
    }, 4800)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-black px-5 pt-20 text-white md:px-8 lg:px-6 lg:pb-6 lg:pt-24">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(102,84,255,0.38) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.52)_0,rgba(10,8,28,0.35)_28%,rgba(0,0,0,0.92)_72%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.16)_22%,rgba(0,0,0,0.55)_76%,#000_100%)]" />

      <div className="relative mx-auto max-w-[1840px]">
        <div className="mx-auto flex min-h-[360px] max-w-4xl flex-col items-center justify-center border-t border-white/10 text-center md:min-h-[410px]">
          <Badge />
          <h2 className="mx-auto mt-8 max-w-3xl text-2xl font-normal leading-[1.16] tracking-normal text-white md:text-[50px]">
            Cross-Industry expertise,
            <span className="block">proven Impact</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xs font-semibold leading-relaxed text-white/45 md:text-sm">
            From startups to enterprises, we bring deep industry insights and
            proven results to every engagement.
          </p>
        </div>

        <div className="relative z-10 rounded-[1.35rem] border border-white/10 bg-[#11141d]/92 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="relative flex gap-1 overflow-x-auto [scrollbar-width:none] md:grid md:grid-cols-8 [&::-webkit-scrollbar]:hidden">
            <span
              className="pointer-events-none absolute bottom-1 top-1 hidden rounded-[1rem] bg-white shadow-[0_0_30px_rgba(255,255,255,0.12)] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:block"
              style={{
                width: `${100 / industries.length}%`,
                transform: `translateX(${activeIndustry * 100}%)`,
              }}
            />
            {industries.map((industry, index) => {
              const isActive = index === activeIndustry

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  className={`relative z-10 flex h-14 min-w-[150px] flex-1 items-center justify-center gap-3 rounded-[1rem] px-4 font-mono text-sm font-bold transition-colors duration-700 md:h-16 md:min-w-0 md:text-base ${
                    isActive
                      ? 'bg-white text-black md:bg-transparent'
                      : 'text-white/35 hover:bg-white/[0.04] hover:text-white/70'
                  }`}
                >
                  <span>{industry.title}</span>
                  {isActive && <FiArrowUpRight className="text-base" />}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative mt-8 h-[320px] overflow-hidden rounded-[1.75rem] bg-white/[0.03] md:mt-10 md:h-[460px] md:rounded-[2rem] lg:h-[560px]">
          {industries.map((industry, index) => (
            <img
              key={industry.title}
              src={industry.image}
              alt={`${industry.title} industry`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                index === activeIndustry ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center pb-4 pt-10 md:pt-12">
          <button
            type="button"
            className="group inline-flex h-14 items-center gap-5 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-mono text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 md:h-16 md:pl-9 md:text-base"
          >
            Explore our blogs
            <ButtonIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default We
