import React from "react";
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import SmallSideOne from "./SmallSideOne";
import SmallSideTwo from "./SmallSideTwo";
import Image1 from "./../../assets/1.png";
import Image2 from "./../../assets/9.png";
import Image3 from "./../../assets/3.png";

function SamplePrevArrow(props:any) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

const SliderBody = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-body">
      <div className="slider-big">
        <div>
          <Slider {...settings}>
            <div className="img">
              <img src={Image1} alt="image" />
            </div>
            <div className="img">
              <img src={Image2} alt="image" />
            </div>
            <div className="img">
              <img src={Image3} alt="image" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="slider-small">
        <div >
          <SmallSideOne />
        </div>
        <div >
          <SmallSideTwo />
        </div>
      </div>
    </div>
  );
};

export default SliderBody;
