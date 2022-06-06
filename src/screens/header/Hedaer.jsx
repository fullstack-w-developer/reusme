import { useEffect, useContext } from "react";
import { ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { Avatar } from "@mui/material";
import Typical from "react-typical";
import Instagram from "./../../assets/instagram.svg";
import Telegram from "./../../assets/telegram.svg";
import Skype from "./../../assets/skype.svg";
import Image from "./../../assets/image.jpg";
import MyResume from "./../../assets/MyReusme.pdf";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import Scrollspy from "react-scrollspy";
import cookies from "js-cookie";
import i18next from "i18next";

import "./header.css";
import PhoneMenu from "../../components/phoneMenu/PhoneMenu";
import { checkrtl } from "./../../context/CheckRtl";

const Hedaer = () => {
  const langages = [
    {
      code: "fa",
      name: "فارسی",
      country_code: "ir",
      dir: "rtl",
      id: 1,
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
      id: 2,
    },
  ];
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = langages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const {setIsRtl } = useContext(checkrtl);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <Scrollspy
      items={["section-1", "section-2", "section-3"]}
      currentClassName="is-current"
    >
      <header>
        <div className="header">
          <nav className="menu_header">
            <ButtonGroup>
              <DropdownButton
                title={<LanguageIcon />}
                className="button_toggle_langage"
              >
                {langages.map((item, index) => (
                  <>
                    <Dropdown.Item
                      key={index + 1}
                      onClick={() => {
                        setIsRtl(item.code);
                        i18next.changeLanguage(item.code);
                      }}
                      className="yekanBold"
                    >
                      <div>
                        <span
                          className={`mx-2 flag-icon flag-icon-${item.country_code}`}
                        ></span>
                        {item.name}
                      </div>
                    </Dropdown.Item>
                  </>
                ))}
              </DropdownButton>
            </ButtonGroup>
            <ul>
              <li>{t("logo")}</li>
              <li>
                <a href="#Home">{t("menuitem1")}</a>
              </li>
              <li>
                <a href="#aboutme">{t("menuitem2")}</a>
              </li>
              <li>
                <a href="#reusme"> {t("menuitem3")}</a>
              </li>
              <li>
                <a href="#works">{t("menuitem4")}</a>
              </li>
              <li>
                <a href="#contentme">{t("menuitem5")}</a>
              </li>
            </ul>
          </nav>
          <PhoneMenu />
          <div className="personal__info">
            <div>
              <div className="container__image_">
                <a href="https://www.instagram.com/mahdi_shariflo/">
                  <img src={Instagram} alt="instagram" />
                </a>
                <a href="https://t.me/Mahdi_Shariflo">
                  <img src={Telegram} alt="telegram" />
                </a>
                <a href="https://join.skype.com/invite/iF0Cjsce2cyB">
                  <img src={Skype} alt="skype" />
                </a>
                {/* <img src={GooglePlus} alt="googlePlus" /> */}
              </div>
              <div className="mt-3">
                <h6 className="text-white yekanBold text-center">
                  {t("text_interduce")}
                </h6>
              </div>
              <div className="typecal_write">
                
                <Typical
                  steps={[
                    t("item1_typecal"),
                    4000,
                    t("item2_typecal"),
                    4000,
                    t("item3_typecal"),
                    4000,
                    t("item4_typecal"),
                    4000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
              <div>
                <h6 className="text-white yekanBold text-center px-1">
                  {t("text_header_item")}
                </h6>
              </div>
              <div className="container__btn">
                <button>
                  <a href="#aboutme">{t("buttton_header1")}</a>
                </button>
                <button>
                  <a href={MyResume} download="MyResume">
                    {t("buttton_header2")}
                  </a>
                </button>
              </div>
            </div>
            <div className="container_avatar">
              <Avatar  sx={{ width: 170, height: 170 }} />
            </div>
          </div>
        </div>
      </header>
    </Scrollspy>
  );
};

export default Hedaer;
