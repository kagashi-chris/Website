import React from "react";
import HeaderNavElement from "./HeaderNavElement";
import classes from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <ul className={classes.nav__links}>
      <HeaderNavElement navName="Skills" />
      <HeaderNavElement navName="Software" />
      <HeaderNavElement navName="About Me" />
      <HeaderNavElement navName="Projects" />
    </ul>
  );
};

export default HeaderNav;
