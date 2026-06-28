import React from 'react'
import { FiArrowUpRight, FiCode, FiHeart, FiVideo } from 'react-icons/fi'
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
      className={`grid size-14 shrink-0 place-items-center rounded-xl bg-[#f2f5f8] text-[28px] shadow-[0_14px_35px_rgba(0,0,0,0.35)] md:size-[70px] md:text-4xl ${logo.rotate}`}
      style={{ marginLeft: index === 0 ? 0 : '-10px' }}
    >
      <Icon className={logo.color} />
    </div>
  )
}

const Trust = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 text-white md:px-8 lg:px-6 lg:py-20">
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
        <div className="mx-auto flex min-h-[560px] max-w-5xl flex-col items-center justify-center border-t border-[#6654ff]/55 text-center md:min-h-[640px]">
          <Badge>Trusted by Forward-Thinking Companies</Badge>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-normal leading-[1.12] tracking-normal text-white md:text-[50px]">
            From lean startups to
            <br />
            global enterprises
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs font-semibold leading-relaxed text-white/45 md:text-sm">
            From startups to enterprises, we bring deep industry insights and
            proven results to every engagement.
          </p>

          <div className="relative mt-24 w-full overflow-hidden pb-12 pt-4 md:mt-28">
            <div className="mx-auto flex max-w-4xl items-end justify-center">
              {trustedLogos.map((logo, index) => (
                <LogoTile key={index} logo={logo} index={index} />
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-auto h-28 max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(23,27,35,0.92)_0%,rgba(9,11,16,0.9)_48%,rgba(0,0,0,0)_78%)] blur-sm" />
          </div>
        </div>

        <div className="mx-auto flex min-h-[540px] max-w-5xl flex-col items-center justify-center border-t border-[#6654ff]/55 text-center md:min-h-[620px]">
          <Badge>Trusted by Forward-Thinking Companies</Badge>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-normal leading-[1.12] tracking-normal text-white md:text-[50px]">
            Let's Create Intelligent
            <br />
            Solutions Together
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-xs font-semibold leading-relaxed text-white/45 md:text-sm">
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
