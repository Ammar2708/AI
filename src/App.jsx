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
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";





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
      { path: "/services/website-development", element: <WebsiteDevelopment /> },
      { path: "/services/corporate-website-development", element: <Corporate /> },
      { path: "/services/startup-website-development", element: <Startup /> },
      { path: "/services/landing-page-development", element: <Landing /> },
      { path: "/services/ecommerce-development", element: <Eco /> },
      { path: "/services/wordpress-development", element: <WordPressDevelopment /> },
      { path: "/Platform", element: <Platform /> },
      { path: "/Pricing", element: <Pricing /> },
    
     
      
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
