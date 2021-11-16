import React from "react";
import Section3PanelElement from "./Section3PanelElement";
import classes from "./Section3Panel.module.css";

const Section3Panel = () => {
  return (
    <div className={classes.section3Panel}>
      <Section3PanelElement />
      <Section3PanelElement />
      <Section3PanelElement />
      <Section3PanelElement />
    </div>
  );
};

export default Section3Panel;
