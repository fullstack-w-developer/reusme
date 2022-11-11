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
  const { setIsRtl } = useContext(checkrtl);

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
        <ButtonGroup>
          <DropdownButton
            title={
              <LanguageIcon
                sx={{
                  width: 30,
                  height: 30,
                  marginTop: "10px",
                }}
              />
            }
            className="button_toggle_langage"
          >
            {langages.map((item, index) => (
              <Dropdown.Item
                key={item.code}
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
            ))}
          </DropdownButton>
        </ButtonGroup>
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
            <h4>{t("logo")}</h4>
            <li onClick={handleToggle}>
              <a href="#home">{t("menuitem1")}</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#aboutme">{t("menuitem2")}</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#reusme"> {t("menuitem3")}</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#works"> {t("menuitem4")}</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#contentme"> {t("menuitem5")}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneMenu;
