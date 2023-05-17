import React from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t,  i18n } = useTranslation();
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">{t("contact.tittle")}</h1>
      <p className="primary-text">{t("contact.text")}</p>
      <div className="contact-advertisement">
        <p>
        {t("contact.advertisement")}
        </p>
      </div>
    </div>
    
  );
};

export default Contact;
