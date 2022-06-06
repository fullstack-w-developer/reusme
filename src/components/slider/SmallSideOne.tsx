import React from "react";
import Slider from "react-slick";
import Image1 from "./../../assets/4.png";
import Image2 from "./../../assets/5.png";
import Image3 from "./../../assets/6.png";

function SamplePrevArrow(props:any) {
  const { style } = props;
  return <div style={{ display: "none" }} />;
}
const SmallSideOne = () => {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="img_small">
          <img src={Image1} alt="image" />
        </div>
        <div className="img_small">
          <img src={Image2} alt="image" />
        </div>
        <div className="img_small">
          <img src={Image3} alt="image" />
        </div>
      </Slider>
    </div>
  );
};

export default SmallSideOne;
