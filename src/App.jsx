// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Inner from "./pages/Inner";
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";





const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout wrapper
    children: [
      { path: "/", element: <Home /> },
      { path: "/Company", element: <Company /> },
      { path: "/Inner pages", element: <Inner  /> },
      { path: "/Platform", element: <Platform /> },
      { path: "/Pricing", element: <Pricing /> },
    
     
      
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;