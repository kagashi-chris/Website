import React from "react";
import classes from "./HeaderNavElement.module.css";

const HeaderNavElement = (props) => {
  return (
    <li>
      <a className={classes.nav__items} href={props.link}>
        {props.navName}
      </a>
    </li>
  );
};

export default HeaderNavElement;
