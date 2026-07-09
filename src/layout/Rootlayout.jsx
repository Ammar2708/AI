// src/layout/RootLayout.jsx
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { QuoteModalProvider } from "../components/QuoteModal";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return undefined;

    const revealTargets = document.querySelectorAll(
      [
        "nav",
        "header",
        "main section",
        "main article",
        "main details",
        "main form",
        "main img",
        "main a[href]",
        "main button",
        "footer > *",
      ].join(",")
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("site-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 35, 260)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );

    revealTargets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight;

      if (isInViewport) {
        target.classList.add("is-visible");
        return;
      }

      observer.observe(target);
    });

    const revealFallback = window.setTimeout(() => {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    }, 1200);

    return () => {
      window.clearTimeout(revealFallback);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <QuoteModalProvider>
      <Navbar />
      <main className="site-page-motion">
        {/* Outlet renders the active page */}
        <Outlet />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
};

export default RootLayout;
