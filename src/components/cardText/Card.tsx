import { useContext, useState } from "react";
import "./cardText.css";
import i18next from "i18next";
import cookies from "js-cookie";

type propsCard = {
  title: String;
  subTitle: String;
  text: Boolean;
  setText: React.Dispatch<boolean>;
};
const Card = ({ title, subTitle, text, setText }: propsCard) => {
  const currentLanguagesCode = cookies.get("i18next") || "en";

  const ShowTextFun = () => setText(true);
  return (
    <div
      className={` card-text mt-5 ${text ? "bgGray" : null}`}
      onClick={ShowTextFun}
    >
      {text ? (
        <div>
          <div
            className={`${
              currentLanguagesCode === "en"
                ? "animation-text-aboutMe-en"
                : "animation-text-aboutMe-fa"
            }`}
          >
            <h5
              className={` yekanBold  ${
                text ? "text-white" : "colorGoodNight"
              }`}
            >
              {title}
            </h5>
          </div>
          <div
            className={`${
              currentLanguagesCode === "en"
                ? "animation-text-explainMe-en"
                : "animation-text-explainMe-fa"
            }`}
          >
            <p className="yekanBold draculaOrchid">{subTitle}</p>
          </div>
        </div>
      ) : (
          <div className="container-title">
            
          <h5 className="text-center  yekanBold colorGoodNight title">
            {title}
          </h5>
        </div>
      )}
    </div>
  );
};

export default Card;
