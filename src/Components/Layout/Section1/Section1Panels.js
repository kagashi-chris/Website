import React from "react";
import Section1PanelElement from "./Section1PanelElement";
// import classes from "../../../general.css";
import panelImg from "../../../assets/placeholderpanel.jpg";
import frontEndImg from "../../../assets/frontend.jpg";
import backEndImg from "../../../assets/backend.jpg";
import artImg from "../../../assets/art.jpg";
import classes from "./Section1Panels.module.css";

const Section1Panel = () => {
  return (
    <div className={classes.panels}>
      <Section1PanelElement panelImg={frontEndImg} />
      <Section1PanelElement panelImg={backEndImg} />
      <Section1PanelElement panelImg={artImg} />
    </div>
  );
};

export default Section1Panel;
