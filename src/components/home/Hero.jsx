import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/v1.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-screen items-end px-5 pb-16 pt-32 md:px-10 lg:px-14">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex -space-x-3">
              {["#1dd3b0", "#ff5f1f", "#00a7b5", "#ef476f"].map((color) => (
                <span
                  key={color}
                  className="size-9 rounded-full border-2 border-black"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold">Trusted by 20k+</p>
              <p className="text-xs font-semibold text-white/55">
                Customers across the globe
              </p>
            </div>
          </div>

          <h1 className="max-w-4xl text-4xl font-normal leading-[1.08] tracking-normal md:text-6xl lg:text-7xl">
            Accelerate your business with expert AI consulting.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-white/55 md:text-lg">
            We assist you in strategizing, building, and scaling innovative
            AI-driven solutions that solve real business challenges.
          </p>

          <button className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-white px-5 font-mono text-sm text-black transition hover:bg-zinc-200">
            Try now
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
