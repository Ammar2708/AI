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
import WebsiteDevelopment from "./components/inner/WebsiteDevelopment";
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
      { path: "/Platform", element: <Platform /> },
      { path: "/Pricing", element: <Pricing /> },
    
     
      
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
