/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-scroll";
import i18n from '../Translation'; 
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t,  i18n } = useTranslation();
  function changeLang(lang) {
    i18n.changeLanguage(lang);
    }
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Services",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Prices",
      icon: <PhoneRoundedIcon />,
    },
    
  ];
  return (
    <nav>
      <div className="nav-logo-container">
      <Link to="/" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}><img src={Logo} alt="BrocaLingua" /></Link>
      
      </div>
      <div className="navbar-links-container">
        
      <a href="#">
          <Link to="home" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}>
            {t("navbar.about")}
           </Link>
      </a>
      <a href="#">
        <Link to="services" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.services")}</Link>
      </a>  
      <a href="#">
        <Link to="languages" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}>{t("navbar.languages")}</Link>
      </a>    
        <button className="primary-button" onClick={ () => changeLang('en') }>EN</button>
        <button className="primary-button" onClick={ () => changeLang('es') }>ES</button>
      </div>
      
    </nav>
  );
};

export default Navbar;
