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

  return (
    <QuoteModalProvider>
      <Navbar />
      <main className="">
        {/* Outlet renders the active page */}
        <Outlet />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
};

export default RootLayout;
