import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t,  i18n } = useTranslation();
  return (
    
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h3 className="primary-heading">
          {t("about.tittle")}
          </h3>
          <p className="primary-text">
          {t("about.info1")}
          </p>
          <p className="primary-text">
          {t("about.info2")}
          </p>
          <h3 className="primary-heading">
        {t("values.tittle")}
        </h3>
        <p className="primary-text">
        {t("values.text1")}
        </p>
        <p className="primary-text">
        {t("values.text2")}
        </p>
        <p className="primary-text">
        {t("values.text3")}
        </p>
        <p className="primary-text">
        {t("values.text4")}
        </p>

        </div>
        <div className="home-image-section">
          <img className="banner-img" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
