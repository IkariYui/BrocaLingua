import React from 'react';
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { useTranslation } from 'react-i18next';

export function HomePage () {
    const { t,  i18n } = useTranslation();
    return (
      <>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />  
      </>
    )
  }