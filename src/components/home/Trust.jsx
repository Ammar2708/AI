import React from 'react'
import { FiAperture, FiArrowUpRight, FiCode, FiHeart, FiVideo } from 'react-icons/fi'
import {
  SiFirebase,
  SiMastercard,
  SiMocha,
  SiOpenai,
  SiStripe,
  SiWhatsapp,
  SiZapier,
} from 'react-icons/si'

const trustedLogos = [
  { icon: SiZapier, color: 'text-blue-600', rotate: '-rotate-6' },
  { icon: FiCode, color: 'text-black', rotate: 'rotate-6' },
  { icon: SiMocha, color: 'text-black', rotate: '-rotate-12' },
  { icon: SiFirebase, color: 'text-cyan-500', rotate: 'rotate-6' },
  { icon: SiWhatsapp, color: 'text-green-500', rotate: '-rotate-12' },
  { icon: SiOpenai, color: 'text-black', rotate: 'rotate-6' },
  { icon: FiHeart, color: 'text-pink-500', rotate: '-rotate-12' },
  { icon: FiCode, color: 'text-black', rotate: 'rotate-6' },
  { icon: SiMastercard, color: 'text-black', rotate: '-rotate-6' },
  { icon: FiVideo, color: 'text-green-500', rotate: 'rotate-6' },
  { icon: SiStripe, color: 'text-[#635bff]', rotate: 'rotate-12' },
]

const Badge = ({ children }) => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] font-bold text-white md:text-[11px]">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    {children}
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

const LogoTile = ({ logo, index }) => {
  const Icon = logo.icon

  return (
    <div
      className={`grid size-14 shrink-0 place-items-center rounded-xl bg-[#f2f5f8] text-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.45)] md:size-[82px] md:text-[44px] ${logo.rotate}`}
      style={{ marginLeft: index === 0 ? 0 : '-12px' }}
    >
      <Icon className={logo.color} />
    </div>
  )
}

const SideBadge = () => (
  <div className="fixed right-0 top-[55%] z-40 hidden h-[380px] w-[84px] -translate-y-1/2 items-center justify-center rounded-l-2xl bg-[#ff5a14] text-white shadow-[-14px_0_35px_rgba(0,0,0,0.35)] lg:flex">
    <div className="flex flex-col items-center gap-5">
      <span className="[writing-mode:vertical-rl] rotate-180 text-[24px] font-bold leading-none">
        10+ Pre-built websites
      </span>
      <FiAperture className="text-[54px]" />
    </div>
  </div>
)

const Trust = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 text-white md:px-8 lg:px-6">
      <SideBadge />
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(102,84,255,0.34) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,29,112,0.5)_0,rgba(10,8,28,0.28)_34%,rgba(0,0,0,0.94)_74%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.72)_75%,#000_100%)]" />

      <div className="relative mx-auto max-w-[1840px]">
        <div className="mx-auto mb-5 flex min-h-[722px] max-w-6xl flex-col items-center overflow-hidden border-t border-white/5 pt-[88px] text-center">
          <Badge>Trusted by Forward-Thinking Companies</Badge>

          <h2 className="mx-auto mt-[54px] max-w-4xl text-4xl font-normal leading-[1.06] tracking-normal text-white md:text-[50px]">
            From lean startups to
            <br />
            global enterprises
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-[1.55] text-white/45 md:text-[10px]">
            From startups to enterprises, we bring deep industry insights and
            proven results to every engagement.
          </p>

          <div className="relative mt-[116px] w-full overflow-hidden pb-[80px] pt-4">
            <div className="relative z-10 mx-auto flex max-w-5xl items-end justify-center">
              {trustedLogos.map((logo, index) => (
                <LogoTile key={index} logo={logo} index={index} />
              ))}
            </div>
            <div className="absolute inset-x-[-12%] bottom-0 z-20 h-[82px] bg-[#06080c]" />
            <div className="absolute inset-x-[12%] bottom-9 z-30 h-24 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(218,228,240,0.76)_0%,rgba(92,104,122,0.5)_34%,rgba(7,9,13,0)_75%)] blur-2xl" />
            <div className="absolute inset-x-[16%] bottom-16 z-30 h-8 bg-white/10 blur-2xl" />
          </div>
        </div>

        <div className="mx-auto flex min-h-[540px] max-w-5xl flex-col items-center justify-center border-t border-[#6654ff]/55 text-center md:min-h-[620px]">
          <Badge>Trusted by Forward-Thinking Companies</Badge>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-normal leading-[1.12] tracking-normal text-white md:text-[50px]">
            Let's Create Intelligent
            <br />
            Solutions Together
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-xs font-semibold leading-relaxed text-white/45 md:text-[19px]">
            Whether you're exploring AI or ready to scale,
            <br />
            we're here to help.
          </p>

          <button
            type="button"
            className="group mt-20 inline-flex h-14 items-center gap-5 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-mono text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 md:h-16 md:pl-9 md:text-base"
          >
            Let's accelerate
            <ButtonIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Trust
