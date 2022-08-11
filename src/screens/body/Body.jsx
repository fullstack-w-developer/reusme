import React from "react";
import { Avatar } from "@mui/material";
import "./body.css";
import Reusme from "./Reusme";
import Works from "./Works";
import ContentMe from "./ContentMe";
import Scrollspy from "react-scrollspy";
import Img from "./../../assets/img.jpeg";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { t } = useTranslation();
  return (
    <Scrollspy
      items={["aboutme", "reusme", "works", "contentme"]}
      currentClassName="is-current"
    >
      <div id="aboutme">
        <div className="container__text">
          <h3>{t("about_me")}</h3>
          <p>{t("Property")}</p>
        </div>
        <div className="show_item">
          <div>
            <div></div>
          </div>
        </div>
        <div className="about_me">
          <div>
            <div className="container__avatar">
              <Avatar sx={{ width: 1, height: 1 }} src={Img} />
            </div>
            <div className="contanier_textarea">
              <p>
             {t("property_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="reusme">
        <Reusme />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="contentme">
        <ContentMe />
      </div>
    </Scrollspy>
  );
};

export default Body;
