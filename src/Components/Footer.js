import React from "react";
import Logo from "../Assets/Logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const Footer = () => {
  return (
    <div className="wrapper">
      <div className="one">
        <div className="icons">
          <div className="footer-logo-container">
            <img src={Logo} alt="BrocaLingua" />
          </div>
          <div className="footer-icons">
            <Link to="/" className="buttonlinks"> <FaWhatsapp/></Link>
            <Link to="/" className="buttonlinks"> <FaLinkedin/></Link>
            <Link to="/" className="buttonlinks"> <FaInstagram/></Link>
            <Link to="/" className="buttonlinks"> <FaFacebook/></Link>
          </div>
        </div>
       
      </div>
      <div className="two">
        <div className="footer-section-columns">
           <Link to="/TermAndConditions" className="buttonlinks">Terms & Conditions </Link>
           <Link to="/" className="buttonlinks">Privacy policy </Link>
        </div>
      </div>
    </div>
  );
};


export default Footer;
