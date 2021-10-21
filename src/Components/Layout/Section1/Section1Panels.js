import React from "react";
import Section1PanelElement from "./Section1PanelElement";
// import classes from "../../../general.css";
import panelImg from "../../../assets/placeholderpanel.jpg";
import classes from "./Section1Panels.module.css";

const Section1Panel = () => {
  return (
    <div className={classes.panels}>
      <Section1PanelElement panelImg={panelImg} />
      <Section1PanelElement panelImg={panelImg} />
      <Section1PanelElement panelImg={panelImg} />
    </div>
  );
};

export default Section1Panel;
