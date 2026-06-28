import React, { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: 'OptimAI made my course sound studio-quality in hours instead of weeks.',
    role: 'Content Creator',
    name: 'Sarah M.',
    image: '/imgi_39_opai-avatar-img-249.jpg',
  },
  {
    quote: 'The voice quality is incredibly natural and professional.',
    role: 'Product Lead',
    name: 'Daniel R.',
    image: '/imgi_36_opai-avatar-img-251.jpg',
  },
  {
    quote: 'We shipped personalized AI workflows without slowing our team down.',
    role: 'Operations Director',
    name: 'Amina K.',
    image: '/imgi_35_opai-avatar-img-250.jpg',
  },
  {
    quote: 'The consulting process was clear, fast, and genuinely useful.',
    role: 'Founder',
    name: 'Lina P.',
    image: '/imgi_37_opai-avatar-img-252.jpg',
  },
  {
    quote: 'Our support team now resolves complex requests with much less effort.',
    role: 'Customer Success',
    name: 'Mateo C.',
    image: '/imgi_38_opai-avatar-img-253.jpg',
  },
]

const Badge = () => (
  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] font-bold text-white md:text-[11px]">
    <span className="size-2.5 rounded-full bg-[#6654ff]" />
    Testimonials
  </div>
)

const Testominals = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]
  const previous =
    testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length]
  const next = testimonials[(activeIndex + 1) % testimonials.length]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5200)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-black px-5 pb-16 pt-14 text-white md:px-8 lg:px-6 lg:pb-24 lg:pt-16">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '82px 42px',
          transform: 'perspective(900px) rotateX(64deg) translateY(210px)',
          transformOrigin: 'center top',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,25,96,0.32)_0,rgba(0,0,0,0.84)_48%,#000_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.2)_22%,rgba(0,0,0,0.64)_72%,#000_100%)]" />

      <div className="relative mx-auto max-w-[1840px] text-center">
        <div className="mx-auto max-w-5xl border-t border-white/10 pt-16 md:pt-20">
          <Badge />
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-normal leading-[1.12] tracking-normal text-white md:text-[52px]">
            What our clients say
          </h2>
        </div>

        <div className="relative mt-20 flex min-h-[420px] items-center justify-center md:mt-24 md:min-h-[500px]">
          <img
            src={previous.image}
            alt=""
            className="absolute left-0 hidden h-[330px] w-[32%] rounded-[1.4rem] object-cover opacity-45 blur-md md:block"
            aria-hidden="true"
          />
          <img
            src={next.image}
            alt=""
            className="absolute right-0 hidden h-[330px] w-[32%] rounded-[1.4rem] object-cover opacity-45 blur-md md:block"
            aria-hidden="true"
          />

          <img
            key={active.image}
            src={active.image}
            alt={active.name}
            className="relative z-10 h-[360px] w-full max-w-[520px] rounded-[1.4rem] object-cover shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition duration-700 md:h-[460px]"
          />
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <p className="text-2xl font-semibold leading-snug text-white/78 md:text-[28px]">
            "{active.quote}"
          </p>
          <div className="mt-14">
            <p className="text-base font-semibold text-white md:text-lg">
              {active.role}
            </p>
            <p className="mt-2 text-sm font-semibold text-white/42 md:text-base">
              {active.name}
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => setActiveIndex(index)}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? 'w-10 bg-white'
                  : 'w-3 bg-white/15 hover:bg-white/35'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testominals
