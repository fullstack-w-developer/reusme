import React from "react";
import Instagram from "./../../assets/instagram.svg";
import Telegram from "./../../assets/telegram.svg";
import Skype from "./../../assets/skype.svg";

import { useTranslation } from "react-i18next";

const ContentMe = () => {
  const { t } = useTranslation();
  return (
    <div className="container___contentme">
      <div className="container__text_reusme">
        <h3>{t("contect_me")}</h3>
        <p>{t("details_content_me")}</p>
      </div>
      <div className="show_item_contentMe">
        <div>
          <div></div>
        </div>
      </div>
      <div className="container__contentMe py-5">
        <div>
          <div>
            <h5 className="text-white IRANYekanExtraBold pb-2">
              {t("Social_Networks")}
            </h5>
            <div className=" container__icons_content_me ">
              <a href="https://www.instagram.com/mahdi_shariflo/">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="https://t.me/Mahdi_Shariflo">
                <img src={Telegram} alt="telegram" />
              </a>
              <a href="https://join.skype.com/invite/iF0Cjsce2cyB">
                <img src={Skype} alt="skype" />
              </a>
            </div>
          </div>
          <div className="content_with_email_phone">
            <h5 className="text-white IRANYekanExtraBold text-center pb-2">
              {t("email_phonenumber")}
            </h5>
            <p>
              {" "}
              <a
                href="mailto:mahdishariflodeveloper@gmail.com"
                className="text-center text-white IRANYekanReglour m-0"
              >
                {t("email")} : <span>mahdishariflodeveloper@gmail.com</span>
              </a>
            </p>
            <a
              href="tel:09052549459"
              className="text-center text-white IRANYekanReglour m-0 hover:text-gray-500"
            >
              {t("phonenumber")} : <span>9052549459</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMe;
