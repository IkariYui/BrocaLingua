import React from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    
  const { t,  i18n } = useTranslation();
  return (
    <div >
        <Navbar />
    <div >
      <br></br> <br></br> 
      <h1 className='termsandconditions'>{t("termsandconditions.tittle")}</h1>
      <div >
      <br></br> <br></br>   
      <p>{t("termsandconditions.text1")}</p> <br></br> <br></br> 
      <p>{t("termsandconditions.text2")}</p> <br></br>
      <p>{t("termsandconditions.text3")}.</p><br></br>
      <p>{t("termsandconditions.text4")}.</p><br></br><br></br>
      <p>{t("termsandconditions.text5")}.</p> 
      <p>{t("termsandconditions.text6")}.</p>
      <p>{t("termsandconditions.text7")}.</p>
      <p>{t("termsandconditions.text8")}.</p>

      <div className="contact-advertisement">
        <p>
        {t("contact.advertisement")}
        </p>
      </div>
      
      </div>
            <Link to="/" className="buttonlinks">
                <div className="goback">
                    <button className="secondary-button">Take me back</button>
                </div>
             </Link>     
      </div>
      <Footer />  
    </div>
    
  );
};

export default TermsAndConditions;
