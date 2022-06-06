import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Img1 from "./../../assets/1.webp";
import Img2 from "./../../assets/2.webp";
import Img3 from "./../../assets/3.webp";
import Img4 from "./../../assets/4.webp";
import Img5 from "./../../assets/5.webp";
import Img6 from "./../../assets/6.webp";
import Img7 from "./../../assets/7.webp";
import Img8 from "./../../assets/8.webp";
import Img9 from "./../../assets/9.webp";
import "./slider.css";
import CardSlides from "./CardSlides";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="next_icon">
      <IconButton>
        <ArrowForwardIosIcon sx={{ color: "#fff" }} />
      </IconButton>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prev_icon">
      <IconButton>
        <ArrowBackIosIcon sx={{ color: "#fff" }} />
      </IconButton>
    </div>
  );
}
const Works = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container__text_reusme">
        <h3>{t("show_works")}</h3>
        <p>{t("details_works")}</p>
      </div>
      <div className="show_item_works">
        <div>
          <div></div>
        </div>
      </div>
      <div className="container__slider">
        <Slider {...settings}>
          <CardSlides src={Img1} title={t("practice_project")} />
          <CardSlides src={Img2} title={t("practice_project")} />
          <CardSlides src={Img3} title={t("practice_project")} />
          <CardSlides src={Img4} title={t("practice_project")} />
          <CardSlides src={Img5} title={t("practice_project")} />
          <CardSlides src={Img6} title={t("practice_project")} />
          <CardSlides src={Img7} title={t("practice_project")} />
          <CardSlides src={Img8} title={t("practice_project")} />
          <CardSlides src={Img9} title={t("practice_project")} />
        </Slider>
      </div>
    </>
  );
};

export default Works;
