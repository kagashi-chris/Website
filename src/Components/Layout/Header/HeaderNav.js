import React from "react";
import HeaderNavElement from "./HeaderNavElement";
import classes from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <ul className={classes.nav__links}>
      <HeaderNavElement navName="Skills" link="#skill" />
      <HeaderNavElement navName="Software" link="#software" />
      <HeaderNavElement navName="Projects" link="#projects" />
    </ul>
  );
};

export default HeaderNav;
