import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Img1 from "./../../assets/1.jpeg";
import Img2 from "./../../assets/2.jpeg";
import Img3 from "./../../assets/3.jpeg";
import Img4 from "./../../assets/4.jpeg";
import Img5 from "./../../assets/5.jpeg";
// import Img6 from "./../../assets/6.jpef";
// import Img7 from "./../../assets/7.webp";
// import Img8 from "./../../assets/8.webp";
// import Img9 from "./../../assets/9.webp";
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
    autoplaySpeed: 9000,
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
        <h3>نمونه کارها</h3>
        <p>جزئیات</p>
      </div>
      <div className="show_item_works">
        <div>
          <div></div>
        </div>
      </div>
      <div className="container__slider">
        <Slider {...settings}>
          <CardSlides
            href="https://shop-dress.vercel.app/"
            src={Img1}
            title="فروشگاه آنلاین لباس"
          />
          <CardSlides
            href="https://clone-shop-okala.vercel.app/"
            src={Img2}
            title="نمونه کار سوپرمارکت اوکالا"
          />
          <CardSlides
            href="https://mahdi-shariflo.github.io/azmoon-online/"
            src={Img3}
            title=" نمونه کار وب اپلیکیشن آزمون آنلاین "
          />
          <CardSlides
            href="https://mahdi-shariflo.github.io/website-examplae/"
            src={Img4}
            title="وب سایت رستوران "
          />
          <CardSlides
            href="https://shop-next-shariflo.vercel.app/"
            src={Img5}
            title="فروشگاه آنلاین"
          />
        </Slider>

        <div className="text-white font75 yekanBold">
          <p>آدرس گیت هاب: <a href="https://github.com/mahdi-shariflo?tab=repositories">https://github.com/mahdi-shariflo</a></p>
        </div>
      </div>
    </>
  );
};

export default Works;
