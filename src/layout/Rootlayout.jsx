// src/layout/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const RootLayout = () => {
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