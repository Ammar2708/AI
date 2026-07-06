// src/layout/RootLayout.jsx
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <main className="">
        {/* Outlet renders the active page */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
