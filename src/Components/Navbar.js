/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link as ScrollLink } from "react-scroll";
import i18n from '../Translation'; 
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as RouterLink } from "react-router-dom";
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const openCloseDropdown = () =>{
    setDropdown(!dropdown);
  }

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
      <RouterLink to="/" activeClass="active" spy={true} smooth={true} offset={0} duration={1000}><img className="logo" src={Logo} alt="BrocaLingua" /></RouterLink>
      
      </div>
      <div className="navbar-links-container">
        
      <a href="#">
          <ScrollLink to="home" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>
            {t("navbar.about")}
           </ScrollLink>
      </a>
      <a href="#">
        <ScrollLink to="services" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>{t("navbar.services")}</ScrollLink>
      </a>  
      <a href="#">
        <ScrollLink to="languages" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>{t("navbar.languages")}</ScrollLink>
      </a>    
      <div className="dropdown-container">
        <Menu>
          <MenuButton  rightIcon={<ChevronDownIcon />}>
          {t("navbar.pricing")}
          </MenuButton>
          <MenuList>
            <MenuItem>
              <RouterLink to="/TranslationForm" activeClass="active">{t("translationform.tittle")}</RouterLink>
            </MenuItem>
            <MenuItem>
              <RouterLink to="/InterpretationForm" activeClass="active">{t("interpretationform.tittle")}</RouterLink>
            </MenuItem>
            <MenuItem>
              <RouterLink to="/ContactUs" activeClass="active">{t("contact.contactus")}</RouterLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
        <div className="langbt-container">
          <button className="primary-button languageButtons" onClick={ () => changeLang('en') }>EN</button>
          <button className="primary-button languageButtons" onClick={ () => changeLang('es') }>ES</button>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
