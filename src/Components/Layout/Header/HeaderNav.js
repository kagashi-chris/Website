import React from "react";
import HeaderNavElement from "./HeaderNavElement";
import classes from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <ul className={classes.nav__links}>
      <HeaderNavElement />
      <HeaderNavElement />
      <HeaderNavElement />
    </ul>
  );
};

export default HeaderNav;
