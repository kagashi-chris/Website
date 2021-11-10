import React from "react";

import classes from "./Section2Icons.module.css";

import Section2IconElement from "./Section2IconElement";
import AfterEffectIcon from "../../../assets/AffterEffectIcon.png";
import CSSIcon from "../../../assets/CSS3Icon.png";
import GithubIcon from "../../../assets/GithubIcon.png";
import HTML5Icon from "../../../assets/HTML5Icon.png";
import JavaIcon from "../../../assets/JavaIcon.png";
import JavascriptIcon from "../../../assets/JavascriptIcon.png";
import MongoDBIcon from "../../../assets/MongoDBIcon.png";
import PhotoshopIcon from "../../../assets/PhotoshopIcon.png";
import PostgresqlIcon from "../../../assets/PostgreSQLIcon.png";
import PythonIcon from "../../../assets/PythonIcon.png";
import ReactIcon from "../../../assets/ReactIcon.png";
import SpringIcon from "../../../assets/SpringFrameworkIcon.png";

const Section2Icons = () => {
  return (
    <div className={classes.iconGallery}>
      <Section2IconElement iconImg={AfterEffectIcon} />
      <Section2IconElement iconImg={CSSIcon} />
      <Section2IconElement iconImg={GithubIcon} />
      <Section2IconElement iconImg={HTML5Icon} />
      <Section2IconElement iconImg={JavaIcon} />
      <Section2IconElement iconImg={JavascriptIcon} />
      <Section2IconElement iconImg={MongoDBIcon} />
      <Section2IconElement iconImg={PhotoshopIcon} />
      <Section2IconElement iconImg={PostgresqlIcon} />
      <Section2IconElement iconImg={PythonIcon} />
      <Section2IconElement iconImg={ReactIcon} />
      <Section2IconElement iconImg={SpringIcon} />
    </div>
  );
};

export default Section2Icons;
