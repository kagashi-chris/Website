import React from "react";
import Section3Panel from "./Section3Panel";
import classes from "./Section3.module.css";
import cssIcon from "../../../assets/CSS3Icon.png";
import html5Icon from "../../../assets/HTML5Icon.png";
import javaIcon from "../../../assets/JavaIcon.png";

const Section3 = () => {
  const project1Items = [
    { jIcon: javaIcon },
    { hIcon: html5Icon },
    { cIcon: cssIcon },
  ];

  return (
    <div className={classes.section3} id="projects">
      <h3 className={classes.textEffect}>
        <span>Projects</span>
      </h3>
      <Section3Panel iconList={project1Items} />
    </div>
  );
};

export default Section3;
