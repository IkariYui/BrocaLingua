import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t,  i18n } = useTranslation();
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="AboutBackgroundImage" src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        
        <h3 className="primary-heading">
        {t("services.tittle")}
        </h3>
        <p className="primary-text">
        {t("services.text")}
        </p>
        <p className="primary-text">
        {t("services.text2")}
        </p>
        

        
      </div>
    </div>
  );
};

export default About;
