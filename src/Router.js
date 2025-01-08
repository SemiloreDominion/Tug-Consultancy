import React from 'react';
import {  useRoutes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/ContactUs/ContactUs";
import Services from "./Pages/ServicesPage/ServicesPage";

const Router = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/aboutUs",
        element: <About/>
    },
    {
        path: "/contactUs",
        element: <Contact/>
    },
    {
        path: "/servicesPage",
        element: <Services/>
    }
  ])
}

export default Router;