import React from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Faq = () => {
    
  const { t,  i18n } = useTranslation();
  return (
    <div >
        <Navbar />
    <div >
      <br></br> <br></br> 
        <h1 className='termsandconditions'>{t("faq.tittle")}</h1>
      <div className='terms-text'>
        <br></br> <br></br>   
        <p className="faq">{t("faq.documentsentquestion")}</p>
        <p>{t("faq.documentsentanswer")}</p> <br></br>
        <p className="faq">{t("faq.totalcostquestion")}.</p>
        <p>{t("faq.totalcostanswer")}</p><br></br>
        <p className="faq">{t("faq.wordsorpagesquestion")}</p> 
        <p>{t("faq.wordsorpagesanswer")}</p> <br></br>
        <p className="faq">{t("faq.datahandledquestion")}</p>
        <p>{t("faq.datahandledanswer")}</p> <br></br>
        <p className="faq">{t("faq.projectdeliverquestion")}</p>
        <p>{t("faq.projectdeliveranswer")}</p> <br></br>
        <p className="faq">{t("faq.languagesquestion")}</p>
        <p>{t("faq.languagesanswer")}</p> <br></br>
        <p className="faq">{t("faq.interpretationquestion")}</p>
        <p>{t("faq.interpretationanswer")}</p> <br></br>
        <p className="faq">{t("faq.paymentmethod")}</p>
        <p>{t("faq.paymentmethodanswer")}</p> <br></br>
        <p className="faq">{t("faq.currencies")}</p>
        <p>{t("faq.currenciesanswer")}</p> <br></br>

      
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

export default Faq;
