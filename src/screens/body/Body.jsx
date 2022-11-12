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
          <h3>درباره‌ی من</h3>
          <p>مشخصات</p>
        </div>
        <div className="show_item">
          <div>
            <div></div>
          </div>
        </div>
        <div className="about_me">
          <div>
            <div className="container__avatar">
              <Avatar
                sx={{ width: 1, height: 1 }}
                src={Img}
              />
            </div>
            <div className="contanier_textarea">
              <p>
                سلام، مهدی شریفلو به توسعه دهنده‌ی Raect و
                Next.js .فعالیت دارم. به مدت یک سال در شرکت
                هوش و پدیده فناوی مشغول کار آموزی بودم و طی
                این مدت یه اپلیکیششن و وب سایت برای این شرکت
                ایجاد کردم.کار آموزی در این شرکت به من منظم
                بودن و کار کار گروهی را داد و مهارت‌های
                زیادی را، از جمله کار با استیت منیجر های
                مختلف و Rest Api و کتابخانه و پکیج های زیادی
                را کسب کردم
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
