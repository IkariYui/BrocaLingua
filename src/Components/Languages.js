import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";

import { useTranslation } from 'react-i18next';

const Languages = () => {
  const { t,  i18n } = useTranslation();
  return (
    <div className="work-section-wrapper" id="languages">
      <div className="work-section-top">
        
        <h1 className="primary-heading">{t("languages.language-tittle")}</h1>
        <p className="primary-text">
        {t("languages.language-text")}
        </p>
      </div>
      <div className="lang-section-bottom">
          <div className="lang-section-info">        
            <h4 className="primary-subheading">{t("languages.english")}</h4>
            <img className="flagImage" src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?w=1060&t=st=1683248272~exp=1683248872~hmac=301f1efee6977677401751295a203f38a66c71edd2101cfdf54b53ba61246376" alt="UK" title="United Kingdom" />
            <p >{t("languages.english-description")}</p>
          </div>
          <div className="lang-section-info">          
            <h4 className="primary-subheading">{t("languages.spanish")}</h4>
            <img className="flagImage" src="https://img.freepik.com/free-vector/illustration-spain-flag_53876-18168.jpg?w=1060&t=st=1683248395~exp=1683248995~hmac=0730fa92f5c99d1b3b2a9cff92856a9ee249c7358ed024e1e478f5a9bb70a9f3" alt="ES" title="Spain" />
            <p >{t("languages.spanish-description")}</p>
          </div>
          <div className="lang-section-info">          
            <h4 className="primary-subheading">{t("languages.german")}</h4>
            <img className="flagImage" src="https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg?w=1060&t=st=1683248772~exp=1683249372~hmac=09e7429eff047c343c3065b788a83ab4def1e023382e0379f107cc8ab944caaf" alt="GE" title="Germany" />
            <p >{t("languages.german-description")}</p>
          </div>
          <div className="lang-section-info">          
            <h4 className="primary-subheading">{t("languages.swedish")}</h4>
            <img className="flagImage" src="https://img.freepik.com/free-vector/illustration-sweden-flag_53876-27102.jpg?w=1060&t=st=1683248846~exp=1683249446~hmac=3cb84e3502b5db790ac091834e38215b95a13d1f6330c15b9567c0097e7a12b7" alt="SV" title="Swedish" />
            <p >{t("languages.swedish-description")}</p>
          </div>
          <div className="lang-section-info">          
            <h4 className="primary-subheading">{t("languages.french")}</h4>
            <img className="flagImage" src="https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?w=1060&t=st=1683248919~exp=1683249519~hmac=cdb73d5b70c64b765095dc6f3e6fd9dd03932445e51bae3d02247874d76df699" alt="FR" title="France" />
            <p >{t("languages.french-description")}</p>
          </div>
          <div className="lang-section-info">          
            <h4 className="primary-subheading">{t("languages.japanese")}</h4>
            <img className="flagImage" src="https://img.freepik.com/free-vector/illustration-japan-flag_53876-27128.jpg?w=1060&t=st=1683248977~exp=1683249577~hmac=0e6adb66cb1759100c389c3e60ff67ff017048e1ff33adde3207db9705058863" alt="JP" title="Japan" />
            <p >{t("languages.japanese-description")}</p>
          </div>

        
      </div>
    </div>
  );
};

export default Languages;
