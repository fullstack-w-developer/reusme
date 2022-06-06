import React from "react";

interface propsType {
  src: string;
  alt: string;
  rtl: string;
  progress__css: string;
  name: string;
}
const ItemSkills = ({ src, alt, name }: propsType) => {
  return (
    <div
      className={` d-flex align-items-center justify-content-center flex-row-reverse css_progress__ `}
    >
      <p className="yekanBold m-0">{name}</p>
      <img src={src} alt={alt} className="skill_icons" />
    </div>
  );
};

export default ItemSkills;
