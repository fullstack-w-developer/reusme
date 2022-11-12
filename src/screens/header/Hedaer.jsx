import { useEffect } from "react";
import { Avatar } from "@mui/material";
import Typical from "react-typical";
import Instagram from "./../../assets/instagram.svg";
import Telegram from "./../../assets/telegram.svg";
import Skype from "./../../assets/skype.svg";
import Img from "./../../assets/img.jpeg";
import MyResume from "./../../assets/MyReusme.pdf";
import PhoneMenu from "../../components/phoneMenu/PhoneMenu";
import Scrollspy from "react-scrollspy";

import "./header.css";

const Hedaer = () => {
  useEffect(() => {
    document.title = "رزومه";
  }, []);

  return (
    <Scrollspy
      items={["section-1", "section-2", "section-3"]}
      currentClassName="is-current"
    >
      <header>
        <div className="header">
          <nav className="menu_header">
            <ul>
              <li>مهدی شریفلو</li>
              <li>
                <a href="#Home">خانه</a>
              </li>
              <li>
                <a href="#aboutme">درباره‌ی من</a>
              </li>
              <li>
                <a href="#reusme">رزومه</a>
              </li>
              <li>
                <a href="#works">نمونه کارها</a>
              </li>
              <li>
                <a href="#contentme">تماس با من</a>
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
                سلام، من مهدی شریفلو هستم
                </h6>
              </div>
              <div className="typecal_write">
                <Typical
                  steps={[
                    "جاوا اسکریپت",
                    4000,
                    "ری اکت و نکست جی اس",
                    4000,
                    "ری اکت تایپ اسکریپت",
                    4000,
                    "وب اپلیکیشن 😅",
                    4000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
              <div>
                <h6 className="text-white yekanBold text-center px-1">
                  ساخت وب سایت ها، وب اپلیکیشن ها و موبایل
                  های اپلیکیشنی
                </h6>
              </div>
              <div className="container__btn">
                <button>
                  <a href="#aboutme">من اینجام</a>
                </button>
                <button>
                  <a href={MyResume} download="MyResume">
                    رزومه
                  </a>
                </button>
              </div>
            </div>
            <div className="container_avatar">
              <Avatar
                src={Img}
                sx={{ width: 170, height: 170 }}
              />
            </div>
          </div>
        </div>
      </header>
    </Scrollspy>
  );
};

export default Hedaer;
