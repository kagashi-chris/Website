import React from "react";
import classes from "./Section1PanelElement.module.css";

const Section1PanelElement = (props) => {
  return (
    <div>
      <img
        src={props.panelImg}
        alt="computer on desk"
        className={classes.panelImg}
      />
    </div>
  );
};

export default Section1PanelElement;
