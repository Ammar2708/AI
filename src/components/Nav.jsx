import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiArrowDown,
  FiBarChart2,
  FiBookOpen,
  FiBox,
  FiChevronDown,
  FiChevronRight,
  FiCode,
  FiDownload,
  FiFileText,
  FiLayers,
  FiLink,
  FiMenu,
  FiPenTool,
  FiPhone,
  FiSearch,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiX,
  FiZap,
} from "react-icons/fi";



const innerItems = [
  { to: "/about", label: "About", icon: FiBox },
  { to: "#", label: "Blog", icon: FiFileText },
  { to: "/contact", label: "Contact", icon: FiPhone },
  { to: "/integration", label: "Integration", icon: FiLink },
  { to: "/process", label: "Process", icon: FiBarChart2 },
  
];

const platformLinks = [
  { label: "Registration", icon: FiStar },
  { label: "Portfolio", icon: FiZap },
  { label: "Our Brandkit", icon: FiLayers },
  { label: "Download App", icon: FiDownload },
  { label: "Press", icon: FiFileText },
  { label: "Resources", icon: FiBookOpen },
];

const serviceItems = [
  {
    label: "Web Development",
    icon: FiCode,
    items: [
      { label: "Website development", to: "/services/website-development" },
      "Corporate Website Development",
      "Websites for startups",
      "Landings and promo sites",
      "E-commerce development",
      "Web applications development",
      "WordPress development",
    ],
  },
  {
    label: "Design",
    icon: FiPenTool,
    items: [
      "Web design",
      "Mobile app design",
      "UX, UI design",
      "Logo design service",
      "Brand Identity",
      "Banner ad design",
    ],
  },
  {
    label: "Digital Marketing",
    icon: FiTrendingUp,
    items: [
      "Conversion marketing",
      "Content marketing",
      "PPC services",
      "Social media marketing services",
    ],
  },
  {
    label: "SEO Services",
    icon: FiSearch,
    items: [
      "Tech SEO",
      "On-page SEO",
      "Off-page SEO",
      "SEO copywriting",
      "SEO Pricing, SEO Packages",
    ],
  },
  {
    label: "Fixed price web development",
    icon: FiShield,
  },
];

const navItems = [
  { to: "/services", label: "Services", dropdown: "services" },
  { to: "/about", label: "About" },
  { to: "/integration", label: "Integration" },
  { to: "/process", label: "Process" },
];

const Logo = () => (
  <NavLink
    to="/"
    aria-label="Cypher Lab home"
    className="flex shrink-0 items-center gap-3 text-white"
  >
    <span className="grid size-12 place-items-center overflow-hidden rounded-xl border border-white/15 bg-black shadow-lg max-sm:size-11">
      <img
        src="/1logo.png"
        alt=""
        className="h-full w-full object-cover"
        aria-hidden="true"
      />
    </span>
    <span className="grid leading-none">
      <span className="text-2xl font-bold tracking-tight max-sm:text-xl">
        Cypher
      </span>
      <span className="ml-7 mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-white/55 max-sm:text-[10px]">
        Lab
      </span>
    </span>
  </NavLink>
);

const IconBox = ({ icon }) => (
  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/8 text-base text-white/85">
    {React.createElement(icon)}
  </span>
);

const TryButton = () => (
  <NavLink
    to="/Pricing"
    className="inline-flex h-11 items-center gap-3 rounded-full bg-white px-6 font-mono text-lg text-black transition hover:bg-zinc-200"
  >
    Try now
    <FiArrowDown className="-rotate-90 text-base" />
  </NavLink>
);



const InnerMenu = () => (
  <div className="absolute left-1/2 top-full z-40 hidden w-[280px] -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
    <div className="grid gap-4 rounded-2xl border border-white/10 bg-[#121720] px-5 py-5 shadow-2xl">
      {innerItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          className="flex items-center gap-3 text-white transition hover:text-white/70"
        >
          <IconBox icon={item.icon} />
          <span className="text-base font-semibold">{item.label}</span>
        </NavLink>
      ))}
    </div>
  </div>
);

const ServiceMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = activeIndex === null ? null : serviceItems[activeIndex];

  return (
    <div className="absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
      <div className="flex items-start gap-4" onMouseLeave={() => setActiveIndex(null)}>
        <div className="w-[315px] rounded-3xl border border-white/10 bg-[#121720] px-5 py-5 shadow-2xl">
          {serviceItems.map((item, index) => (
            <NavLink
              key={item.label}
              to="/services"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`flex min-h-[56px] items-center gap-3 rounded-xl px-2 text-white transition ${
                activeIndex === index ? "text-white" : "text-white/85 hover:text-white"
              }`}
            >
              <IconBox icon={item.icon} />
              <span className="flex-1 text-base font-bold leading-tight tracking-normal">
                {item.label}
              </span>
              {item.items && (
                <FiChevronRight
                  className={`text-base text-white/70 transition ${
                    activeIndex === index ? "rotate-90 text-white" : ""
                  }`}
                />
              )}
            </NavLink>
          ))}
        </div>

        {activeItem?.items && (
          <div className="w-[340px] rounded-3xl border border-white/10 bg-[#121720] px-5 py-5 shadow-2xl">
            {activeItem.items.map((item) => {
              const label = typeof item === "string" ? item : item.label;
              const to = typeof item === "string" ? "/services" : item.to;

              return (
              <NavLink
                key={label}
                to={to}
                className="block rounded-xl px-3 py-2.5 text-base font-semibold tracking-normal text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const PlatformMenu = () => (
  <div className="fixed left-1/2 top-20 z-40 hidden w-[900px] -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
    <div className="grid grid-cols-[240px_1fr_1fr] gap-5 rounded-2xl border border-white/10 bg-[#121720] p-4 shadow-2xl">
      <div>
        <p className="mb-5 text-sm font-semibold text-white/55">Overview</p>
        <div className="grid gap-4">
          {platformLinks.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-white">
              <IconBox icon={item.icon} />
              <span className="text-base font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <PreviewCard variant="chat" title="Merge Unified" />
      <PreviewCard variant="data" title="Combine Unified" />
    </div>
  </div>
);

const MenuDetail = ({ label, text, icon }) => (
  <div className="flex gap-3">
    <IconBox icon={icon} />
    <div>
      <h3 className="text-base font-bold leading-tight text-white">{label}</h3>
      <p className="mt-0.5 max-w-[190px] text-sm font-semibold leading-snug text-white/55">
        {text}
      </p>
    </div>
  </div>
);

const PreviewCard = ({ title, variant }) => (
  <div className="rounded-xl border border-white/10 p-3">
    <div
      className={`h-[200px] rounded-lg ${
        variant === "chat"
          ? "bg-[#070b15] p-4"
          : "bg-[radial-gradient(circle_at_20%_45%,#ff6b00_0,#ff6b00_14%,transparent_32%),radial-gradient(circle_at_70%_45%,#086aff_0,#0fc2ff_24%,transparent_41%),#dfe6ea]"
      }`}
    >
      {variant === "chat" && (
        <div className="h-full rounded-lg bg-[linear-gradient(#111827_0_10%,#070b15_10%_88%,#171b26_88%)] p-5 text-[8px] text-white/75">
          <div className="mx-auto mb-8 h-3 w-44 rounded-full border border-white/10" />
          <p>At our AI agency, we believe in the power of innovation.</p>
          <p className="mt-10 text-right">Our AI-driven solutions help you achieve goals.</p>
          <p className="mt-9">We have experience delivering projects.</p>
        </div>
      )}
    </div>
    <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
    <p className="mt-1 text-sm font-semibold leading-snug text-white/55">
      One API. Countless product integrations.
    </p>
  </div>
);

const Dropdown = ({ type }) => {
  if (type === "company") return <CompanyMenu />;
  if (type === "services") return <ServiceMenu />;
  if (type === "inner") return <InnerMenu />;
  if (type === "platform") return <PlatformMenu />;
  return null;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full text-white transition-colors duration-500 ${
        isScrolled || menuOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="relative flex h-[92px] items-center justify-between px-4 md:px-8 lg:px-9">
        <Logo />

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative py-7">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-mono text-base font-bold tracking-[0.16em] transition ${
                    isActive ? "text-white" : "text-white/55 hover:text-white"
                  }`
                }
              >
                {item.label}
                {item.dropdown && (
                  <FiChevronDown className="text-sm transition group-hover:rotate-180" />
                )}
              </NavLink>
              <Dropdown type={item.dropdown} />
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <TryButton />
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-full border border-white/15 text-xl lg:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0f15] px-5 py-5 lg:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-lg font-semibold ${
                    isActive ? "bg-white text-black" : "bg-white/5 text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-5">
            <TryButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
