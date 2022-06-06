import { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import Html from "./../../assets/html.svg";
import Css from "./../../assets/css.svg";
import JavaScript from "./../../assets/javascript.svg";
import ReactIcon from "./../../assets/react.svg";
import Bootstrap from "./../../assets/bootstrap.svg";
import Material from "./../../assets/material.svg";
import Node from "./../../assets/node.svg";
import MongoDb from "./../../assets/mongodb.svg";
import Next from "./../../assets/next.png";
import Tailwind from "./../../assets/tailwind.png";
import ItemSkills from "./ItemSkills";
import { checkrtl } from "./../../context/CheckRtl";

const Skills = () => {
  const { isRtl } = useContext(checkrtl);
  return (
    <div className="container_skills">
      <div className="d-flex justify-content-around align-items-center">
        {/* html */}
        <ItemSkills src={Html} name="Html5" alt="html" />
        {/* css */}
        <ItemSkills src={Css} name="Css" alt="css" />
      </div>
      <div className="d-flex justify-content-around align-items-center">
        {/* javascript */}
        <ItemSkills
          src={JavaScript}
          name="Javascript"
          alt="javascript"
        />
        {/* react */}
        <ItemSkills
          src={ReactIcon}
          name="React.js"
          alt="react"
        />
      </div>
      <div className="d-flex justify-content-around align-items-center">
        {/* next */}
        <ItemSkills
          src={Next}
          name="Next.js"
          alt="Next.js"
        />

        {/* bootstrap  */}
        <ItemSkills
          src={Bootstrap}
          name="Bootstrap"
          alt="Bootstrap"
        />
      </div>
      <div className="d-flex justify-content-around align-items-center">
        {/* material ui */}
        <ItemSkills
          src={Material}
          name="Material Ui"
          alt="material"
        />

        {/* node.js */}
        <ItemSkills
          src={Tailwind}
          name="Tailwind Css"
          alt="Tailwind"
        />
      </div>
    </div>
  );
};

export default Skills;
