import React from "react";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contactItems = [
  {
    icon: FiMail,
    title: "Email",
    text: "support@optimai.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    text: "+1 (800) 222-3333",
  },
  {
    icon: FiMapPin,
    title: "Address",
    text: "123 Innovation Street, TechCity, CA 94043",
  },
];

const ContactCard = ({ icon, title, text }) => (
  <article className="flex min-h-[104px] items-center gap-4 rounded-[1.5rem] border border-white/10 bg-black px-6 py-5 shadow-[inset_0_1px_0_rgba(102,84,255,0.5)] md:min-h-[116px] md:px-7">
    <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl text-white/70 md:size-16">
      {React.createElement(icon)}
    </div>
    <div>
      <h3 className="text-lg font-semibold leading-tight text-white md:text-xl">
        {title}
      </h3>
      <p className="mt-1.5 text-sm font-semibold leading-relaxed text-white/48 md:text-[15px]">
        {text}
      </p>
    </div>
  </article>
);

const ButtonIcon = () => (
  <span className="relative grid size-10 place-items-center rounded-full bg-[#080b12] md:size-11">
    <span className="grid grid-cols-3 gap-1 opacity-70">
      {Array.from({ length: 9 }).map((_, index) => (
        <span
          key={index}
          className={`size-1 rounded-full bg-white ${
            index % 2 === 0 ? "opacity-95" : "opacity-35"
          }`}
        />
      ))}
    </span>
    <FiArrowUpRight className="absolute text-base text-white md:text-lg" />
  </span>
);

const Field = ({ label, placeholder, type = "text" }) => (
  <label className="block">
    <span className="text-base font-semibold text-white md:text-lg">{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-3 h-14 w-full rounded-2xl border border-white/10 bg-black/45 px-5 text-sm font-semibold text-white outline-none transition placeholder:text-white/42 focus:border-[#6654ff]/70 md:h-16 md:text-[15px]"
    />
  </label>
);

const Contact = () => {
  return (
    <section className="overflow-hidden bg-black px-5 pb-16 pt-36 text-white md:px-8 lg:px-9 lg:pb-24 lg:pt-40">
      <div className="mx-auto grid max-w-[1840px] gap-10 lg:grid-cols-[0.78fr_1.12fr] lg:gap-16">
        <div className="flex min-h-[560px] flex-col justify-center">
          <h1 className="max-w-3xl text-4xl font-normal leading-[1.08] tracking-normal text-white md:text-5xl lg:text-[56px]">
            Reach out - We'll get back within 24 hours
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/45 md:text-[15px]">
            Fill out the form below, and a member of our team will be in touch
            shortly.
          </p>

          <div className="mt-12 grid gap-5">
            {contactItems.map((item) => (
              <ContactCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <form className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-6 shadow-[inset_0_1px_0_rgba(102,84,255,0.5)] md:p-9 lg:p-12">
          <div
            className="absolute inset-0 opacity-55"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(102,84,255,0.36) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_0%,rgba(35,25,96,0.38)_0,rgba(0,0,0,0.64)_44%,#000_100%)]" />

          <div className="relative grid gap-6">
            <Field label="Name" placeholder="Enter your Name" />
            <Field label="Email" type="email" placeholder="Enter your email" />

            <label className="block">
              <span className="text-base font-semibold text-white md:text-lg">
                Your message
              </span>
              <textarea
                placeholder="Type your message"
                className="mt-3 min-h-[180px] w-full resize-y rounded-2xl border border-white/10 bg-black/45 px-5 py-5 text-sm font-semibold text-white outline-none transition placeholder:text-white/42 focus:border-[#6654ff]/70 md:min-h-[220px] md:text-[15px]"
              />
            </label>

            <label className="flex w-fit cursor-pointer items-center gap-3 text-sm font-semibold text-white/55 md:text-[15px]">
              <input
                type="checkbox"
                className="size-5 appearance-none rounded-md border border-white/20 bg-black checked:border-[#6654ff] checked:bg-[#6654ff]"
              />
              I accept the Terms
            </label>

            <button
              type="submit"
              className="group inline-flex h-[52px] w-fit items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 font-mono text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 md:h-14 md:pl-8 md:text-[15px]"
            >
              Submit Request
              <ButtonIcon />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
