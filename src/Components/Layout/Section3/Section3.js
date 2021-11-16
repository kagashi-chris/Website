import React from "react";
import Section3Panel from "./Section3Panel";
import classes from "./Section3.module.css";

const Section3 = () => {
  return (
    <div className={classes.section3} id="projects">
      <h3 className={classes.textEffect}>
        <span>Projects</span>
      </h3>
      <Section3Panel />
    </div>
  );
};

export default Section3;
