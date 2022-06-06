import React from "react";
import Slider from "react-slick";
import Image1 from "./../../assets/6.png";
import Image2 from "./../../assets/7.png";
import Image3 from "./../../assets/8.png";

const SmallSideTwo = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="img_small_two">
          <img src={Image1} alt="image" />
        </div>
        <div className="img_small_two">
          <img src={Image2} alt="image" />
        </div>
        <div className="img_small_two">
          <img src={Image3} alt="image" />
        </div>
      </Slider>
    </div>
  );
};

export default SmallSideTwo;
