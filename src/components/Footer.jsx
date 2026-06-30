import { createElement } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Trust from "./home/Trust";

const companyLinks = ["About Us", "Our Team", "Case Studies", "Contact Us", "Careers"];

const serviceLinks = [
  "AI Strategy",
  "Data Analytics",
  "Machine Learning",
  "AI Implementation",
  "Consulting Services",
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "X (Twitter)", icon: FaXTwitter },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "YouTube", icon: FaYoutube },
];

const FooterLogo = () => (
  <div className="flex items-center gap-3">
    <span className="grid size-11 overflow-hidden rounded-xl border border-white/15 bg-black">
      <img src="/1logo.png" alt="" className="h-full w-full object-cover" />
    </span>
    <div className="leading-none">
      <p className="text-2xl font-bold tracking-tight text-white">Cypher</p>
      <p className="ml-7 mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.34em] text-white/55">
        Lab
      </p>
    </div>
  </div>
);

const LinkList = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-bold text-white md:text-base">{title}</h3>
    <ul className="mt-5 grid gap-4 text-sm font-semibold text-white/48">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="transition hover:text-white">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div>
       <Trust/>
    <footer className="bg-black px-4 py-8 text-white md:px-8 lg:px-10">
      <div className="relative mx-auto max-w-[1840px] overflow-hidden rounded-[28px] border border-white/10 bg-black">
        <img
          src="/bg1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom opacity-95"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 px-7 py-10 md:px-12 lg:px-14 lg:py-12">
          <FooterLogo />

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr_1.55fr] lg:gap-16">
            <LinkList title="Company" links={companyLinks} />
            <LinkList title="Services" links={serviceLinks} />

            <div>
              <h3 className="text-sm font-bold text-white md:text-base">Follow Us</h3>
              <ul className="mt-5 grid gap-4 text-sm font-semibold text-white/48">
                {socialLinks.map(({ label, icon }) => (
                  <li key={label}>
                    <a href="#" className="flex items-center gap-3 transition hover:text-white">
                      <span className="grid size-6 place-items-center rounded-full border border-white/75 text-xs text-white">
                        {createElement(icon)}
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-xl">
              <h3 className="text-sm font-bold text-white md:text-base">Address:</h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/48">
                30 North Gould Street, Sheridan, WY 8280
              </p>

              <h3 className="mt-8 text-sm font-bold text-white md:text-base">Contact:</h3>
              <div className="mt-3 grid gap-2 text-sm font-semibold text-white/48">
                <a href="tel:+12025550130" className="transition hover:text-white">
                  +1(202) 555-0130
                </a>
                <a href="mailto:hello@cypherlab.com" className="transition hover:text-white">
                  hello@cypherlab.com
                </a>
              </div>

              <form className="mt-8 grid gap-3">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 rounded-full border border-white/12 bg-[#0d1118] px-6 text-sm font-semibold text-white outline-none transition placeholder:text-white/70 focus:border-white/35"
                />
                <button
                  type="button"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-6 font-mono text-sm font-bold tracking-[0.12em] text-black transition hover:bg-zinc-200"
                >
                  Subscribe
                  <FiArrowRight />
                </button>
                <p className="text-xs font-semibold leading-relaxed text-white/45">
                  By subscribing you agree to with our{" "}
                  <a href="#" className="text-white transition hover:text-white/75">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-5 text-xs font-semibold text-white/45 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="transition hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="transition hover:text-white">
                  Cookie Settings
                </a>
              </div>
              <p>(c) 2026 cypher lab. All rights reserved.</p>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
    </div>
  );
};

export default Footer;
