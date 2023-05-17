import React from 'react';
import Home from "../Components/Home";
import About from "../Components/About";
import Testimonial from "../Components/Languages";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { useTranslation } from 'react-i18next';
import Services from '../Components/Services';

export function HomePage () {
    const { t,  i18n } = useTranslation();
    return (
      <>
      <Home />
      <About />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />  
      </>
    )
  }