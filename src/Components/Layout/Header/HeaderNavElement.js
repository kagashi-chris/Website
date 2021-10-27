import React from "react";
import classes from "./HeaderNavElement.module.css";

const HeaderNavElement = (props) => {
  return (
    <li className={classes.nav__items}>
      <a class="main-nav-link" href="#">
        {props.navName}
      </a>
    </li>
  );
};

export default HeaderNavElement;
