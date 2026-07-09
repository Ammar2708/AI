import React, { useEffect, useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
  FiX,
} from "react-icons/fi";
import { QuoteModalContext } from "./QuoteModalContext";
// eslint-disable-next-line react-refresh/only-export-components
export { useQuoteModal } from "./QuoteModalContext";

const contactEmail = "thecypherlab12@gmail.com";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Field = ({ id, label, icon, as = "input", ...props }) => {
  const Component = as;
  const isTextarea = as === "textarea";

  return (
    <label htmlFor={id} className="grid gap-1.5">
      <span className="text-xs font-semibold text-white/62">{label}</span>
      <span className="relative block">
        <span
          className={`pointer-events-none absolute left-3.5 text-base text-white/34 ${
            isTextarea ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
        >
          {React.createElement(icon)}
        </span>
        <Component
          id={id}
          className={`w-full rounded-xl border border-white/10 bg-[#0b0f15]/82 px-10 text-sm font-semibold text-white outline-none transition placeholder:text-white/34 focus:border-[#8b5cf6]/80 focus:bg-[#0e1320] ${
            isTextarea
              ? "min-h-[86px] resize-none py-3 md:min-h-[96px]"
              : "h-10 md:h-11"
          }`}
          {...props}
        />
      </span>
    </label>
  );
};

const QuoteModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New project quote request from ${form.name || "website"}`);
    const body = encodeURIComponent(
      [
        `Full name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Service: ${form.service}`,
        "",
        "Project message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/74 px-3 py-3 backdrop-blur-md md:px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-[900px] overflow-hidden rounded-2xl border border-white/10 bg-[#070a11] text-white shadow-[0_32px_120px_rgba(0,0,0,0.72)] max-md:max-h-[calc(100dvh-1.5rem)] max-md:overflow-y-auto md:rounded-[24px]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(102,84,255,0.34),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(255,45,120,0.2),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(15,194,255,0.14),transparent_34%)]" />

        <div className="relative border-b border-white/10 bg-[linear-gradient(115deg,#ffffff_0%,#f4f0ff_42%,#d946ef_100%)] px-5 py-3.5 text-black md:px-7 md:py-4">
          <button
            type="button"
            aria-label="Close quote form"
            onClick={onClose}
            className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-black/10 text-xl text-black/70 transition hover:bg-black hover:text-white md:size-9"
          >
            <FiX />
          </button>

          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-black/54">
            Start a project
          </p>
          <h2
            id="quote-modal-title"
            className="mt-1 max-w-2xl text-2xl font-semibold leading-tight tracking-normal md:text-[34px]"
          >
            Get a Quote
          </h2>
          <p className="mt-1.5 max-w-2xl pr-8 text-xs font-semibold leading-5 text-black/62 md:text-[13px]">
            Tell us about your website, app, design, SEO, or AI project. We will get back shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative grid gap-3.5 px-5 py-4 md:px-7 md:py-5">
          <div className="grid gap-3.5 md:grid-cols-2">
            <Field
              id="quote-name"
              label="Full Name"
              name="name"
              icon={FiUser}
              placeholder="John Carter"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Field
              id="quote-email"
              label="Email"
              name="email"
              type="email"
              icon={FiMail}
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Field
              id="quote-phone"
              label="Phone"
              name="phone"
              type="tel"
              icon={FiPhone}
              placeholder="+1..."
              value={form.phone}
              onChange={handleChange}
            />
            <Field
              id="quote-service"
              label="Service"
              name="service"
              icon={FiCheckCircle}
              placeholder="Web design, SEO, AI consulting..."
              value={form.service}
              onChange={handleChange}
            />
          </div>

          <Field
            id="quote-message"
            label="Message"
            name="message"
            as="textarea"
            icon={FiMessageSquare}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[11px] font-semibold leading-4 text-white/42">
              Your request opens in your email app so you can review it before sending.
            </p>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center gap-2.5 rounded-full bg-white px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200 md:h-11"
            >
              Send Message
              <FiSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const QuoteModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      openQuoteModal: () => setOpen(true),
      closeQuoteModal: () => setOpen(false),
    }),
    []
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </QuoteModalContext.Provider>
  );
};
