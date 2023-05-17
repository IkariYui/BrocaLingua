import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const generateWorkInfoData = (t) => [
  {
    title: t("services.tiservice-tittle"),
    text: t("services.tiservice-text1"),
  },
  {
    title: t("services.tiservice-tittle"),
    text: t("services.tiservice-text2"),
  },
  {
    title: t("services.todservice-tittle"),
    text: t("services.todservice-text"),
  },
  {
    title: t("services.slservice-tittle"),
    text: t("services.slservice-text"),
  },
  {
    title: t("services.ftservice-tittle"),
    text: t("services.ftservice-text"),
  },
  {
    title: t("services.tsfgaservice-tittle"),
    text: t("services.tsfgaservice-text"),
  },
];

const Services = () => {
  const { t, i18n } = useTranslation();
  const [workInfoData, setWorkInfoData] = useState(generateWorkInfoData(t));

  useEffect(() => {
    setWorkInfoData(generateWorkInfoData(t));
  }, [i18n.language]);

  return (
    <div className="work-section-wrapper" id="services">
      <div className="work-section-top">
        <h2 className="primary-heading">{t("services.subtittle")}</h2>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <h4 className="primary-subheading">{data.title}</h4>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
