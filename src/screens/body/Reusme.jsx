import { Tab, Nav } from "react-bootstrap";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import Skills from "./Skills";
import Projects from "./Projects";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { checkrtl } from "./../../context/CheckRtl";
const Reusme = () => {
  const { t } = useTranslation();
  const { isRtl } = useContext(checkrtl);
  return (
    <div>
      <div className="container__text_reusme">
        <h3>{t("Reusme")}</h3>
        <p>{t("Details_my_reusme")}</p>
      </div>
      <div className="show_item_reusme">
        <div>
          <div></div>
        </div>
      </div>
      {/* tab menu */}
      <div className="container__tabs__">
        <Tab.Container defaultActiveKey="three">
          <div className="d-flex justify-content-center">
            <div className="container_tabMenu_resume ">
              <div
                className={
                  isRtl === "fa"
                    ? "shadow_rtl"
                    : "shadow_ltr"
                }
              >
                <div className="container__icons_tab">
                  <LaptopChromebookIcon />
                  <AccountTreeIcon />
                  <ColorLensIcon />
                </div>
                <div
                  className={
                    isRtl === "fa"
                      ? "container_tabs_resume_rtl"
                      : "container_tabs_resume_ltr"
                  }
                >
                  <Nav
                    variant="pills"
                    className="flex-column"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="three">
                        {t("Skills")}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">
                        {t("Projects")}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="five">
                        {t("experience_Work")}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div>
                <Tab.Content>
                  <Tab.Pane eventKey="three">
                    <Skills />
                  </Tab.Pane>
                  <Tab.Pane eventKey="four">
                    <Projects />
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <p className="yekanBold font85 px-3">{t("experience_Text")}</p>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Reusme;
