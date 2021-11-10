import React from "react";
import classes from "./Section2IconElement.module.css";

const Section2IconElement = (props) => {
  return (
    <div>
      <img src={props.iconImg} alt={props.alt} className={classes.icon} />
    </div>
  );
};

export default Section2IconElement;
