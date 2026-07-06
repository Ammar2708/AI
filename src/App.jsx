// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Inner from "./pages/Inner";
import Contact from "./components/inner/Contact";
import Inter from "./components/inner/Inter";
import Process from "./components/inner/Process";
import Service from "./components/inner/Service";
import Corporate from "./components/inner/Corporate";
import Eco from "./components/inner/Eco";
import Landing from "./components/inner/Landing";
import Startup from "./components/inner/Startup";
import WebsiteDevelopment from "./components/inner/WebsiteDevelopment";
import WordPressDevelopment from "./components/inner/WordPressDevelopment";
import WebApp from "./components/inner/WebApp";
import WebDes from "./components/platform/WebDes";
import Ui from "./components/platform/Ui";
import MobApp from "./components/platform/MobApp";
import Identity from "./components/platform/Identity";
import Logo from "./components/platform/Logo";
import Ad from "./components/platform/Ad";
import OffSeo from "./components/company/OffSeo";
import Tech from "./components/company/Tech";
import Copy from "./components/company/Copy";

import Pricing from "./pages/Pricing";
import ConversionPage from "./pages/Conversion";
import SocialPage from "./pages/Social";
import PpcPage from "./pages/Ppc";





const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout wrapper
    children: [
      { path: "/", element: <Home /> },
      { path: "/Company", element: <Company /> },
      { path: "/About", element: <Inner /> },
      { path: "/about", element: <Inner /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/contact", element: <Contact /> },
      { path: "/Integration", element: <Inter /> },
      { path: "/integration", element: <Inter /> },
      { path: "/Process", element: <Process /> },
      { path: "/process", element: <Process /> },
      { path: "/Services", element: <Service /> },
      { path: "/services", element: <Service /> },
      { path: "/services/tech-seo", element: <Tech /> },
      { path: "/services/on-page-seo", element: <Company /> },
      { path: "/services/off-page-seo", element: <OffSeo /> },
      { path: "/services/seo-copywriting", element: <Copy /> },
      { path: "/services/website-development", element: <WebsiteDevelopment /> },
      { path: "/services/corporate-website-development", element: <Corporate /> },
      { path: "/services/startup-website-development", element: <Startup /> },
      { path: "/services/landing-page-development", element: <Landing /> },
      { path: "/services/ecommerce-development", element: <Eco /> },
      { path: "/services/web-application-development", element: <WebApp /> },
      { path: "/services/web-design-service", element: <WebDes /> },
      { path: "/services/mobile-app-design", element: <MobApp /> },
      { path: "/services/ui-ux-design", element: <Ui /> },
      { path: "/services/logo-design-service", element: <Logo /> },
      { path: "/services/brand-identity", element: <Identity /> },
      { path: "/services/banner-ad-design", element: <Ad /> },
      { path: "/services/wordpress-development", element: <WordPressDevelopment /> },
      { path: "/services/content-marketing", element: <Pricing /> },
      { path: "/services/ppc-services", element: <PpcPage /> },
      { path: "/ppc-services", element: <PpcPage /> },
      { path: "/services/conversion-marketing", element: <ConversionPage /> },
      { path: "/conversion-marketing", element: <ConversionPage /> },
      { path: "/services/social-media-marketing", element: <SocialPage /> },
      { path: "/social-media-marketing", element: <SocialPage /> },
      
      { path: "/Pricing", element: <Pricing /> },
      { path: "/pricing", element: <Pricing /> },
    
     
      
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
