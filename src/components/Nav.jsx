import React, { useEffect, useRef, useState } from "react";
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
      {
        label: "Corporate Website Development",
        to: "/services/corporate-website-development",
      },
      {
        label: "Websites for startups",
        to: "/services/startup-website-development",
      },
      {
        label: "Landings and promo sites",
        to: "/services/landing-page-development",
      },
      {
        label: "E-commerce development",
        to: "/services/ecommerce-development",
      },
      {
        label: "Web applications development",
        to: "/services/web-application-development",
      },
      { label: "WordPress development", to: "/services/wordpress-development" },
    ],
  },
  {
    label: "Design",
    icon: FiPenTool,
    items: [
      { label: "Web design", to: "/services/web-design-service" },
      { label: "Mobile app design", to: "/services/mobile-app-design" },
          { label: "UX, UI design", to: "/services/ui-ux-design" },
          { label: "Logo design service", to: "/services/logo-design-service" },
          { label: "Brand Identity", to: "/services/brand-identity" },
          { label: "Banner ad design", to: "/services/banner-ad-design" },
        ],
  },
  {
    label: "Digital Marketing",
    icon: FiTrendingUp,
    items: [
      { label: "Conversion marketing", to: "/services/conversion-marketing" },
      { label: "Content marketing", to: "/services/content-marketing" },
      { label: "PPC services", to: "/services/ppc-services" },
      {
        label: "Social media marketing services",
        to: "/services/social-media-marketing",
      },
    ],
  },
  {
    label: "SEO Services",
    icon: FiSearch,
    items: [
      { label: "Tech SEO", to: "/services/tech-seo" },
      { label: "On-page SEO", to: "/services/on-page-seo" },
      { label: "Off-page SEO", to: "/services/off-page-seo" },
      { label: "SEO copywriting", to: "/services/seo-copywriting" },
      { label: "SEO Pricing, SEO Packages", to: "/services/seo-pricing" },
    ],
  },
  {
    label: "Fixed price web development",
    icon: FiShield,
    to: "/services/fixed-price-website",
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
    to="/contact"
    className="inline-flex h-11 items-center gap-3 rounded-full bg-white px-6 font-mono text-lg text-black transition hover:bg-zinc-200"
  >
    Contact us
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
  const closeTimer = useRef(null);
  const activeItem = activeIndex === null ? null : serviceItems[activeIndex];

  const keepSubmenuOpen = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closeSubmenuSoon = () => {
    keepSubmenuOpen();
    closeTimer.current = window.setTimeout(() => {
      setActiveIndex(null);
      closeTimer.current = null;
    }, 180);
  };

  return (
    <div className="absolute left-1/2 top-full z-40 hidden w-[315px] -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
      <div
        className="relative"
        onMouseEnter={keepSubmenuOpen}
        onMouseLeave={closeSubmenuSoon}
      >
        <div className="w-full rounded-3xl border border-white/10 bg-[#121720] px-5 py-5 shadow-2xl">
          {serviceItems.map((item, index) => (
            <NavLink
              key={item.label}
              to={item.to || "/services"}
              onMouseEnter={() => {
                keepSubmenuOpen();
                setActiveIndex(index);
              }}
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
          <>
          <div
            className="absolute left-full top-0 h-full w-4"
            aria-hidden="true"
            onMouseEnter={keepSubmenuOpen}
          />
          <div
            className="absolute left-[calc(100%+1rem)] top-0 w-[340px] rounded-3xl border border-white/10 bg-[#121720] px-5 py-5 shadow-2xl"
            onMouseEnter={keepSubmenuOpen}
          >
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
          </>
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceIndex, setMobileServiceIndex] = useState(null);
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
          onClick={() => {
            setMenuOpen((open) => !open);
            setMobileServicesOpen(false);
            setMobileServiceIndex(null);
          }}
          className="grid size-10 place-items-center rounded-full border border-white/15 text-xl lg:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0f15] px-5 py-5 lg:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => {
              if (item.dropdown === "services") {
                return (
                  <div key={item.label} className="rounded-2xl bg-white/5">
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => {
                        setMobileServicesOpen((open) => !open);
                        setMobileServiceIndex(null);
                      }}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-lg font-semibold text-white"
                    >
                      {item.label}
                      <FiChevronDown
                        className={`text-base transition ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="grid gap-2 px-3 pb-3">
                        <NavLink
                          to="/services"
                          onClick={() => setMenuOpen(false)}
                          className="rounded-xl px-3 py-2 text-sm font-semibold text-white/60 transition hover:bg-white/5 hover:text-white"
                        >
                          All services
                        </NavLink>

                        {serviceItems.map((service, index) => (
                          <div key={service.label} className="rounded-xl bg-black/20">
                            {service.items ? (
                              <button
                                type="button"
                                aria-expanded={mobileServiceIndex === index}
                                onClick={() =>
                                  setMobileServiceIndex((active) =>
                                    active === index ? null : index
                                  )
                                }
                                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-white"
                              >
                                <IconBox icon={service.icon} />
                                <span className="flex-1 text-base font-bold leading-tight">
                                  {service.label}
                                </span>
                                <FiChevronDown
                                  className={`text-sm text-white/70 transition ${
                                    mobileServiceIndex === index ? "rotate-180 text-white" : ""
                                  }`}
                                />
                              </button>
                            ) : (
                              <NavLink
                                to={service.to || "/services"}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-white"
                              >
                                <IconBox icon={service.icon} />
                                <span className="text-base font-bold leading-tight">
                                  {service.label}
                                </span>
                              </NavLink>
                            )}

                            {service.items && mobileServiceIndex === index && (
                              <div className="grid gap-1 px-3 pb-3 pl-[60px]">
                                {service.items.map((subItem) => {
                                  const label =
                                    typeof subItem === "string" ? subItem : subItem.label;
                                  const to =
                                    typeof subItem === "string" ? "/services" : subItem.to;

                                  return (
                                    <NavLink
                                      key={label}
                                      to={to}
                                      onClick={() => setMenuOpen(false)}
                                      className="rounded-lg py-2 text-sm font-semibold text-white/65 transition hover:text-white"
                                    >
                                      {label}
                                    </NavLink>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}
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
