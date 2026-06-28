import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const useCases = [
  {
    title: 'Healthcare',
    text: 'AI-powered diagnostics and patient engagement tools.',
    image: '/imgi_31_opai-img-289.jpg',
    stats: [
      ['25%', 'Faster diagnosis'],
      ['40%', 'Increase'],
    ],
  },
  {
    title: 'E-commerce',
    text: 'Personalized recommendations and automated customer service.',
    image: '/imgi_32_opai-img-290.jpg',
    stats: [
      ['30%', 'Boost'],
      ['60%', 'Reduction'],
    ],
  },
  {
    title: 'Finance',
    text: 'Fraud detection and operational efficiency improvements.',
    image: '/imgi_33_opai-img-291.jpg',
    stats: [
      ['30%', 'Fraud detection'],
      ['30%', 'Reduction'],
    ],
  },
  {
    title: 'Education',
    text: 'Intelligent tutoring systems and adaptive learning tools.',
    image: '/imgi_34_opai-img-292.jpg',
    stats: [
      ['30%', 'Operational efficiency'],
      ['20%', 'Lowered downtime'],
    ],
  },
]

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

const UseCard = ({ title, text, image, stats }) => (
  <article className="group relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[#10131b] md:min-h-[470px] md:rounded-[2.2rem] xl:min-h-[520px]">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

    <div className="absolute inset-x-0 bottom-0 rounded-b-[1.75rem] bg-zinc-950/62 px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_-18px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl md:rounded-b-[2.2rem] md:px-9 md:py-8">
      <div className="grid gap-5 md:grid-cols-[1.35fr_0.62fr_0.62fr] md:items-center">
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-white/86 md:text-[28px]">
            {title}
          </h3>
          <p className="mt-2 max-w-xl text-sm font-semibold leading-relaxed text-white/54 md:text-[15px]">
            {text}
          </p>
        </div>

        {stats.map(([value, label]) => (
          <div
            key={`${value}-${label}`}
            className="border-white/10 md:border-l md:pl-8"
          >
            <p className="text-2xl font-semibold leading-none text-white/86 md:text-[26px]">
              {value}
            </p>
            <p className="mt-2 text-xs font-semibold leading-snug text-white/48 md:text-[13px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </article>
)

const Use = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-16 pt-10 text-white md:px-8 lg:px-6 lg:pb-24 lg:pt-14">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(102,84,255,0.38) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.48)_0,rgba(10,8,28,0.3)_30%,rgba(0,0,0,0.92)_72%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.18)_24%,rgba(0,0,0,0.58)_78%,#000_100%)]" />

      <div className="relative mx-auto max-w-[1840px]">
        <div className="grid gap-8 md:grid-cols-2 xl:gap-12">
          {useCases.map((useCase) => (
            <UseCard key={useCase.title} {...useCase} />
          ))}
        </div>

        <div className="flex justify-center pb-2 pt-14 md:pt-20">
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

export default Use
