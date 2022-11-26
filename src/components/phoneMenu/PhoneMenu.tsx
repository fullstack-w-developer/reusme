import { useEffect, useContext } from "react";
import {
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./style.css";
import useToggle from "../../customHook/useToggle";
import { useTranslation } from "react-i18next";
import { checkrtl } from "./../../context/CheckRtl";
import LanguageIcon from "@mui/icons-material/Language";
import cookies from "js-cookie";
import i18next from "i18next";

const PhoneMenu = () => {
  const { toggle, handleToggle } = useToggle();

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
  const currentLanguageCode =
    cookies.get("i18next") || "en";
  const currentLanguage = langages.find(
    (l) => l.code === currentLanguageCode
  );
  const { t } = useTranslation();


  useEffect(() => {
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="phone_menu">
      <div className="d-flex flex-row-reverse justify-content-between align-items-center">
        <div className="mx-3 pt-2 " onClick={handleToggle}>
          <DehazeIcon
            sx={{ width: 40, height: 40 }}
            className="text-white"
          />
        </div>
     
      </div>
      <div
        className={`container_menu_phone`}
        style={
          toggle
            ? { transform: "translateX(0)" }
            : undefined
        }
      >
        <div className="mx-3 pt-2" onClick={handleToggle}>
          <DehazeIcon
            sx={{ width: 40, height: 40 }}
            className="text-white"
          />
        </div>
        <div className="container_menu">
          <ul>
            <h4>مهدی شریفلو</h4>
            <li onClick={handleToggle}>
              <a href="#home">خانه</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#aboutme">درباره‌ی من</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#reusme">رزومه</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#works">نمونه کار ها</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#contentme">تماس با من</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneMenu;
