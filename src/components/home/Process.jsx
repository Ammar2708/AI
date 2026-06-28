import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const steps = [
  {
    number: '1',
    title: 'Discovery & alignment',
    text: 'Understand your business, define challenges',
    type: 'tags',
  },
  {
    number: '2',
    title: 'Data evaluation',
    text: 'Audit, clean, and prepare your data assets',
    type: 'chart',
  },
  {
    number: '3',
    title: 'Solution design',
    text: 'Create the right models and strategy',
    type: 'puzzle',
  },
  {
    number: '4',
    title: 'Deployment & testing',
    text: 'Launch, monitor, and iterate',
    type: 'code',
  },
]

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] font-bold text-white md:text-[11px]">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Development Process
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

const TagGraphic = () => (
  <div className="grid h-full place-items-center overflow-hidden">
    <img
      src="/imgi_29_vector-19.svg"
      alt=""
      className="h-56 w-[300px] -translate-y-3 object-contain opacity-90"
      aria-hidden="true"
    />
  </div>
)

const ChartGraphic = () => {
  const bars = ['h-24', 'h-16', 'h-32', 'h-20', 'h-28', 'h-32', 'h-12']

  return (
    <div className="flex h-full flex-col items-center justify-end gap-4 px-5 pb-6">
      <div className="flex h-36 items-end gap-4">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className={`${height} w-4 rounded-t bg-gradient-to-b from-[#6654ff] to-[#151827] shadow-[0_0_20px_rgba(102,84,255,0.24)]`}
          />
        ))}
      </div>
      <div className="flex w-full max-w-64 justify-between px-1 font-mono text-sm font-bold text-white/30">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
    </div>
  )
}

const PuzzleGraphic = () => (
  <div className="grid h-full place-items-center">
    <div className="relative size-40 opacity-90">
      <span className="absolute left-4 top-11 size-24 rounded-[1.15rem] bg-[#171b27] shadow-[inset_0_0_0_1px_rgba(102,84,255,0.42)] before:absolute before:-right-4 before:top-9 before:size-8 before:rounded-full before:bg-[#171b27] after:absolute after:left-9 after:-top-4 after:size-8 after:rounded-full after:bg-[#171b27]" />
      <span className="absolute right-3 top-3 size-24 rounded-[1.15rem] bg-gradient-to-br from-[#6654ff] to-[#1c1f31] before:absolute before:-left-4 before:top-9 before:size-8 before:rounded-full before:bg-[#6654ff] after:absolute after:right-8 after:-bottom-4 after:size-8 after:rounded-full after:bg-[#1c1f31]" />
      <span className="absolute bottom-2 left-10 size-24 rounded-[1.15rem] bg-[#202431] shadow-[inset_0_0_0_1px_rgba(102,84,255,0.4)] before:absolute before:-right-4 before:top-9 before:size-8 before:rounded-full before:bg-[#202431]" />
    </div>
  </div>
)

const CodeGraphic = () => (
  <div className="h-full overflow-hidden rounded-[2rem]">
    <img
      src="/imgi_30_vector-20.webp"
      alt=""
      className="h-full w-full object-cover object-top opacity-80"
      aria-hidden="true"
    />
  </div>
)

const Visual = ({ type }) => {
  if (type === 'tags') return <TagGraphic />
  if (type === 'chart') return <ChartGraphic />
  if (type === 'puzzle') return <PuzzleGraphic />
  return <CodeGraphic />
}

const ProcessCard = ({ number, title, text, type }) => (
  <article className="relative flex min-h-[480px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10131b] px-6 pb-8 pt-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:min-h-[520px] md:rounded-[2.25rem] md:px-8 md:pt-8">
    <span className="font-mono text-4xl font-bold leading-none text-black [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] md:text-[48px]">
      {number}
    </span>

    <div className="mt-7 h-[190px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1018] md:h-[210px]">
      <Visual type={type} />
    </div>

    <div className="mt-auto pt-7">
      <h3 className="mx-auto max-w-[260px] text-lg font-semibold leading-[1.28] text-white/78 md:text-[24px]">
        {title}
      </h3>
      <p className="mx-auto mt-3 max-w-[260px] text-xs font-semibold leading-relaxed text-white/42 md:text-sm">
        {text}
      </p>
    </div>
  </article>
)

const Process = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-10 pt-6 text-white md:px-8 md:pt-8 lg:px-6 lg:pb-20 lg:pt-8">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(102,84,255,0.38) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.52)_0,rgba(10,8,28,0.34)_28%,rgba(0,0,0,0.92)_72%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.12)_22%,rgba(0,0,0,0.68)_82%,#000_100%)]" />

      <div className="relative mx-auto max-w-[1840px]">
        <div className="mx-auto flex min-h-[300px] max-w-4xl flex-col items-center justify-center border-t border-white/10 text-center md:min-h-[340px]">
          <Badge />
          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-normal leading-[1.16] tracking-normal text-white md:text-[46px]">
            From Idea to reality,
            <span className="block">step by step</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {steps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>

        <div className="flex justify-center pb-6 pt-14 md:pt-20">
          <button
            type="button"
            className="group inline-flex h-14 items-center gap-5 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-mono text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 md:h-16 md:pl-9 md:text-base"
          >
            Learn more our approach
            <ButtonIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Process
