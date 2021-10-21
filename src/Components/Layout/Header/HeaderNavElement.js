import React from "react";
import classes from "./HeaderNavElement.module.css";

const HeaderNavElement = (props) => {
  return <li className={classes.nav__items}>{props.navName}</li>;
};

export default HeaderNavElement;
